import React from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader';
import ViewTrans from '../../components/Trans/View';
import useSWR from 'swr'
import ViewInbox from '../../components/Inbox/ViewInbox';
import ErrorElements from '../../components/404';
import ViewInboxSkleton from '../../components/Skeleton/ViewInbox';
const fetcher = (...args) => fetch(...args).then(res => res.json())
function InboxDetails() {
  const { id } = useParams();
  const { data, error, isLoading } = useSWR('/api/users/inbox/view/'+id, fetcher ,  { refreshInterval: 1000 })

  if (error) return <ErrorElements />
  if (isLoading) return <ViewInboxSkleton />
  if (data == '') return <ErrorElements />

  return (
    <>  
     <ViewInbox view={data.msg} user={data.cos} number={data.number} amount={data.amount} />
    </>
  )
}

export default InboxDetails