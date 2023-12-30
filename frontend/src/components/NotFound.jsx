import { IonCard } from '@ionic/react'
import React from 'react'

function NotFound({msg}) {
  return (
   <IonCard className='ion-padding'>
      <div className='flex flex-col justify-center'> 
      <center>{msg}</center>
    </div>
   </IonCard>
  )
}

export default NotFound