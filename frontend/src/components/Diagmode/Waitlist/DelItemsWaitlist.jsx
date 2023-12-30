import { Block, Button, Dialog, List, ListInput, BlockTitle   } from 'konsta/react'
import React, {  useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { useWaitingListMutation } from '../../../slices/usersApiSlice';
import { useNavigate } from 'react-router';



function DelItemsWaitlist({view }) {
    let navigate = useNavigate();      
    function one(){
        return new Promise(resolve => {
          setTimeout(() => {
            toast.success('Success ...' , {
                position: toast.POSITION.TOP_CENTER
            });
            resolve();
           }, 1000);
        });
      }
      function two(){
        return new Promise(resolve => {
          setTimeout(() => {
            navigate(-1)
            resolve();
           }, 1000);
        });
      }
  const [waitlist ] = useWaitingListMutation()
  const [wait , setwait] = useState(false)
  const [id , setId] = useState('')
  useEffect(() => {
    setId(view.id)
  },[view.id])
  const Sent = async (e) => {
    e.preventDefault();
      try {
     
          const res = await waitlist({
            id
          }).unwrap();
            one().then(two);
           
           dispatch(setCredentials(res));
       } catch (err) {
        toast.error(err?.data , {
          position: toast.POSITION.TOP_CENTER
      });
      }
  }
  return (
    <>
     <Button className="k-color-brand-red" onClick={() => setwait(true)}>
      Delete </Button>
    
      {/* wait Diag mode  */}
    <Dialog
        opened={wait}
        onBackdropClick={() => setwait(false)}
        >
        <svelte:fragment slot="title">
      
        <BlockTitle>
        Mahubtaa inaad Tirtireesid Dalabkaan
        </BlockTitle> 
    
          <br /><br />
            </svelte:fragment>
            <Block>
            </Block>
        <svelte:fragment slot="buttons" className="grid grid-cols-2 gap-x-4">
        <Button outlineMaterial onClick={() => setwait(false)}>Maya</Button>
        <form onSubmit={Sent}>
            <Button strong onClick={() => setwait(false)}>
            Haa
        </Button>
        </form>
        </svelte:fragment>
    </Dialog>
    </>
  )
}
export default DelItemsWaitlist