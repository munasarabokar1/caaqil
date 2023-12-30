import { Block, Button, Dialog, List, ListInput, BlockTitle, ListItem   } from 'konsta/react'
import React, {  useState } from 'react'
import { toast } from 'react-toastify';
import { useUpdateUserInfoMutation } from '../../../slices/usersApiSlice';


function ChangePin() {
  const [updateUser ] = useUpdateUserInfoMutation()
  const [resselerPinNumber , setresselerPinNumber] = useState(false)
  const [pin , setPin] = useState("")
  const Sent = async (e) => {
    e.preventDefault();
      try {
        
        if (pin == '') {
          toast.error('Fadlan meesha banaan soo buuxi' , {
            position: toast.POSITION.TOP_CENTER
        });
        } else  {
        
          const res = await updateUser({
            pin
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
     <ListItem href title="Change Reseller Pin" onClick={() => setresselerPinNumber(true)} />
      {/* resselerPinNumber Diag mode  */}
      <Dialog
            opened={resselerPinNumber}
            onBackdropClick={() => setresselerPinNumber(false)}
                >
            <svelte:fragment slot="title"><BlockTitle>Fadlan Gali pinkaaga reseller ka</BlockTitle></svelte:fragment>
          
             <Block>
             
             </Block>
             <svelte:fragment slot="title">
             <List>
              <ListInput
                type="number"
                info="Reseller Pin"
                onChange={(e) => setPin(e.target.value)}
              />
             </List>
             </svelte:fragment>
            <svelte:fragment slot="buttons" className="grid grid-cols-2 gap-x-4">
            <Button outlineMaterial onClick={() => setresselerPinNumber(false) }>Maya</Button>
            <form onSubmit={Sent}>
              <Button strong onClick={() => setresselerPinNumber(false)}>
             Haa
            </Button>
            </form>
            </svelte:fragment>
        </Dialog>
    </>
  )
}

export default ChangePin