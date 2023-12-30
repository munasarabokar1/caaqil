import React, { useState } from 'react'
import { Button, List, ListItem } from 'konsta/react'
import DetialsTransection from '../../screens/Transections/Details'
import { NavLink } from 'react-router-dom'
import DateObject from "react-date-object";
import NotFound from '../NotFound';
import { IonButton, IonCard, IonCardContent,
   IonCol, IonGrid, IonRow } from '@ionic/react';
function Trans({trans}) {
 
    if(trans?.length > 0) {
          return (
    <>
    {trans.map((e) => (
    <NavLink to={'/transections/details/'+e.id}>
        <IonCard color="light">
        <IonGrid>
          <IonRow>
            <IonCol >{e.magaca}</IonCol>
            
            <IonCol size="auto">{new DateObject(e.created_at).format("DD MMMM hh:mm a")}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol> {e.s_number}</IonCol>
            <IonCol></IonCol>
            <IonCol size="auto"> {e.h_number}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton color="tertiary" expand='block' fill='outline' shape='round'>${e.amount}
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton color="dark" fill='outline' expand='block' shape='round'>{e.types}</IonButton>
            </IonCol>
            <IonCol>
              {e.xaalada == 'pending' ? 
                <IonButton expand='block'  color="warning" shape='round'>{e.xaalada}</IonButton>
                : 
               <>
               {e.xaalada == 'success' ? 
               <IonButton expand='block'  color="success" shape='round'>{e.xaalada}</IonButton> 
               : 
               <IonButton expand='block'  color='danger' shape='round'>{e.xaalada}</IonButton>
              }
               </>
              }
            </IonCol>
          </IonRow>
        </IonGrid>
   </IonCard>
    </NavLink>
 
    ))}
    </>
  ) 
    } else {
        return <NotFound msg={'Not found'} />
    }

}

export default Trans