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
import UserSkleton from '../../components/Skeleton/UserSkleton';
import { IonButton, IonButtons, IonCard, 
  IonCol, IonContent, IonGrid, IonModal ,
  IonHeader, IonInput, IonPage, IonLabel ,
   IonRow, IonTitle, IonToolbar, IonBackButton, IonNavLink
   } from '@ionic/react';
import Add from '../../components/Diagmode/Costumers/Add';
import AddCoustmers from './AddCoustmers';
import ViewMacaamiil from './ViewMacaamiil';

const fetcher = (...args) => fetch(...args).then(res => res.json())
function ListMacaamiil() {
  const [addCostumer , setAdd] = useState('')
    let navigate = useNavigate();
    const [raadi , setRaadi] = useState('')
    function handleClick() {
      navigate(-1)
    }   
    const { data, error, isLoading } = useSWR("/api/users/cost/?q="+raadi , fetcher ,  { refreshInterval: 1000 })
 
 
  if(error) return <NoInternet />
  return (
    <>
    <>
       <IonHeader>
        <IonToolbar color="dark">
        <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>
          <div className="flex justify-between ">
             Macaamiil  
             <IonNavLink routerDirection="forward" component={() => <AddCoustmers />}>
             <FaPlusSquare size="25px"  />
             </IonNavLink>
          </div>
             
            </IonTitle>
            
           
        </IonToolbar>
      </IonHeader>
      <IonContent  fullscreen={true} className="ion-padding">
      <br />
          <IonInput 
            label="Raadi macaamiil ka numberkiisa" 
            type='number' labelPlacement="floating" 
            fill="solid" 
            placeholder="Raadi macaamiil ka numberkiisa"
            value={raadi}
            onIonChange={(e)=> setRaadi(e.target.value)}
          ></IonInput> <br />
          {isLoading ? <LoadingTime />
         : 
          <Block>
           {data?.length > 0 ?(
           <> 
           {data.map((e) => (
          
          <IonNavLink routerDirection="forward" component={() => <ViewMacaamiil id={e.cid} />}>
           <IonCard color="light">
        <IonGrid>
          <IonRow>
            <IonCol >{e.name}</IonCol>
            
            
          </IonRow>
          <IonRow>
            <IonCol> {e.s_number}</IonCol>
            <IonCol></IonCol>
            <IonCol size="auto"> {e.h_number}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton color="tertiary" expand='block' fill='outline' shape='round'>{e.types}
              </IonButton>
            </IonCol>
           
            <IonCol>
              {e.xaalada == 'active' ? 
                <IonButton expand='block'  color="success" shape='round'>{e.xaalada}</IonButton>
                : 
               <IonButton expand='block'  color="danger" shape='round'>{e.xaalada}</IonButton> 
              }
            </IonCol>
          </IonRow>
        </IonGrid>
   </IonCard>
          </IonNavLink>
    ))}
    
           </>
           ) : <NotFound msg={'Not found'} />
           }
          </Block>
        }
      </IonContent>
      
    
    </>
    </>
    
  )
}

export default ListMacaamiil