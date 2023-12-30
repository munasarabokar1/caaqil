import { Block, BlockTitle, Button, Dialog, List, ListInput } from 'konsta/react'
import React, { useEffect, useState } from 'react'
import { useTransControllerMutation } from '../../../slices/usersApiSlice'
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../../../slices/authSlice';
import toast from 'react-hot-toast';

function IsCanle({view}) {
  const [updateTrans, { isLoading }] = useTransControllerMutation();
    // cancle diag mode
    const [isCancle , setisCancle] = useState(false)
    const [id , setId] = useState('')
    const [cancle , seCancle]= useState('cancle')
    const dispatch = useDispatch();
    useEffect(() => {
      setId(view.id)
    },[view.id])

    const Cann = async (e) => {
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
          cancle 
        }).unwrap();
       
        dispatch(setCredentials(res));
        toast.success(res , {
          icon: '❌'
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
      <Button className='k-color-brand-red uppercase' onClick={() => setisCancle(true)}>cancle</Button>

      {/* is Sent Diagmode */}
      <Dialog
            opened={isCancle}
            onBackdropClick={() => setisCancle(false)}
                >
            <svelte:fragment slot="title">
                <BlockTitle>
                Xaqiijin
                </BlockTitle>
            </svelte:fragment>
          
             <svelte:fragment slot="title">
              <Block>
              Mahubtaa inaad ka laabaneesid adeegaan  ? 
              </Block>
             </svelte:fragment>
            
            <svelte:fragment slot="buttons" className="grid grid-cols-2 gap-x-4">
            <Button outlineMaterial onClick={() => setisCancle(false)}>Maya</Button>
            <form onSubmit={Cann}>
            <Button strong onClick={() => setisCancle(false)}>
             Haa
            </Button>
            </form>
            </svelte:fragment>
        </Dialog>
    </>
  )
}

export default IsCanle