import { Block, Button, Dialog, List, ListInput, BlockTitle   } from 'konsta/react'
import React, {  useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { useAdeegyadaMutation } from '../../../slices/usersApiSlice';
import { useNavigate } from 'react-router';



function ActiveDeactive({view , type , status}) {
    let navigate = useNavigate();      
    
  const [adeega ] = useAdeegyadaMutation()
  const [adeegyada , setadeegyada] = useState(false)

  const Sent = async (e) => {
    e.preventDefault();
      try {
          const res = await adeega({
            id: view.id ,
            type:status
          }).unwrap();
          toast.success('Success',{
            position: toast.POSITION.TOP_CENTER
        });
          dispatch(setCredentials(res));
       } catch (err) {
        toast.error(err?.data , {
          position: toast.POSITION.TOP_CENTER
      });
      }
  }
  return (
    <>
     {type == 'active' ? 
        <Button className="k-color-brand-red" onClick={() => setadeegyada(true)}>De active Now</Button>   
        :
        <Button className="k-color-brand-green" onClick={() => setadeegyada(true)}>Active Now</Button>  
    }
      {/* adeegyada Diag mode  */}
    <Dialog
        opened={adeegyada}
        onBackdropClick={() => setadeegyada(false)}
        >
        <svelte:fragment slot="title">
        {type == 'active' ? 
         <BlockTitle>
         Mahubtaa inaad xayireesid Lacagtaan
         </BlockTitle>  
        :
        <BlockTitle>
        Mahubtaa inaad Xayiraada ka qaadeesid Lacagtaan
        </BlockTitle> 
    }
          <br /><br />
            </svelte:fragment>
            <Block>
            </Block>
        <svelte:fragment slot="buttons" className="grid grid-cols-2 gap-x-4">
        <Button outlineMaterial onClick={() => setadeegyada(false)}>Maya</Button>
        <form onSubmit={Sent}>
            <Button strong onClick={() => setadeegyada(false)}>
            Haa
        </Button>
        </form>
        </svelte:fragment>
    </Dialog>
    </>
  )
}
export default ActiveDeactive