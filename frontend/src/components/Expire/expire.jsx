import React from "react";
import { IonButton, IonNav } from '@ionic/react';
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../slices/authSlice';
import { useLogoutMutation } from '../../slices/usersApiSlice';
function ExpireToken() {
     
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
    return (
        <div className="flex flex-col min-h-screen justify-center items-center ion-padding">    
      WAQTIGA AYAA KAA DHACAY <br />
      <IonButton onClick={logoutHandler} className='container'>fadlan halkan ku dhufo</IonButton>
      {/* <span className="loading loading-ring loading-md"></span> */}
    </div>
    )
}

export default ExpireToken