import { IonHeader, IonPage, IonTitle, IonToolbar
    , IonContent, IonInput, IonItem, IonLabel, IonButton ,
    IonModal, IonSelect, IonSelectOption , useIonLoading, IonButtons, IonBackButton
} from '@ionic/react'
import React, { useState } from 'react'
import { FaArrowLeft, FaPlusSquare } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import ListMacaamiil from './ListMacaamiil'
import toast from 'react-hot-toast';
import { useAddCostumerMutation } from '../../slices/usersApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../../slices/authSlice';
function AddCoustmers() {
    const [add ] = useAddCostumerMutation()
   
 
    const [present, dismiss] = useIonLoading();
    const [name , setName] = useState('')
    const [hor , setHor] = useState('')
    const [som , setSom] = useState('')
    const [type , setType] = useState('')
    const dispatch = useDispatch();
    const submitHandler = async (e) => {
        e.preventDefault();
        await present({ message: 'Wax yar sug...' });
       
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
                  setM('yes')
              }
        } catch (error) {
            console.log(error)
        } finally {
            dismiss();
        }
    }

  return (

    <>
     <IonHeader>
        <IonToolbar color="dark">
        <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>
              Ku dar macaamiil cusub 
              </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding flex flex-col justify-center">
          
            <form onSubmit={submitHandler}>
                <IonItem>
                    <IonLabel position="floating">Magaca Macaamiil ka</IonLabel>
                    <IonInput 
                    type="text"
                    onIonChange={(e) => setName(e.target.value)}
                    />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Somtel</IonLabel>
                    <IonInput 
                    type="number"
                    onIonChange={(e) => setSom(e.target.value)}
                    />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Hormuud</IonLabel>
                    <IonInput 
                    type="number"
                    onIonChange={(e) => setHor(e.target.value)}
                    />
                </IonItem>
                <IonItem>
                <IonSelect aria-label="Dooro Adeega"
                value=''
                onIonChange={(e) => setType(e.target.value)}
                >
                <IonSelectOption value="">Dooro Adeega</IonSelectOption>
                <IonSelectOption value="unlimited">Unlimited</IonSelectOption>
                <IonSelectOption value="data">Data</IonSelectOption>
                <IonSelectOption value="voice">Voice</IonSelectOption>
                </IonSelect>
                </IonItem>
                <IonItem>
                </IonItem>
               
                <IonButton color="success" expand="full"  type="submit" >save</IonButton>
               
            
            </form>
                
            </IonContent>
    </>
  )
}

export default AddCoustmers