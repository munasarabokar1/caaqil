import { Block, Button, Card, List, ListItem, Navbar, Page } from 'konsta/react';
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom'
import useSWR from 'swr'
import NoInternet from '../../components/NoInternet';
import Loader from '../../components/Loader';
import DateObject from "react-date-object";
import DelItemsWaitlist from '../../components/Diagmode/Waitlist/DelItemsWaitlist';
import ViewWaitingSkleton from '../../components/Skeleton/ViewWaitingSkleton';

const fetcher = (...args) => fetch(...args).then(res => res.json())
function WaitingDetials() {
    const { id } = useParams();
    let navigate = useNavigate()
    const { data, error, isLoading } = useSWR('/api/users/wait/'+id, fetcher ,  { refreshInterval: 1000 })

    if (error) return <NoInternet />
    if (isLoading) return <ViewWaitingSkleton />
    
  return (
    <Page>
    <Navbar style={{padding: 10}}
    centerTitle
    title={data.numbers}
    left={
    <h3>
    <FaArrowLeft  onClick={() => navigate(-1)} />
    </h3>}
    /> <br />
      <Block>
      <Card>
      
          <List nested className="-m-2">
          <div className="grid grid-cols-3 gap-4">
           
            <div className="col-span-2 ...">
                <Button outline className="k-color-brand-blue">Amount With Shortcode: </Button>
            </div>
            <div className="..."> <Button className="k-color-brand-blue">
                {data.amounts}</Button>
            </div>
            <div className="col-span-2 ...">
                <Button outline className="k-color-brand-green">Numberka loo diraayo : </Button>
            </div>
            <div className="..."> <Button className="k-color-brand-green">
                {data.numbers}</Button>
            </div>
            <div className="..."><Button outline className="k-color-brand-pink">Time : </Button></div>
            <div className="col-span-2 ...">
            <Button className="k-color-brand-pink">
                {new DateObject(data.send_time).format("DD MMMM hh:mm a")}</Button>
            </div> 
            <div className="col-span-2"><Button outline className="k-color-brand-dark">Xaalada : </Button></div>
            <div className="....">
            <Button className="k-color-brand-dark">
                {data.xaalada}</Button>
            </div> 
            <br />
            <div className="col-span-1 ...">
              <DelItemsWaitlist view={data} />
            </div>
            </div>
        </List>
      </Card>
      </Block>
    </Page>
  )
}

export default WaitingDetials