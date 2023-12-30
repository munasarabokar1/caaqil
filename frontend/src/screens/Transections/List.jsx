import { Block, List, ListInput, Navbar, Page } from 'konsta/react';
import React, {useDeferredValue , useState } from 'react'
import { FaArrowLeft , FaUserCog } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr'
import Trans from '../../components/Trans/Trans';
import TransectionSkleton from '../../components/Skeleton/TransectionSkleton';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
 
const fetcher = (...args) => fetch(...args).then(res => res.json())
function ListTrans() {

      let navigate = useNavigate();
      const [raadi , setRaadi] = useState('')
    //  const saxRaadi = useDeferredValue(raadi)
      function handleClick() {
        navigate(-1)
      }   
      const { data, error, isLoading } = useSWR("/api/users/tran/?q="+raadi , fetcher ,  { refreshInterval: 1000 })
   
    if(error) return <NoInternet />
    console.log(raadi);
  return (
    <IonPage>
       <IonHeader >
        <IonToolbar color="dark">
          <IonButtons slot="start">
            <IonBackButton contentId="main-content"></IonBackButton>
          </IonButtons>
          <IonTitle><div className="flex justify-between ">
            <FaArrowLeft size="28px" onClick={() => navigate(-1)} />
            Dhaqdhaqaaqa <FaUserCog size="0" /></div></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true} className="ion-padding">
        <br />
          <IonInput 
          label="Raadi Number ka" 
          type='number' labelPlacement="floating" 
          fill="solid" 
          placeholder="Raadi dhaqdhaqaaqa numberka"
          value={raadi}
          onIonChange={(e)=> setRaadi(e.target.value)}
          ></IonInput> <br />
        
         {isLoading ? <TransectionSkleton />
         : 
          <>
          <Trans trans={data} />
          </>
        }
      </IonContent>
    </IonPage>
  )
}

export default ListTrans