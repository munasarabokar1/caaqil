import { Button  } from 'konsta/react'
import React, { useEffect, useState } from 'react'
import { useTransControllerMutation } from '../../../slices/usersApiSlice'
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../../slices/authSlice';
import toast from 'react-hot-toast';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function ReSends({view}) {
  const [updateTrans] = useTransControllerMutation();
      // resend diag mode
      const [open, setOpen] = React.useState(false);
      const [id , setId] = useState('')
      const [resent , seResent] = useState('resent')
      const [waqti , setWaqti] = useState('')
      const dispatch = useDispatch();
      useEffect(() => {
        setId(view.id)
      },[view.id])

      const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
      const Sent = async (e) => {
        e.preventDefault();
        setOpen(false);
        const notification = toast.loading('Wax yar sug...', {   
              style:{
                fontSize: '17px',
                padding: '20px',
            }
          })
        try {
          const res = await updateTrans({
            id,
            resent ,
            waqti
          }).unwrap();
          dispatch(setCredentials(res));
          toast.success(res , {
            icon: '💸'
        }); 
      
        setWaqti('')
        } catch (err) {
          toast(err?.data , {
            icon : '🚫'
          });
        }  finally {
          toast.dismiss(notification)
        }
      }
    
  return (
    <>
    
     <Button className='k-color-brand-green uppercase' onClick={handleClickOpen} >re send</Button>
      {/* resend Diag mode  */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle><center>Lacag dirid</center></DialogTitle>
        <DialogContent>
          <DialogContentText>
           <center>
           Ma hubtaa inaad u direesid macaamiil ka oo aysan gaarin lacagta wali
           </center> <br />
          </DialogContentText>
          <DialogContentText>
           <center>
            Dooro waqtiga hadii waqti gaar ah loo diraayo
           </center>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            
            type="datetime-local"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button outline onClick={handleClose}>Maya</Button>
          <Button onClick={Sent}>Haa</Button>
        </DialogActions>
      </Dialog>
    </>
   
  )
}

export default ReSends