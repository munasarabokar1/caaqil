import React, { useState } from 'react'
import DateObject from "react-date-object";
import Trans from '../Trans/Trans'
import { useNavigate } from 'react-router-dom'

import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react'
function Analysis({
  users , 
  lastSeen , 
  tran ,
  mobile ,
  other ,
  costumers,
  unsuccess,
  pending,
  seles
}) {
  const navigate = useNavigate()
    const [balance , setBalance] = useState(false)
  
   
  return (
   <>
  
   <IonCard color="dark">
      <IonCardHeader>
        <IonCardTitle>Welcome</IonCardTitle>
        <IonCardSubtitle>{users.full_name}</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        <div className='grid grid-cols-2 gap-x-7'>
          <div>
            Expire at : {new DateObject(users.expiretime).format("DD MMMM YYYY")}
          </div>
        
        Login at : {new DateObject(users.lastLogin).format("MMM-DD-hh:mm")}
        </div>
       
       </IonCardContent>
    </IonCard>
    <div className="grid grid-cols-2 gap-x-4">
        <IonButton>haraagaada</IonButton>
        {users.status == 'online' ? 
      <IonButton color="success">{users.status}</IonButton> 
      : <IonButton color="danger">{users.status}</IonButton>  
      }
    </div> <br />
    <div className="grid grid-cols-2 gap-x-4">
        <IonButton color="medium">sales</IonButton>
        <IonButton color="tertiary">costumers</IonButton>
    </div>  <br />
    <div className="grid grid-cols-2 gap-x-4">
        <IonButton color="danger">unsuccess</IonButton>
        <IonButton color="warning">proccess</IonButton>
    </div>  <br />
    <div className="grid grid-cols-2 gap-x-4">
        <IonButton color="dark">other</IonButton>
        <IonButton color="light">mobile</IonButton>
    </div>
     <Trans trans={tran} />
   </>
  )

}

export default Analysis