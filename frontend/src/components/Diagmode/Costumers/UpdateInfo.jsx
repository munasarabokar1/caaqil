import { Block, Button, Dialog, List, ListInput, BlockTitle   } from 'konsta/react'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useUpdateUserMutation } from '../../../slices/usersApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../../../slices/authSlice';



function UpdateInfo({user }) {
  const [info ] = useUpdateUserMutation()
  const dispatch = useDispatch();
  const [updateInfo , setupdateInfo] = useState(false)
  const [id , setId] = useState('')
  const [name , setName] = useState('')
  const [hor , setHor] = useState('')
  const [som , setSom] = useState('')
  const [type , setType] = useState('')
  useEffect(() => {
    setId(user.cid)
    setName(user.name)
    setHor(user.h_number)
    setSom(user.s_number)
    setType(user.types)
  },[user.name , user.h_number , user.s_number  , user.types])
  const Sent = async (e) => {
    e.preventDefault();
          const notification = toast.loading('Wax yar sug...', {
            
            style:{
              fontSize: '17px',
              padding: '20px',
          }
        })
      try {
        
        if (name == '' || som == '' || hor == '' || type == '') {
          toast('Fadlan meesha banaan soo buuxi' , {
            icon: '🥴'
          });
        } else  {
          const res = await info({
           id , name , hor , som , type
          }).unwrap();
          dispatch(setCredentials(res));
          toast(res , {
            icon : '👌🏼'
          });
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
      <Button className='k-color-brand-warning uppercase' onClick={() => setupdateInfo(true)} >Edit</Button>
      {/* updateInfo Diag mode  */}
      <Dialog
            opened={updateInfo}
            onBackdropClick={() => setupdateInfo(false)}
                >
            <svelte:fragment slot="title"><BlockTitle>Wax ka badal macluumaad ka</BlockTitle></svelte:fragment>
          
             <Block>
             
             </Block>
             <svelte:fragment slot="title">
             <List>
             <ListInput
                value={name}
                type="text"
                info="Magaca shaqsiga"
                onChange={(e) => setName(e.target.value)}
              />
              <ListInput
                value={hor}
                type="number"
                info="Hormuud"
                onChange={(e) => setHor(e.target.value)}
              />
              <ListInput
                value={som}
                type="number"
                info="Somtel"
                onChange={(e) => setSom(e.target.value)}
              />
             <ListInput
                label="Adeega"
                type="select"
                dropdown
                defaultValue={user.types}
                placeholder="Please choose..."
                onChange={(e) => setType(e.target.value)}
              >
                <option value="">Dooro</option>
                <option value="unlimited">Unlimited</option>
                <option value="data">Data</option>
                <option value="voice">Voice</option>
                
              </ListInput>
             </List>
             </svelte:fragment>
            
            <svelte:fragment slot="buttons" className="grid grid-cols-2 gap-x-4">
            <Button outlineMaterial onClick={() => setupdateInfo(false)}>Maya</Button>
            <form onSubmit={Sent}>
              <Button strong onClick={() => setupdateInfo(false)}>
             Haa
            </Button>
            </form>
            </svelte:fragment>
        </Dialog>
    </>
  )
}

export default UpdateInfo