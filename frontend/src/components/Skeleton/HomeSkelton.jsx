import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { Block, Card, Navbar, Page } from 'konsta/react';
import { NavLink } from "react-router-dom";
import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, 
  IonItem, 
  IonLabel, 
  IonList, 
  IonMenu, IonMenuButton, IonPage, 
  IonSkeletonText, 
  IonTitle, IonToolbar } from '@ionic/react';
function HomeSkelton() {
  return (
   <>
   <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar color="dark">
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
            <IonSkeletonText animated={true} style={{ width: '100%' , height:'47px' }}></IonSkeletonText>
        </IonHeader>
        <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader>
              <IonCardTitle>
                <IonSkeletonText animated={true} style={{ width: '35%' , height:'25px' }}>
                </IonSkeletonText>
              </IonCardTitle>
              <IonCardSubtitle>
                <IonSkeletonText animated={true} style={{ width: '60%' , height:'20px' }}>
                </IonSkeletonText>
              </IonCardSubtitle>
            </IonCardHeader>
          <IonCardContent>
            <IonSkeletonText animated={true}></IonSkeletonText>
          </IonCardContent>
        </IonCard>
        </IonContent>
      </IonPage>
   </>
  )
}

export default HomeSkelton