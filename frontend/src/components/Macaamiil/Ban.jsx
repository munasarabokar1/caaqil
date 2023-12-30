import React, { useState } from 'react'
import { IonHeader, IonPage, IonTitle, IonToolbar
  , IonContent, IonInput, IonItem, IonLabel, IonButton ,
  IonModal, IonSelect, IonSelectOption , useIonLoading, IonBackButton, IonButtons, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent
} from '@ionic/react'
import { FaArrowLeft, FaPlusSquare } from 'react-icons/fa'
import ViewMacaamiil from '../../screens/Macaamiil/ViewMacaamiil'
function BanCostumers({id}) {
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
               Xayir Ciwaanka 
            </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <div className="flex flex-col min-h-screen justify-center items-space-between">
        <IonCard>
        <IonCard>
      <IonCardHeader>
        <IonCardTitle>Ma hubtaa ?</IonCardTitle>
        <IonCardSubtitle>Inaad xayireesid !</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        <div className="grid grid-cols-2 gap-x-2">
          <IonButton expand='block' color="success">Haa</IonButton>
          <IonButton expand='block' color="danger">Maya</IonButton>
        </div>
      </IonCardContent>
    </IonCard>
        </IonCard>
      </div>
      </IonContent>
    </>
  )
}

export default BanCostumers