import { Block, Card, List, ListInput, Navbar, Page  } from 'konsta/react';
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr'
import LoadingTime from '../../components/Loading';
import NoInternet from '../../components/NoInternet';
import AddNewCoustmers from '../../components/Diagmode/Costumers/AddNewCoustmers';
import InboxList from '../../components/Inbox/InboxList';
import HomeViewOthers from '../../components/Skeleton/HomeViewOthers';

const fetcher = (...args) => fetch(...args).then(res => res.json())
function OtherMsg() {
 
    let navigate = useNavigate();
    function handleClick() {
      navigate(-1)
    }   
    const { data, error, isLoading } = useSWR("/api/users/more/other" , fetcher ,  { refreshInterval: 1000 })
 

  if(error) return <NoInternet />
  return (
    <Page>
        <Navbar style={{padding: 10}}
     centerTitle
      title={'EVC PLUS'}
      left={
      <h3>
      <FaArrowLeft  onClick={handleClick} />
      </h3>}
     
      /> 
      {isLoading ? <HomeViewOthers />
         : 
      <Block>
        <Card color='red' children={<>
        <center>
        Lacagahaan wey Diiwaan gashanyihiin
        Lkn macaamiilka soo diray 
        Ma diiwaan gashno
        </center>
        </>} />
     
     
           <InboxList inbox={data} />
          </Block>
        }
    
    </Page>
  )
}

export default OtherMsg