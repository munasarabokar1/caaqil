import React, { useState } from 'react'
import { IonHeader, IonPage, IonTitle, IonToolbar
  , IonContent, IonInput, IonItem, IonLabel, IonButton ,
  IonModal, IonSelect, IonSelectOption , useIonLoading, IonBackButton, IonButtons
} from '@ionic/react'
import { FaArrowLeft, FaPlusSquare } from 'react-icons/fa'
import ViewMacaamiil from '../../screens/Macaamiil/ViewMacaamiil'
function Udir({id , lacagta}) {
  const [back , setM ] = useState('')
  if(back) return <ViewMacaamiil />
  return (
    <>
     <IonHeader>
        <IonToolbar color="dark">
        <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>
               Lacag dirid 
            </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding flex flex-col justify-center">
          
            <form>
               
              
                <IonItem>
                <IonSelect aria-label="Dooro Lacagta"
                value=''
                onIonChange={(e) => setType(e.target.value)}
                >
                <IonSelectOption value="">Dooro Lacagta</IonSelectOption>
                {lacagta.map((e) => (
                  <IonSelectOption value={e.amount}>$ {e.amount}</IonSelectOption>
                ))}
                </IonSelect>
                </IonItem>
                <IonItem>
                    <IonLabel>Date</IonLabel>
                    <IonInput 
                    type="datetime-local"
                    onIonChange={(e) => setHor(e.target.value)}
                    />
                </IonItem>
              <br />
                <IonButton color="success" expand="full"  type="submit" >send</IonButton>
                 
            
            </form>
                
            </IonContent>
    </>
  )
}

export default Udir