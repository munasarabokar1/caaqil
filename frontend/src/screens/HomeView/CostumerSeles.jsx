import { Block, Card, Navbar, Page } from 'konsta/react';
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr'
import LoadingTime from '../../components/Loading';
import Trans from '../../components/Trans/Trans';
import HomeViewOthers from '../../components/Skeleton/HomeViewOthers';
import HomeViewTrans from '../../components/Skeleton/HomeViewTrans';

const fetcher = (...args) => fetch(...args).then(res => res.json())
function CostumerSeles() {

      let navigate = useNavigate();
    
      function handleClick() {
        navigate(-1)
      }   
      const { data, error, isLoading } = useSWR("/api/users/more/costumers" , fetcher ,  { refreshInterval: 1000 })
   
  
    if(error) return <NoInternet />
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
      {isLoading ?  <HomeViewTrans />
         : 
          <Block>
            <Card centerTitle header='Macaamiisha maanta soo dalbtay'>
             
            </Card>
          <Trans trans={data} />
          </Block>
        }
    
    </Page>
  )
}

export default CostumerSeles