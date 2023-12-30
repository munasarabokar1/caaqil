import { Block, Button, Dialog, List, ListInput, BlockTitle   } from 'konsta/react'
import React, {  useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { useSendAndRegMutation } from '../../../slices/usersApiSlice';
import { useNavigate } from 'react-router';

function RegisterAndSend({view , number , amount}) {
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
  const [regAndSendNow , setregAndSendNow] = useState(false)
  const [sent , setS] = useState('sent')
  const [name , setName] = useState('')
  const [hor , setHor] = useState('')
  const [som , setSom] = useState('')
  const [type , setType] = useState('')
  const [waqti , setWaqti] = useState('')
  useEffect(() => {
    setHor(number)
  },[number])
  const Sent = async (e) => {
    e.preventDefault();
      try {
       if (name == '' || som == '' || hor == '' || type == '') {
          toast.error('Fadlan meesha banaan soo buuxi' , {
            position: toast.POSITION.TOP_CENTER
        });
       } else  {
          const res = await regAndSend({
            name , som , hor , type , amount , id: view.id , sent , waqti
          }).unwrap();
           one().then(two);
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
     <Button className='k-color-brand-blue uppercase' onClick={() => setregAndSendNow(true)} >Register And Send</Button>
      {/* regAndSendNow Diag mode  */}
      <Dialog
            opened={regAndSendNow}
            onBackdropClick={() => setregAndSendNow(false)}
                >
            <svelte:fragment slot="title"><BlockTitle>Diiwaan gali macaamiil Cusub <br /> Kadib na u dir lacagta</BlockTitle></svelte:fragment>
          
             <Block>
             
             </Block>
             <svelte:fragment slot="title">
             <List>
             <ListInput
                type="text"
                info="Magaca shaqsiga"
                onChange={(e) => setName(e.target.value)}
              />
              <ListInput
                type="hidden"
                info={number}
                value={number}
                onChange={(e) => setHor(e.target.value)}
              />
              <ListInput
                type="number"
                info="Somtel"
                onChange={(e) => setSom(e.target.value)}
              />
             <ListInput
                label="Adeega"
                type="select"
                dropdown
                outline
                placeholder="Please choose..."
                onChange={(e) => setType(e.target.value)}
              >
                <option value="">Dooro</option>
                <option value="unlimited">Unlimited</option>
                <option value="data">Data</option>
                <option value="voice">Voice</option>
                
              </ListInput>
              <List>
                <ListInput
                outlineMaterial
                type="datetime-local"
                info="waqtiga loo diraayo"
                onChange={(e) => setWaqti(e.target.value)}
                />
             </List>
             </List>
             </svelte:fragment>
            
            <svelte:fragment slot="buttons" className="grid grid-cols-2 gap-x-4">
            <Button outlineMaterial onClick={() => setregAndSendNow(false)}>Maya</Button>
            <form onSubmit={Sent}>
              <Button strong onClick={() => setregAndSendNow(false)}>
             Haa
            </Button>
            </form>
            </svelte:fragment>
        </Dialog>
    </>
  )
}

export default RegisterAndSend