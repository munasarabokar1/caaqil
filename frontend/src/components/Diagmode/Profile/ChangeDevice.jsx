import { Block, Button, Dialog, List, ListInput, BlockTitle, ListItem   } from 'konsta/react'
import React, {  useState } from 'react'
import { toast } from 'react-toastify';
import { useUpdateUserInfoMutation } from '../../../slices/usersApiSlice';


function ChangeDevice() {
  const [updateUser ] = useUpdateUserInfoMutation()
  const [deviceId , setdeviceId] = useState(false)
  const [device , setDevice] = useState("")
  const Sent = async (e) => {
    e.preventDefault();
      try {
        
        if (device == '') {
          toast.error('Fadlan meesha banaan soo buuxi' , {
            position: toast.POSITION.TOP_CENTER
        });
        } else  {
        
          const res = await updateUser({
            device
          }).unwrap();
          toast.success('Successfully Changed ...' , {
            position: toast.POSITION.TOP_CENTER
        });
            
           dispatch(setCredentials(res));
        }
       } catch (err) {
        toast.error(err?.data , {
          position: toast.POSITION.TOP_CENTER
      });
      }
   
  }
  return (
    <>
     <ListItem href title="Change Device ID" onClick={() => setdeviceId(true)} />
      {/* deviceId Diag mode  */}
      <Dialog
            opened={deviceId}
            onBackdropClick={() => setdeviceId(false)}
                >
            <svelte:fragment slot="title"><BlockTitle>Fadlan Gali Device ID gaada <br />  <br />
             Fadlan ogow hadii aad galisid mid qaldan app ka mashaqeyn doono
            </BlockTitle></svelte:fragment>
          
             <Block>
             
             </Block>
             <svelte:fragment slot="title">
             <List>
              <ListInput
                type="text"
                info="Device ID"
                onChange={(e) => setDevice(e.target.value)}
              />
             </List>
             </svelte:fragment>
            <svelte:fragment slot="buttons" className="grid grid-cols-2 gap-x-4">
            <Button outlineMaterial onClick={() => setdeviceId(false) }>Maya</Button>
            <form onSubmit={Sent}>
              <Button strong onClick={() => setdeviceId(false)}>
             Haa
            </Button>
            </form>
            </svelte:fragment>
        </Dialog>
    </>
  )
}

export default ChangeDevice