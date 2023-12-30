import { Block, Button, Dialog, List, ListInput, BlockTitle   } from 'konsta/react'
import React, {  useState } from 'react'
import toast from 'react-hot-toast';
import { useAddCostumerMutation } from '../../../slices/usersApiSlice';
import { FaPlusSquare } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../../../slices/authSlice';


function AddNewCoustmers() {
  const [add ] = useAddCostumerMutation()
  const [addNew , setaddNew] = useState(false)
  const [name , setName] = useState('')
  const [hor , setHor] = useState('')
  const [som , setSom] = useState('')
  const [type , setType] = useState('')
  const dispatch = useDispatch();
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
        
          const res = await add({
            name , hor , som , type
          }).unwrap();
          dispatch(setCredentials(res));
          toast(res , {
            icon : '🔥'
          });
          setName('')
          setHor('')
          setSom('')
          setType('')
       
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
    <FaPlusSquare  onClick={() => setaddNew(true)} />
      {/* addNew Diag mode  */}
      <Dialog
            opened={addNew}
            onBackdropClick={() => setaddNew(false)}
                >
            <svelte:fragment slot="title"><BlockTitle>Diiwaan gali macaamiil Cusub</BlockTitle></svelte:fragment>
          
             <Block>
             
             </Block>
             <svelte:fragment slot="title">
             <List>
             <ListInput
                type="text"
                info="Magaca shaqsiga"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <ListInput
                type="number"
                info="Hormuud"
                value={hor}
                onChange={(e) => setHor(e.target.value)}
              />
              <ListInput
                type="number"
                info="Somtel"
                value={som}
                onChange={(e) => setSom(e.target.value)}
              />
             <ListInput
                label="Adeega"
                type="select"
                dropdown
              value={type}
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

export default AddNewCoustmers