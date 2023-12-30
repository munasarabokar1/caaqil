import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { Block, Card, Navbar, Page } from 'konsta/react';
import { List } from '@mui/material';
function ViewCostSkleton() {
  return (
    <Page className='k-color-brand-warning'>
          <Navbar style={{padding: 10}}>
         <Skeleton  animation="wave" width="100%" height="100px" />
         </Navbar> 
       <br />
        <Block>
      <>
        <div className="grid grid-cols-4 gap-2">
            <div className="col-span-4">
            <Skeleton  animation="wave" height="65px" />
            </div>
            <div className="col-span-2 ...">
            <Skeleton  animation="wave" height="65px" />
            </div>
            <div className="col-span-2"> 
            <Skeleton  animation="wave" height="65px" />
            </div>
            <div className="col-span-2 ...">
            <Skeleton  animation="wave" height="65px" />
            </div>
            <div className="col-span-2">
            <Skeleton  animation="wave" height="65px" />
            </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
            <div className="">
            <Skeleton  animation="wave" height="65px" />
            </div>
            <div className="">
            <Skeleton  animation="wave" height="65px" />
            </div>
            <div className=""> 
            <Skeleton  animation="wave" height="65px" />
            </div>
        </div>
    </>
  </Block> 
      
        
    </Page>
  )
}

export default ViewCostSkleton