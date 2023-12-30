import React from 'react'
import { Block, Button , Navbar, Page } from 'konsta/react';
import { useState , useEffect } from 'react';
import { useNavigate } from 'react-router';
import DateObject from "react-date-object";
import { FaArrowLeft, FaPlusSquare } from 'react-icons/fa';
import SendNow from '../Diagmode/Costumers/SendNow';
import UpdateInfo from '../Diagmode/Costumers/UpdateInfo';
import UpdateStatus from '../Diagmode/Costumers/UpdateStatus';
import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonNavLink, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Udir from './Udir';
import BanCostumers from './Ban';
import UnbanCostumers from './Unban';
import EditCostumers from './Edit';
function DetailsMA({view , type}) {
  let navigate = useNavigate(); 
   const {cid , name , h_number , s_number , types , xaalada } = view
   


  return (
    <>
   
   <IonHeader>
        <IonToolbar color="dark">
        <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>
            {view.name}
           </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
     
      <div className="grid grid-cols-3 gap-x-4">
        <IonButton>Magaca</IonButton>
        <IonButton color="dark" className='col-span-2'>{name}</IonButton> 
     </div> <br />
     <div className="grid grid-cols-3 gap-x-4">
        <IonButton color="light">Somtel</IonButton>
        <IonButton color="dark" className='col-span-2'>{s_number}</IonButton> 
     </div> <br />
     <div className="grid grid-cols-3 gap-x-4">
        <IonButton color="light">Hormuud</IonButton>
        <IonButton color="dark" className='col-span-2'>{h_number}</IonButton> 
     </div> <br />
     <div className="grid grid-cols-3 gap-x-4">
        <IonButton color="tertiary">adeega</IonButton>
        <IonButton color="dark" className='col-span-2'>{types}</IonButton> 
     </div> <br />
     {xaalada == 'active' ? <>
     <div className="grid grid-cols-3 gap-x-4">
        <IonButton color="success">Xaalada</IonButton>
        <IonButton color="dark" className='col-span-2'>{xaalada}</IonButton> 
     </div> <br />
     </> : <>
     <div className="grid grid-cols-3 gap-x-4">
        <IonButton color="danger">xaalada</IonButton>
        <IonButton color="dark" className='col-span-2'>{xaalada}</IonButton> 
     </div> <br />
     </>}
      </IonContent>
    
      <div className="grid grid-cols-3 gap-x-4 ion-padding">
      <IonNavLink routerDirection="forward" component={() => <Udir user={cid} lacagta={type} />}>
      <IonButton color="medium" expand='block'>u dir</IonButton>
      </IonNavLink>
       
        <IonButton color="warning" expand='block' onClick={() => setE('yes')}>edit</IonButton>
        {xaalada == 'banned' ? <>
        <IonButton color="success" expand='block' onClick={() => setUnBan('yes')}>unban</IonButton>
        </> : <>
        <IonNavLink routerDirection="forward" component={() => <BanCostumers id={cid} />}>
          <IonButton color="danger" expand='block'>ban</IonButton>
        </IonNavLink>
        
        </>}
     </div> <br />
    </>
  )
}

export default DetailsMA