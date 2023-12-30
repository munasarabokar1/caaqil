import { Block, Button, Dialog, List, ListInput, BlockTitle   } from 'konsta/react'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useUpdateUserMutation } from '../../../slices/usersApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../../../slices/authSlice';



function UpdateStatus({user , magac , xaalada }) {
  const [status ] = useUpdateUserMutation()
  const [updateStatus , setupdateStatus] = useState(false)
  const [id , setId] = useState('')
  const dispatch = useDispatch();
  useEffect(() => {
    setId(user.cid)
  
  },[user.cid])
  const Sent = async (e) => {
    e.preventDefault();
    const notification = toast.loading('Wax yar sug...', {   
          style:{
            fontSize: '17px',
            padding: '20px',
        }
      })
      try {
          const res = await status({
           id , xaalada
          }).unwrap();
          dispatch(setCredentials(res));
          toast.success(res , {
            icon: '📝'
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
      {xaalada == 'active' ? 
      <Button className='k-color-brand-neturals uppercase' onClick={() => setupdateStatus(true)} >UNBAN</Button>
      : 
      <Button className='k-color-brand-red uppercase' onClick={() => setupdateStatus(true)} >BAN</Button>
      }
      {/* updateStatus Diag mode  */}
      <Dialog
            opened={updateStatus}
            onBackdropClick={() => setupdateStatus(false)}
                >
            <svelte:fragment slot="title"><BlockTitle>Qeybta {magac} ka</BlockTitle></svelte:fragment>
          
             <Block>
            Ma hubtaa inaad {magac} ka dhigeesid
             </Block>
             <svelte:fragment slot="title">
            
             </svelte:fragment>
            
            <svelte:fragment slot="buttons" className="grid grid-cols-2 gap-x-4">
            <Button outlineMaterial onClick={() => setupdateStatus(false)}>Maya</Button>
            <form onSubmit={Sent}>
              <Button strong onClick={() => setupdateStatus(false)}>
             Haa
            </Button>
            </form>
            </svelte:fragment>
        </Dialog>
    </>
  )
}

export default UpdateStatus