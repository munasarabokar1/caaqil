import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { List, ListItem, Navbar, Page } from 'konsta/react';
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router';
function HomeAdeega() {
    let navigate = useNavigate()
    
  return (
    <IonPage>
      <IonHeader>
      <IonToolbar color="dark">
        <IonTitle>
          <div className="flex justify-between ">
            <FaArrowLeft size="28px" onClick={() => navigate(-1)} />
            Adeegayada Somtel 
            <FaArrowLeft size="0" />
          </div></IonTitle>
      </IonToolbar>
    </IonHeader>
      <IonContent>
      <IonList inset={true}>
      <IonItem onClick={() => navigate('/adeega/dhammeys')}>
        <IonLabel>Adeega Dhammeys</IonLabel>
      </IonItem>
      <IonItem onClick={() => navigate('/adeega/abaal')}>
        <IonLabel>Adeega Abaal</IonLabel>
      </IonItem>
      <IonItem onClick={() => navigate('/adeega/voice')}>
        <IonLabel>Adeega Voice</IonLabel>
      </IonItem>
    </IonList>
      </IonContent>
    </IonPage>
  )
}

export default HomeAdeega