import React from 'react'
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../slices/authSlice';
import { useLogoutMutation } from '../../slices/usersApiSlice';
  import { IonButtons, IonContent, IonHeader, 
    IonItem, 
    IonLabel, 
    IonList, 
    IonMenu, IonMenuButton, IonNavLink, IonPage, 
    IonTitle, IonToolbar } from '@ionic/react';
import Analysis from './Analysis';
import ListMacaamiil from '../../screens/Macaamiil/ListMacaamiil';
function Header({ 
  users , 
  lastSeen , 
  tran ,
  mobile ,
  other ,
  costumers,
  unsuccess,
  pending,
  seles
}) {
  
 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
      toast("Si sax ah ayaad uga baxday", {
        duration: 3000,
        icon: '‼️',
      })
    } catch (err) {
      console.error(err);
    }
  };
 // const url = 'https://api.dicebear.com/6.x/bottts/svg?seed='+name?.user_name
  return (
    <>
     <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar color="dark">
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
        <IonList>
       
            <IonItem >
              <IonNavLink routerDirection="forward" component={() => <ListMacaamiil />}>
                  <IonLabel >
                    Macaamiil
                  </IonLabel>
                </IonNavLink>
            </IonItem>
          
          <NavLink to={'/dhaqdhaqaaqa'}>
            <IonItem >
              <IonLabel >
              Dhaqdhaqaaqa
              </IonLabel>
            </IonItem>
          </NavLink>
          <NavLink to={'/somtel'}>
            <IonItem >
              <IonLabel >
              Somtel Inbox
              </IonLabel>
            </IonItem>
          </NavLink>
          <NavLink to={'/hormuud'}>
            <IonItem >
              <IonLabel >
              Hormuud Inbox
              </IonLabel>
            </IonItem>
          </NavLink>
          <NavLink to={'/adeegyada'}>
            <IonItem >
              <IonLabel >
              Adeegyada
              </IonLabel>
            </IonItem>
          </NavLink>
          <NavLink to={'/waitlists'}>
            <IonItem >
              <IonLabel >
              Waitlist
              </IonLabel>
            </IonItem>
          </NavLink>
          <NavLink to={'/profile'}>
            <IonItem >
              <IonLabel >
                Profile
              </IonLabel>
            </IonItem>
          </NavLink>
          {users?.role == 'owner' && 
           <NavLink to={'/profile'}>
           <IonItem >
             <IonLabel >
               List Users
             </IonLabel>
           </IonItem>
         </NavLink>
          }
          <NavLink href={'/api/users/download/muraadapp'}>
            <IonItem >
              <IonLabel >
                Muraad V 6.0
              </IonLabel>
            </IonItem>
          </NavLink>
          <NavLink onClick={logoutHandler} >
            <IonItem >
              <IonLabel >
                Log out
              </IonLabel>
            </IonItem>
          </NavLink>

         
         
          
        </IonList>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar color="dark">
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle><center>MURAAD BOT</center></IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
        <Analysis 
          users={users} 
          lastSeen={lastSeen} 
          tran={tran} 
          mobile={mobile}  
          other={other}
          costumers={costumers}
          pending={pending}
          unsuccess={unsuccess}
          seles={seles}
          />   
        </IonContent>
      </IonPage>
           
    
    </>
  )
}

export default Header