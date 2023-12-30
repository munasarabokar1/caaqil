import React from 'react'
import { Block, Button , Card, Navbar, Page } from 'konsta/react';
import { useState , useEffect } from 'react';
import { useNavigate } from 'react-router';
import DateObject from "react-date-object";
import { FaArrowLeft } from 'react-icons/fa';
import ReSends from '../Diagmode/Trans/ReSends';
import IsSents from '../Diagmode/Trans/IsSents';
import IsCanle from '../Diagmode/Trans/IsCancle';
import RegisterAndSend from '../Diagmode/Msg/RegisterAndSend';
import DelMsg from '../Diagmode/Msg/DelMsg';
function ViewInbox({view , user , number , amount}) {
  let navigate = useNavigate();
  function handleClick() {
    navigate(-1)
  }   
  return (
    <Page>
   
       <Navbar
       
     centerTitle
      title={'FAAFAAHINTA FARIINTA'}
      left={
      <h3>
      <FaArrowLeft  onClick={handleClick} />
    </h3>}
      />

    
    <Block strongIos outlineIos>
    <Button className='btn btn-outline-success'>
        {view.xaalada == 'other' ?
        <strong>Ma diiwaan gashno</strong>
        : 
         <strong>Magaca : {user.name}</strong>
        }
    
    </Button>
    </Block>
    <br />
   <Block>
   <Card
        outline
        header={'Sender : '+view.sender}
        footer={new DateObject(view.created_at).format("dddd DD MMMM hh:mm a")}
        headerDivider
        footerDivider
      >
       {<strong> <br />
        {view.body} <br /><br />
       </strong>
       }
      </Card>
   </Block>
    
    {view.xaalada != 'valid' && 
      <Block strongIos className=''>
        <div className='grid grid-cols-2 gap-x-4'>
         <DelMsg view={view} />
         {view.xaalada == 'other' &&  <RegisterAndSend view={view} number={number} amount={amount} />}
        </div>
      </Block>
    }
       
        
    </Page>
  )
}

export default ViewInbox