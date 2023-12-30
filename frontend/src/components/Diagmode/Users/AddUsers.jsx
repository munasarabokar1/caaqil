import { Block, Button, Dialog, List, ListInput, BlockTitle   } from 'konsta/react'
import React, {  useState } from 'react'
import toast from 'react-hot-toast';
import { useAddUsersMutation } from '../../../slices/usersApiSlice';
import { FaPlusSquare } from 'react-icons/fa';


function AddUsers() {
  const [add ] = useAddUsersMutation()
  const [addNew , setaddNew] = useState(false)
  const [fullname , setF] = useState('')
  const [username , setU] = useState('')
  const [password , setP] = useState('')
  const [mobile , setM] = useState('')
  const [deegaan , setD] = useState('')
  const [exp , setE] = useState('')

  const Sent = async (e) => {
    e.preventDefault();
    const notification = toast.loading('Wax yar sug...', {
    
      style:{
        fontSize: '17px',
        padding: '20px',
    }
  })
      try {
        
        if (fullname == '' || username == '' || password == '' || deegaan == '' ||  mobile =='' || exp == '') {
        
          toast('Fadlan meesha banaan soo buuxi' , {
            icon: '🥴'
          });
        } else  {
        
          const res = await add({
            fullname , username , password , deegaan , mobile , exp
          }).unwrap();
         
          toast('User has been created ..' , {
            icon : '🔥'
          });
          setF('')
          setU('')
          setP('')
          setM('')
          setD('')
          setE('')
       
        }
       } catch (err) {
        
        toast(err?.data?.message || err.error, {
          icon : '🚫'
        });
      } finally {
        toast.dismiss(notification)
      }
   
  }
  return (
    <>
    <FaPlusSquare  onClick={() => setaddNew(true)} />
      {/* addNew Diag mode  */}
      <Dialog
            opened={addNew}
            onBackdropClick={() => setaddNew(false)}
                >
            <svelte:fragment slot="title"><BlockTitle>Add new User</BlockTitle></svelte:fragment>
          
             <Block>
             
             </Block>
             <svelte:fragment slot="title">
             <List>
             <ListInput
                type="text"
                info="full name"
                value={fullname}
                onChange={(e) => setF(e.target.value)}
              />
                 <ListInput
                type="text"
                info="username"
                value={username}
                onChange={(e) => setU(e.target.value)}
              />
              <ListInput
                type="password"
                info="Password"
                value={password}
                onChange={(e) => setP(e.target.value)}
              />
              <ListInput
                type="text"
                info="deegaanka"
                value={deegaan}
                onChange={(e) => setD(e.target.value)}
              />
              <ListInput
                type="number"
                info="mobile number"
                value={mobile}
                onChange={(e) => setM(e.target.value)}
              />
              <ListInput
                type="number"
                info="Tirada maalmaha"
                value={exp}
                onChange={(e) => setE(e.target.value)}
              />
             </List>
             </svelte:fragment>
            
            <svelte:fragment slot="buttons" className="grid grid-cols-2 gap-x-4">
            <Button outlineMaterial onClick={() => setaddNew(false)}>Maya</Button>
            <form onSubmit={Sent}>
              <Button strong onClick={() => setaddNew(false)}>
             Haa
            </Button>
            </form>
            </svelte:fragment>
        </Dialog>
    </>
  )
}

export default AddUsers