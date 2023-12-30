import { Block, Button, Card, List, ListItem, Navbar, Page } from 'konsta/react';
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom'
import useSWR from 'swr'
import NoInternet from '../../components/NoInternet';
import Loader from '../../components/Loader';
import ActiveDeactive from '../../components/Diagmode/Adeega/ActiveDeactive';
import ViewAdeegaSkleton from '../../components/Skeleton/ViewAdeegaSkleton';
const fetcher = (...args) => fetch(...args).then(res => res.json())
function AdeegaDetails() {
    const { type , id } = useParams();
    let navigate = useNavigate()
    const { data, error, isLoading } = useSWR('/api/users/adeegga/'+type+'/'+id, fetcher ,  { refreshInterval: 1000 })

    if (error) return <NoInternet />
    if (isLoading) return <ViewAdeegaSkleton />
    
  return (
    <Page>
    <Navbar style={{padding: 10}}
    centerTitle
    title={'Adeega '+type}
    left={
    <h3>
    <FaArrowLeft  onClick={() => navigate(-1)} />
    </h3>}
    /> <br />
      <Block>
      <Card>
      
          <List nested className="-m-2">
          <div className="grid grid-cols-3 gap-4">
           
            <div className="col-span-2 ..."><ListItem  title="Lacagta" /></div>
            <div className="..."> <Button className="k-color-brand-blue">${data.t.amount}</Button></div>
            <div className="..."></div>
            <div className="..."></div>
            <div className="..."></div>
            <div className="..."></div>
            <div className="..."></div>
            <div className="..."></div>
            <div className="">
               {data.r == 'active' ? 
                 <Button className="k-color-brand-green">{data.r}</Button> :
                 <Button className="k-color-brand-red">{data.r}</Button>
                }
            </div>
            <div className="..."></div>
            <div className="...">
               <ActiveDeactive view={data.t} type={data.r} status={type} />
            </div>
            </div>
        </List>
      </Card>
      </Block>
    </Page>
  )
}

export default AdeegaDetails