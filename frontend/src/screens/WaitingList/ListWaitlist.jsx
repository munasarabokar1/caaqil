import { Block, List, ListItem, Navbar, Page } from 'konsta/react';
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'
import useSWR from 'swr'
import NoInternet from '../../components/NoInternet';
import Loader from '../../components/Loader';
import NotFound from '../../components/NotFound';
import { Card } from '@mui/material';
import ListWaitingSkleton from '../../components/Skeleton/ListWaitingSkleton';
const fetcher = (...args) => fetch(...args).then(res => res.json())
function ListWaitlist() {
   
    let navigate = useNavigate()
    const { data, error, isLoading } = useSWR('/api/users/waiting/', fetcher ,  { refreshInterval: 1000 })

    if (error) return <NoInternet />
    if (isLoading) return <ListWaitingSkleton />
   
  return (
    <Page>
    <Navbar style={{padding: 10}}
    centerTitle
    title={'WAITING LIST'}
    left={
    <h3>
    <FaArrowLeft  onClick={() => navigate(-1)} />
    </h3>}
    /> <br />
      <Block>
      <List strongIos outlineIos>
        {data.length > 0  ?  
          <Card>
           {data.map((i) => (
               <List>
                 <ListItem title={'Number Loo diraayo : '+i.numbers} link onClick={() => navigate('/waiting/view/'+i.id)} />
               </List>
            ))}
          </Card>
           : <NotFound msg={'Not Found'} />
        }
       
       
      </List>
      </Block>
    </Page>
  )
}

export default ListWaitlist