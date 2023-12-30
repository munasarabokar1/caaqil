import { Block, Button, Card, List, ListItem, Navbar, Page } from 'konsta/react';
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'
import useSWR from 'swr'
import DateObject from "react-date-object";
import NoInternet from '../../components/NoInternet';
import Loader from '../../components/Loader';
import ChangePin from '../../components/Diagmode/Profile/ChangePin';
import ChangeDevice from '../../components/Diagmode/Profile/ChangeDevice';
import ChangePass from '../../components/Diagmode/Profile/ChangePass';
import ProfileSkleton from '../../components/Skeleton/ProfileSkleton';
const fetcher = (...args) => fetch(...args).then(res => res.json())
function ProfileUser() {
   
    let navigate = useNavigate()
    const { data, error, isLoading } = useSWR('/api/users/profile/', fetcher ,  { refreshInterval: 1000 })

    if (error) return <NoInternet />
    if (isLoading) return <ProfileSkleton />
    
  return (
    <Page>
    <Navbar style={{padding: 10}}
    centerTitle
    title={'PROFILE USERS'}
    left={
    <h3>
    <FaArrowLeft  onClick={() => navigate(-1)} />
    </h3>}
    /> <br />
        <Block>
      <Card>
      
          <List nested className="-m-2">
          <div className="grid grid-cols-3 gap-4">
           
            <div className="c">
                <Button outline className="k-color-brand-blue">Magaca </Button>
            </div>
            <div className="col-span-2"> <Button className="k-color-brand-blue">
                {data.full_name}</Button>
            </div>
            <div className="col-span-2 ...">
                <Button outline className="k-color-brand-green">Numberka : </Button>
            </div>
            <div className="..."> <Button className="k-color-brand-green">
                {data.p_number}</Button>
            </div>
            <div className="col-span-2 ...">
                <Button outline className="k-color-brand-green">Deegaan : </Button>
            </div>
            <div className="..."> <Button className="k-color-brand-blue">
                {data.deegaan}</Button>
            </div>
            {data.role == 'subscriber' && <>
             <div className="..."><Button outline className="k-color-brand-pink">Joined : </Button></div>
            <div className="col-span-2 ...">
            <Button className="k-color-brand-pink">
                {new DateObject(data.created_at).format("DD MMMM YYYY")}</Button>
            </div> 
            </>}
            {data.role == 'subscriber' ? 
            
            <> 
            <div className="..."><Button outline className="k-color-brand-red">Expire : </Button></div>
            <div className="col-span-2 ...">
            <Button className="k-color-brand-red">
                {new DateObject(data.expiretime).format("DD MMMM YYYY")}</Button>
            </div> 
            </> 
            : 
            <>
            <div className="col-span-3">
            <Button className="k-color-brand-red">
                {data.role}</Button>
            </div> 
            </>}
           
            <div className="col-span-2"><Button outline className="k-color-brand-dark">Xaalada : </Button></div>
            <div className="....">
            <Button className="k-color-brand-green">
                {data.xaalada}</Button>
            </div>
            <div className=""><Button  className="k-color-brand-dark">ID : </Button></div>
            <div className="col-span-2">
                {data?.deviceid ?  <Button outline className="k-color-brand-green">
                {data.deviceid.substring(0,5)}.........{data.deviceid.substring(data.deviceid.length -5)}</Button> : 
                <Button>No registered</Button>
                }
           
            </div>
            </div>
        </List>
      </Card>
      <Card>
      <List nested className="-m-4">
          <ChangePass />
          <ChangeDevice />
          <ChangePin />
        </List>
      </Card>
      </Block>
    </Page>
  )
}

export default ProfileUser