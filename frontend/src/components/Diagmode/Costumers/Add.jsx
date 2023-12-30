import { IonButton, IonContent, IonInput, IonItem, IonLabel, 
    IonModal, IonSelect, IonSelectOption , useIonLoading
 } from '@ionic/react'
import { dialogClasses } from '@mui/material'
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Add() {
    const [present, dismiss] = useIonLoading();
    const [name , setName] = useState('')
    const [hor , setHor] = useState('')
    const [som , setSom] = useState('')
    const [type , setType] = useState('')
    const navigate = useNavigate();
    const submitHandler = async (e) => {
        e.preventDefault();
        await present({ message: 'Wax yar sug...' });
       
        try {
            console.log({name , hor , som , type})
        } catch (error) {
            console.log(error)
        } finally {
            dismiss();
        }
    }
  return (
    <>
           <IonModal
            trigger="add-costumer"
            initialBreakpoint={0.25}
            breakpoints={[0, 0.25, 0.5, 0.75]}
            handleBehavior="cycle"
        >
            <IonContent className="ion-padding flex flex-col min-h-screen justify-center">
            <div className="ion-margin-top">
                <IonLabel>Ku dar macaamiil cusub</IonLabel>
            </div>
            <form onSubmit={submitHandler}>
                <IonItem>
                    <IonLabel position="floating">Magaca Macaamiil ka</IonLabel>
                    <IonInput 
                    type="text"
                    onIonChange={(e) => setName(e.target.value)}
                    />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Somtel</IonLabel>
                    <IonInput 
                    type="number"
                    onIonChange={(e) => setSom(e.target.value)}
                    />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Hormuud</IonLabel>
                    <IonInput 
                    type="number"
                    onIonChange={(e) => setHor(e.target.value)}
                    />
                </IonItem>
                <IonItem>
                <IonSelect aria-label="Dooro Adeega"
               
                onIonChange={(e) => setType(e.target.value)}
                >
                <IonSelectOption value="">Dooro Adeega</IonSelectOption>
                <IonSelectOption value="banana">Unlimited</IonSelectOption>
                <IonSelectOption value="orange">Data</IonSelectOption>
                <IonSelectOption value="orange">Voice</IonSelectOption>
                </IonSelect>
                </IonItem>
                <IonItem>
                </IonItem>
                <div className="flex justify-between">
                <IonButton color="success" expand="full"  type="submit" >save</IonButton>
                    <IonButton color="danger" expand="full">clear</IonButton>
                </div>
            
            </form>
                
            </IonContent>
        </IonModal>
    </>
 
  )
}

export default Add