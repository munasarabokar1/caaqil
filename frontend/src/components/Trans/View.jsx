import React from 'react'
import { Block, Button , Card, List, Navbar, Page } from 'konsta/react';
import { useState , useEffect } from 'react';
import { useNavigate } from 'react-router';
import DateObject from "react-date-object";
import { FaArrowLeft } from 'react-icons/fa';
import ReSends from '../Diagmode/Trans/ReSends';
import IsSents from '../Diagmode/Trans/IsSents';
import IsCanle from '../Diagmode/Trans/IsCancle';
function ViewTrans({view}) {
  let navigate = useNavigate();
  function handleClick() {
    navigate(-1)
  }   
  return (
    <Page>
   
       <Navbar
     centerTitle
      title={'FAAFAAHINTA DHAQDHAQAAQA'}
      left={
      <h3>
      <FaArrowLeft  onClick={handleClick} />
    </h3>}
      />

    <Block>
    <Card>
      
      <List nested className="-m-2">
      <div className="grid grid-cols-4 gap-4">
       
        <div className="c">
            <Button outline className="k-color-brand-pink">Name </Button>
        </div>
        <div className="col-span-3"> <Button className="k-color-brand-pink">
            {view.magaca}</Button>
        </div>
        <div className="col-span-2 ...">
            <Button outline className="k-color-brand-green">Hormuud : </Button>
        </div>
        <div className="col-span-2"> <Button className="k-color-brand-blue">
            {view.h_number}</Button>
        </div>
        <div className="col-span-2 ...">
            <Button outline className="k-color-brand-green">Somtel : </Button>
        </div>
        <div className="col-span-2"> <Button className="k-color-brand-blue">
            {view.s_number}</Button>
        </div>
        <div className="..."><Button outline className="k-color-brand-blue">Sent </Button></div>
        <div className="col-span-3">
        <Button className="">
            {new DateObject(view.created_at).format("DD MMMM hh:mm a")}</Button>
        </div> 
        
        <div className="col-span-2"><Button outline className="k-color-brand-dark">Xaalada : </Button></div>
        <div className="col-span-2">
        {view.xaalada == 'pending' ?  
      <Button className="k-color-brand-warning"> <strong>{view.xaalada}</strong></Button>
    :<>
    {view.xaalada == 'success' ? 
     <Button className="k-color-brand-green">  <strong>{view.xaalada}</strong></Button>
     : 
     <Button className="k-color-brand-red">  <strong>{view.xaalada}</strong></Button>
     }
    </> 
     }
        </div>
        <div className="col-span-2"><Button  className="k-color-brand-dark">Amount : </Button></div>
        <div className="col-span-2">
        <Button outline className="k-color-brand-green">
            ${view.amount}</Button>
        </div>
        <div className="col-span-2"><Button  className="k-color-brand-dark">Profit : </Button></div>
        <div className="col-span-2">
        <Button outline className="k-color-brand-green">
            ${view.profit}</Button>
        </div>
        <br />
        <div className="col-span-1 ...">
          {/* <DelItemsWaitlist view={view} /> */}
        </div>
        </div>
    </List>
  </Card>
    </Block>
  
    {view.xaalada == 'pending' && 
      <Block strongIos className=''>
        <div className='grid grid-cols-3 gap-x-4'>
         <ReSends view={view} />
         <IsSents view={view} />
         <IsCanle view={view} />
        </div>
      </Block>
    }
       
        
    </Page>
  )
}

export default ViewTrans