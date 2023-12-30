import React from 'react'
import { useState, useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../../slices/usersApiSlice';
import { setCredentials } from '../../slices/authSlice';
import toast from 'react-hot-toast';
import { IonButton, IonCard, IonCardContent, IonHeader, 
  IonIcon, IonInput, IonItem, IonLabel, IonTitle, 
  IonToolbar, useIonLoading } from '@ionic/react';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [present, dismiss] = useIonLoading();
  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);
  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    await present({ message: 'Wax yar sug...' });
    try {
      const res = await login({ username, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate('/');
      toast('Welcome '+ res.full_name , {
        icon : '🎉'
      })
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    } finally {
      dismiss();
    }
  };

    return (
      <>
       <IonHeader>
        <IonToolbar color="primary">
          <IonTitle><center>Login</center></IonTitle>
        </IonToolbar>
      </IonHeader> <br />
      <div className='flex flex-col min-h-screen justify-center'>
          <IonCard>
				<IonCardContent>
					<form onSubmit={submitHandler}>
						<IonItem>
							<IonLabel position="floating">Username</IonLabel>
							<IonInput 
              type="text"
              value={username}
              onIonChange={(e) => setUsername(e.target.value)}
               />
						</IonItem>

						<IonItem>
							<IonLabel position="floating">Password</IonLabel>
							<IonInput 
              type="password"
              onIonChange={(e) => setPassword(e.target.value)}
              />
						</IonItem>

						<div className="ion-margin-top">
              {isLoading ? 
              <IonButton disabled expand="full" type="submit" color="success">
              <IonIcon icon={login} slot="start" />
              Login
            </IonButton>
              : 
              <IonButton expand="full" type="submit" color="success">
								<IonIcon icon={login} slot="start" />
								Login
							</IonButton>
              }
							
						</div>
					</form>
				</IonCardContent>
			</IonCard>
      </div>
    
      </>
     
      )
}

export default Login