import { Block, Card, List, Navbar, Page   } from 'konsta/react';
import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import NoInternet from '../../components/NoInternet';
import Loader from '../../components/Loader';
const data2 = [
  { name: "2017", react: 32, angular: 37, vue: 60 },
  { name: "2018", react: 42, angular: 42, vue: 54 },
  { name: "2019", react: 51, angular: 41, vue: 54 },
  { name: "2020", react: 60, angular: 37, vue: 28 },
  { name: "2021", react: 51, angular: 31, vue: 27 },
  { name: "2022", react: 95, angular: 44, vue: 49 },
];
const fetcher = (...args) => fetch(...args).then(res => res.json())
function Seles() {
 
    let navigate = useNavigate();
    const [raadi , setRaadi] = useState('')
    function handleClick() {
      navigate(-1)
    }   
    const { data, error, isLoading } = useSWR('/api/users/seles/view', fetcher ,  { refreshInterval: 1000 })
 
  if(isLoading) return <Loader />
  if(error) return <NoInternet />
  const p =18 / 118 * data.seles
  return (
    <Page>
        <Navbar style={{padding: 10}}
     centerTitle
      title={'SELES'}
      left={
      <h3>
      <FaArrowLeft  onClick={handleClick} />
      </h3>}
     
      />
      <br />
      <Block>
        <List className='-m-2'>
          <div className='grid grid-cols-2 gap-4'>
            <div className=''>
              <Card className='k-color-brand-blue'>
               <center> Today : ${data.seles}</center>
              </Card>
            </div>
            <div className=''>
            <Card className='k-color-brand-pink'>
               <center> Profit : ${p.toFixed(2)}</center>
              </Card>
            </div>
          </div>
        </List>
     
      </Block>
       <ResponsiveContainer  width='100%' height={400}>
        <BarChart
          width='100%'
          height={300}
          data={data.charts7Days}
          margin={{
            top: 70,
            right: 10,
            left: 10,
            bottom:15,
          }}
        >
          <XAxis dataKey="DATE" />
        
          <Tooltip />
          
          <Bar dataKey="amount" fill="#8884d8" />
          <Bar dataKey="profit" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </Page>
  )
}

export default Seles