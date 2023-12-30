import { Block, Card, Navbar, Page } from 'konsta/react';
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr'
import LoadingTime from '../../components/Loading';
import Trans from '../../components/Trans/Trans';
import HomeViewTrans from '../../components/Skeleton/HomeViewTrans';

const fetcher = (...args) => fetch(...args).then(res => res.json())
function Pending() {

      let navigate = useNavigate();
    
      function handleClick() {
        navigate(-1)
      }   
      const { data, error, isLoading } = useSWR("/api/users/more/pending" , fetcher ,  { refreshInterval: 1000 })
   
  
    if(error) return <NoInternet />
    console.log(data);
  return (
    <Page>
        <Navbar 
        style={{padding: 10}}
     centerTitle
      title={'DHAQDHAQAAQA'}
      left={
      <h3>
      <FaArrowLeft  onClick={handleClick} />
      </h3>}
      />
      <Block>
      </Block>
      {isLoading ? <HomeViewTrans />
         : 
          <Block>
            <Card centerTitle header='Macaamiisha adeegooda shaqada laga wado'>
             
            </Card>
          <Trans trans={data} />
          </Block>
        }
    
    </Page>
  )
}

export default Pending