import React from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader';
import ViewTrans from '../../components/Trans/View';
import useSWR from 'swr'
import ErrorElements from '../../components/404';
import ViewTransSkleton from '../../components/Skeleton/ViewTransSkleton';
const fetcher = (...args) => fetch(...args).then(res => res.json())
function DetialsTransection() {
  const { id } = useParams();
  const { data, error, isLoading } = useSWR('/api/users/trans/view/'+id, fetcher ,  { refreshInterval: 1000 })

  if (error) return  <ErrorElements />
  if (isLoading) return <ViewTransSkleton />
  if (data == '') return <ErrorElements />
  return (
    <>  
       <ViewTrans view={data} />
    </>
  )
}

export default DetialsTransection