import { Block, Button, Dialog, List, ListInput, BlockTitle, ListItem   } from 'konsta/react'
import React, {  useState } from 'react'
import { toast } from 'react-toastify';
import { useUpdateUserInfoMutation , useLogoutMutation } from '../../../slices/usersApiSlice';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../slices/authSlice';
import { useSelector, useDispatch } from 'react-redux';

function ChangePass() {
  const [updateUser ] = useUpdateUserInfoMutation()
  const [changePass , setchangePass] = useState(false)
  const [password , setPassword] = useState("")
  const [confirmPassword , setConfirmPassword] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
      toast.warning('Si sax ah ayaad uga baxday' , {
        position: toast.POSITION.TOP_CENTER
    });
    } catch (err) {
      console.error(err);
    }
  };
  const Sent = async (e) => {
    e.preventDefault();
      try {
        
        if (password == '') {
          toast.error('Fadlan meesha banaan soo buuxi' , {
            position: toast.POSITION.TOP_CENTER
        });
        } else  {
        if (password != confirmPassword) {
            toast.error('Password ka isku mid ma ahan' , {
                position: toast.POSITION.TOP_CENTER
            });
        } else {
            const res = await updateUser({
            password
            }).unwrap();
            await logoutApiCall().unwrap();
                dispatch(logout());
                navigate('/login');
            toast.warning('si sax ayaad u badashay password kaaga fadlan ku soo gal password kaaga cusub ...' , {
                position: toast.POSITION.TOP_CENTER
            });  
                  
            dispatch(setCredentials(res));
        }
        
        }
       } catch (err) {
        toast.error(err?.data , {
          position: toast.POSITION.TOP_CENTER
      });
      }
   
  }
  return (
    <>
     <ListItem href title="Change Password" onClick={() => setchangePass(true)} />
      {/* changePass Diag mode  */}
      <Dialog
            opened={changePass}
            onBackdropClick={() => setchangePass(false)}
                >
            <svelte:fragment slot="title"><BlockTitle>Fadlan Gali Password kaaga
            </BlockTitle></svelte:fragment>
          
             <Block>
             
             </Block>
             <svelte:fragment slot="title">
             <List>
              <ListInput
                type="password"
                info="Password kaaga cusub"
                onChange={(e) => setPassword(e.target.value)}
              />
              <ListInput
                type="password"
                info="Ku celi password kaaga mar kale"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
             </List>
             </svelte:fragment>
            <svelte:fragment slot="buttons" className="grid grid-cols-2 gap-x-4">
            <Button outlineMaterial onClick={() => setchangePass(false) }>Maya</Button>
            <form onSubmit={Sent}>
              <Button strong onClick={() => setchangePass(false)}>
             Haa
            </Button>
            </form>
            </svelte:fragment>
        </Dialog>
    </>
  )
}

export default ChangePass