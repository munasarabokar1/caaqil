import { IonButton } from '@ionic/react';
import { Button } from 'konsta/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function NoInternet() {
    let navigate = useNavigate();
    function handleClick() {
        navigate('/')
      }
  return (
    <div className="flex flex-col min-h-screen justify-center items-center ion-padding">    
      No Internet Connection <br />
      <IonButton onClick={handleClick} className='container'>Refresh</IonButton>
      {/* <span className="loading loading-ring loading-md"></span> */}
    </div>
  )
}

export default NoInternet