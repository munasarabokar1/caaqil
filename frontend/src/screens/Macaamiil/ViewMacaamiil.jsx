import React from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader';
import useSWR from 'swr'
import DetailsMA from '../../components/Macaamiil/DetailsM';
import NoInternet from '../../components/NoInternet';
import ViewCostSkleton from '../../components/Skeleton/ViewCostSkleton';
const fetcher = (...args) => fetch(...args).then(res => res.json())
function ViewMacaamiil({id}) {
  const { data, error, isLoading } = useSWR('/api/users/costs/view/'+id, fetcher ,  { refreshInterval: 1000 })
  if (error) return <NoInternet />
  if (isLoading) return <Loader />
  if (!data) return <ErrorElements />
  return (
    <>  
       <DetailsMA view={data.user} type={data.type} />
    </>
  )
}

export default ViewMacaamiil