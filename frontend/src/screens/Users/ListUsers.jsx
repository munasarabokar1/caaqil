import { Block, List, ListInput, Navbar, Page , Button ,ListItem } from 'konsta/react';
import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaPlusSquare } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr'
import NotFound from '../../components/NotFound';
import { NavLink } from 'react-router-dom'
import LoadingTime from '../../components/Loading';
import NoInternet from '../../components/NoInternet';
import AddNewCoustmers from '../../components/Diagmode/Costumers/AddNewCoustmers';
import UserSkleton from '../../components/Skeleton/UserSkleton';
import DateObject from "react-date-object";
import AddUsers from '../../components/Diagmode/Users/AddUsers';
const fetcher = (...args) => fetch(...args).then(res => res.json())
function ListUsers() {
 
    let navigate = useNavigate();
    const [raadi , setRaadi] = useState('')
    function handleClick() {
      navigate(-1)
    }   
    const { data, error, isLoading } = useSWR("/api/users/list/?q="+raadi , fetcher ,  { refreshInterval: 1000 })
 

  if(error) return <NoInternet />
  return (
    <Page>
        <Navbar style={{padding: 10}}
     centerTitle
      title={'MACAAMIIL'}
      left={
      <h3>
      <FaArrowLeft  onClick={handleClick} />
      </h3>}
      right={<AddUsers />}
      />
      <Block>
        
        <List>
        <ListInput
            label="Raadi"
            type="text"
            placeholder="Find users ...."
            required
            outlineMaterial
            onChange={(e) => setRaadi(e.target.value)}
          />  
        </List>
      </Block>
      {isLoading ?<UserSkleton />
         : 
          <Block>
           {data?.length > 0 ?(
           <> 
           {data.map((e) => (
           <List strongMaterial>
   
     <>


         <ListItem 
       link
       chevronMaterial={true}
       title={e.full_name}
      
       subtitle={
        <> <br />
        <div className='flex justify-between ios:hidden space-x-2 rtl:space-x-reverse'> 
        <div>
         Number :  {e.p_number}
        </div>
        <div>
         Joined :  {new DateObject(e.created_at).format("DD MMMM YYYY")}
        </div>
        </div>
        </>
       }
       text={
        <> <br />
         <div className="flex justify-between ios:hidden space-x-2 rtl:space-x-reverse">
                <Button rounded outline className='k-color-brand-green'>
               Expire {new DateObject(e.expiretime).format("DD MMMM YYYY")}
                </Button>
                {e.xaalada == 'active' ? 
                  <Button rounded className="k-color-brand-green">  <strong>{e.xaalada}</strong></Button>
                  : 
                  <Button rounded className="k-color-brand-red">  <strong>{e.xaalada}</strong></Button>
                  }
              </div>
            
        </>
       }
     /> 
          </>
      </List>
    ))}
    
           </>
           ) : <NotFound msg={'waa ka xunahay waxba kuma jiraan halkan'} />
           }
          </Block>
        }
    
    </Page>
  )
}

export default ListUsers