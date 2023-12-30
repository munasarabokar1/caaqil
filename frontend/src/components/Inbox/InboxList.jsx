import React, { useState } from 'react'
import { Button, List, ListItem } from 'konsta/react'
import DetialsTransection from '../../screens/Transections/Details'
import { NavLink } from 'react-router-dom'
import DateObject from "react-date-object";
import NotFound from '../NotFound';
import { IonButton, IonCard, IonCardContent,
  IonCol, IonGrid, IonRow } from '@ionic/react';
function InboxList({inbox}) {
 
  
    if(inbox?.length > 0) {
          return (
    <>
    {inbox.map((e) => (
      <>
       <NavLink to={'/inbox/details/'+e.id}>
       <IonCard color="light">
        <IonGrid>
          <IonRow>
            <IonCol >From : {e.sender}</IonCol>
            <IonCol size="auto">{new DateObject(e.created_at).format("DD MMMM hh:mm a")}</IonCol>
          </IonRow> 
          <IonRow>
            {e.body.substring(0,50)}.....
          </IonRow>
        </IonGrid>
   </IonCard>
      </NavLink>
      </>
     
      
    ))}
    </>
  ) 
    } else {
        return <NotFound msg={'No more Data'} />
    }

}

export default InboxList