import { Block, Card, List, ListItem, Navbar, Page } from 'konsta/react';
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom'
import useSWR from 'swr'
import NoInternet from '../../components/NoInternet';
import Loader from '../../components/Loader';
import NotFound from '../../components/NotFound';
import ListAdeegaSkleton from '../../components/Skeleton/ListAdeegaSkleton';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
const fetcher = (...args) => fetch(...args).then(res => res.json())
function ListAdeega() {
    const { type } = useParams();
    let navigate = useNavigate()
    const { data, error, isLoading } = useSWR('/api/users/adeega/'+type, fetcher ,  { refreshInterval: 1000 })

    if (error) return <NoInternet />
    if (isLoading) return <ListAdeegaSkleton />
    console.log(data);
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
        {data != 'not found' ? 
       <> 
       <Card>
        {data?.map((i) => (
          <IonItem onClick={() => navigate('/adeegga/'+type+'/'+i.id)}>
          <IonLabel>Amount : ${i.amount}</IonLabel>
          </IonItem>

        ))}
        </Card>
       </> :
       <NotFound msg={'Not Found'} />  
      }
       
    
      </IonList>
      </IonContent>
     
    </IonPage>
  )
}

export default ListAdeega