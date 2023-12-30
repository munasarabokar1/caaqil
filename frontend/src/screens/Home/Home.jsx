import React, {  } from 'react'
import useSWR from 'swr'

import { IonPage, useIonLoading } from '@ionic/react'
import NoInternet from '../../components/NoInternet';
import Header from '../../components/Home/Header';
import ExpireToken from '../../components/Expire/expire';
import Loader from '../../components/Loader';
const fetcher = (...args) => fetch(...args).then(res => res.json())
function Home() {
  const [present, dismiss] = useIonLoading();
  const { data, error, isLoading } = useSWR('/api/users/view', fetcher ,  { refreshInterval: 1000 })
  const load = async () => {
    await present({ message: 'Wax yar sug...' });
  }
  if (error) return <NoInternet />
  if (isLoading)  return <Loader />
  if (!data?.users?.full_name) return <ExpireToken />
  return (
    <>
      {/* Headers And ANnlysis  */}
    <Header 
    users={data?.users} 
    lastSeen={data?.lastSeen} 
    tran={data?.trans} 
    mobile={data.mobile}  
    other={data.other}
    costumers={data.costumers}
    pending={data.pending}
    unsuccess={data.unsuccess}
    seles={data.seles}
    /> 
 
  </> 
  )
}

export default Home