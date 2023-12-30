import { IonProgressBar } from '@ionic/react'
import { Preloader } from 'konsta/react'
import React from 'react'

function LoadingTime() {
  return (
    <div className="flex flex-col justify-center items-center">    
     <IonProgressBar type="indeterminate"></IonProgressBar>
    </div>
  )
}

export default LoadingTime