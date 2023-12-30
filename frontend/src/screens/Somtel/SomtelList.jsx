import { Block, List, ListInput, Navbar, Page , Button ,ListItem } from 'konsta/react';
import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaPlusSquare } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr'
import NotFound from '../../components/NotFound';
import { NavLink } from 'react-router-dom'
import LoadingTime from '../../components/Loading';
import NoInternet from '../../components/NoInternet';
import AddNewCoustmers from '../../components/Diagmode/Costumers/AddNewCoustmers';
import InboxList from '../../components/Inbox/InboxList';
import InboxSkleton from '../../components/Skeleton/InboxSkleton';
import { IonContent, IonHeader, 
  IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const fetcher = (...args) => fetch(...args).then(res => res.json())
function SomtelList() {
 
    let navigate = useNavigate();
    const [raadi , setRaadi] = useState('')
    function handleClick() {
      navigate(-1)
    }   
    const { data, error, isLoading } = useSWR("/api/users/somtel/?q="+raadi , fetcher ,  { refreshInterval: 1000 })
 

  if(error) return <NoInternet />
  return (
    <IonPage>
         <IonHeader>
        <IonToolbar color="dark">
          <IonTitle>
           <div className="flex justify-between ">
              <FaArrowLeft size="28px" onClick={() => navigate(-1)} />
              Somtel Inbox 
              <FaArrowLeft size="0" />
           </div></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent  fullscreen={true} className="ion-padding">
      <br />
          <IonInput 
            label="Raadi Numberka somtelka" 
            type='number' labelPlacement="floating" 
            fill="solid" 
            placeholder="Raadi Numberka somtelka"
            value={raadi}
            onIonChange={(e)=> setRaadi(e.target.value)}
          ></IonInput> <br /> 
            {isLoading ? <InboxSkleton />
         : 
          <Block>
           <InboxList inbox={data} />
          </Block>
        }
          </IonContent>
      
    
    
    </IonPage>
  )
}

export default SomtelList