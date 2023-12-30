import { Block, Button, Dialog, List, ListInput, BlockTitle   } from 'konsta/react'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useUpdateUserMutation } from '../../../slices/usersApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../../../slices/authSlice';



function SendNow({user , type}) {
  const [lacagdir ] = useUpdateUserMutation()
  const dispatch = useDispatch();
  const [sendNow , setsendNow] = useState(false)
  const [amount , setAmount ] = useState('')
  const [typess , setT] = useState('')
  const [number , setN] = useState('')
  const [sent , setS] = useState('sent')
  const [waqti , setWaqti] = useState('')
  useEffect(() => {
    setT(user.types)
    setN(user.s_number)
  },[user.types , user.s_number ])
  const Sent = async (e) => {
    e.preventDefault();
    const notification = toast.loading('Wax yar sug...', {   
          style:{
            fontSize: '17px',
            padding: '20px',
        }
      })
      try {
        if (amount == '') {
          toast('Fadlan dooro lacagta' , {
             icon: '🥴'
          });
        } else {
          const res = await lacagdir({
            sent : sent ,
            number : number,
            type : typess,
            amount : amount,
            waqti : waqti
          }).unwrap();
          dispatch(setCredentials(res));
          toast.success(res , {
            icon: '💸'
        }); 
        setAmount('')
        setWaqti('')
        }
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
      <Button className='k-color-brand-green uppercase' onClick={() => setsendNow(true)} >u dir</Button>
      {/* sendNow Diag mode  */}
      <Dialog
            opened={sendNow}
            onBackdropClick={() => setsendNow(false)}
                >
            <svelte:fragment slot="title"><BlockTitle>Lacag Dirid</BlockTitle></svelte:fragment>
          
             <Block>
             Dooro Lacagta aad direesid
             </Block>
             <svelte:fragment slot="title">
             <List>
             <ListInput
                label="Lacagta"
                type="select"
                dropdown
                value={amount}
                placeholder="Please choose..."
                onChange={(e) => setAmount(e.target.value)}
              >
                <option value="">Dooro</option>
                 {type.map((e) => (
                  <option value={e.amount}>{e.amount}</option>
                 ))}
              </ListInput>
              <ListInput
                
                type="datetime-local"
                info="waqtiga loo diraayo"
                value={waqti}
                onChange={(e) => setWaqti(e.target.value)}
                />
             </List>
             </svelte:fragment>
            
            <svelte:fragment slot="buttons" className="grid grid-cols-2 gap-x-4">
            <Button outlineMaterial onClick={() => setsendNow(false)}>Maya</Button>
            <form onSubmit={Sent}>
              <Button strong onClick={() => setsendNow(false)}>
             Haa
            </Button>
            </form>
            </svelte:fragment>
        </Dialog>
    </>
  )
}

export default SendNow