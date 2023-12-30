import { Block, BlockTitle, Button, Dialog, List, ListInput } from 'konsta/react'
import React, { useEffect, useState } from 'react'
import { useTransControllerMutation } from '../../../slices/usersApiSlice'
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../../../slices/authSlice';
import toast from 'react-hot-toast';

function IsSents({view}) {
  const [updateTrans, { isLoading }] = useTransControllerMutation();
     // isSend diag mode
     const [isSent , setIsSent] = useState(false)
     const [id , setId] = useState('')
     const [sent , seSent] = useState('sent')
     const dispatch = useDispatch();
     useEffect(() => {
      setId(view.id)
    },[view.id])

    const Succe = async (e) => {
      e.preventDefault();
      const notification = toast.loading('Wax yar sug...', {   
        style:{
          fontSize: '17px',
          padding: '20px',
      }
    })
      try {
        const res = await updateTrans({
          id,
          sent 
        }).unwrap();
       
        dispatch(setCredentials(res));
        toast.success(res , {
          icon: '💸'
      });
      } catch (err) {
        toast(err?.data , {
          icon : '🚫'
        });
      } finally {
        toast.dismiss(notification)
      }
    }
  return (
    <>
      <Button className='k-color-brand-blue uppercase' onClick={() => setIsSent(true)}>is sent</Button>

      {/* is Sent Diagmode */}
      <Dialog
            opened={isSent}
            onBackdropClick={() => setIsSent(false)}
                >
            <svelte:fragment slot="title">
                <Block>
                Xaqiijin
                </Block>
            </svelte:fragment>
          
             <svelte:fragment slot="title">
              <Block>
              Mahubtaa in ay u dhacday lacagta ? 
              </Block>
             </svelte:fragment>
            
            <svelte:fragment slot="buttons" className="grid grid-cols-2 gap-x-4">
            <Button outlineMaterial onClick={() => setIsSent(false)}>Maya</Button>
            <form onSubmit={Succe}>
              <Button strong onClick={() => setIsSent(false)}>
             Haa
            </Button>
            </form>
            </svelte:fragment>
        </Dialog>
    </>
  )
}

export default IsSents