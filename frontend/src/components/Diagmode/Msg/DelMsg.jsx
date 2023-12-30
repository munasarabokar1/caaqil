import { Block, Button, Dialog, List, ListInput, BlockTitle   } from 'konsta/react'
import React, {  useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { useSendAndRegMutation } from '../../../slices/usersApiSlice';
import { useNavigate } from 'react-router';



function DelMsg({view}) {
    let navigate = useNavigate();
    function one(){
        return new Promise(resolve => {
          setTimeout(() => {
            toast.success('Success ...' , {
                position: toast.POSITION.TOP_CENTER
            });
            resolve();
           }, 200);
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
      
    
  const [regAndSend ] = useSendAndRegMutation()
  const [delMsgs , setdelMsgs] = useState(false)
  const [del , setD] = useState('sent')

  const Sent = async (e) => {
    e.preventDefault();
      try {
          const res = await regAndSend({
            id: view.id , del 
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
     <Button className='k-color-brand-red uppercase' onClick={() => setdelMsgs(true)} >Delete</Button>
      {/* delMsgs Diag mode  */}
    <Dialog
        opened={delMsgs}
        onBackdropClick={() => setdelMsgs(false)}
        >
        <svelte:fragment slot="title"><BlockTitle>Mahubtaa inaad <br /> Tirtireesid Fariintaan</BlockTitle></svelte:fragment>
            <Block>
            </Block>
        <svelte:fragment slot="buttons" className="grid grid-cols-2 gap-x-4">
        <Button outlineMaterial onClick={() => setdelMsgs(false)}>Maya</Button>
        <form onSubmit={Sent}>
            <Button strong onClick={() => setdelMsgs(false)}>
            Haa
        </Button>
        </form>
        </svelte:fragment>
    </Dialog>
    </>
  )
}
export default DelMsg