import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { Block, Card, Navbar, Page } from 'konsta/react';
import { List } from '@mui/material';
function ProfileSkleton() {
  return (
    <Page className='k-color-brand-warning'>
          <Navbar style={{padding: 10}}>
         <Skeleton  animation="wave" width="100%" height="100px" />
         </Navbar> 
       <br />
        <Block>
        <Card>
      
      <List nested className="-m-2">
      <div className="grid grid-cols-3 gap-4">
       
        <div className="c">
        <Skeleton  animation="wave" height="45px" />
        </div>
        <div className="col-span-2">  <Skeleton  animation="wave" height="45px" />
        </div>
        <div className="col-span-2 ...">
        <Skeleton  animation="wave" height="45px" />
        </div>
        <div className="...">  <Skeleton  animation="wave" height="45px" />
        </div>
        <div className="col-span-2 ...">
        <Skeleton  animation="wave" height="45px" />
        </div>
        <div className="...">  <Skeleton  animation="wave" height="45px" />
        </div>
        
         <div className="..."> <Skeleton  animation="wave" height="45px" /></div>
        <div className="col-span-2 ...">
        <Skeleton  animation="wave" height="45px" />
        </div> 
      
        <div className="..."> <Skeleton  animation="wave" height="45px" /></div>
        <div className="col-span-2 ...">
        <Skeleton  animation="wave" height="45px" />
        </div> 
     
       
       
        <div className="col-span-2">
        <Skeleton  animation="wave" height="45px" />
        </div>
        <div className="....">
        <Skeleton  animation="wave" height="45px" />
        </div>
        <div className=""> <Skeleton  animation="wave" height="45px" /></div>
        <div className="col-span-2">
        <Skeleton  animation="wave" height="45px" />
        </div>
        </div>
    </List>
  </Card>
  <Card>
  <List nested className="-m-4">
  <Skeleton  animation="wave" height="45px" />
  <Skeleton  animation="wave" height="45px" />
  <Skeleton  animation="wave" height="45px" />
    </List>
  </Card>
        </Block> 
      
        
    </Page>
  )
}

export default ProfileSkleton