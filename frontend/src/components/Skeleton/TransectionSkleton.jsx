import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { Block, Card, Page } from 'konsta/react';
function TransectionSkleton() {
  return (
    <>
     
       <Block>
        <div className="grid grid-cols-3 gap-x-10">
          <Skeleton  animation="wave" height="45px" />
          <div></div>
          <Skeleton  animation="wave"  />
          </div>
          <div className="grid grid-cols-2 gap-x-20">
          <Skeleton  animation="wave" height="45px" />
          
          <Skeleton  animation="wave"  />
          </div>
          <div className="grid grid-cols-2 gap-x-4">
          <Skeleton  animation="wave" height="60px" />
          
          <Skeleton  animation="wave"  />
          </div>
       </Block>
       <Block> 
        <div className="grid grid-cols-3 gap-x-10">
          <Skeleton  animation="wave" height="45px" />
          <div></div>
          <Skeleton  animation="wave"  />
          </div>
          <div className="grid grid-cols-2 gap-x-20">
          <Skeleton  animation="wave" height="45px" />
          
          <Skeleton  animation="wave"  />
          </div>
          <div className="grid grid-cols-2 gap-x-4">
          <Skeleton  animation="wave" height="60px" />
          
          <Skeleton  animation="wave"  />
          </div>
       </Block> 
       <Block> 
        <div className="grid grid-cols-3 gap-x-10">
          <Skeleton  animation="wave" height="45px" />
          <div></div>
          <Skeleton  animation="wave"  />
          </div>
          <div className="grid grid-cols-2 gap-x-20">
          <Skeleton  animation="wave" height="45px" />
          
          <Skeleton  animation="wave"  />
          </div>
          <div className="grid grid-cols-2 gap-x-4">
          <Skeleton  animation="wave" height="60px" />
          
          <Skeleton  animation="wave"  />
          </div>
       </Block> 
       <Block> 
        <div className="grid grid-cols-3 gap-x-10">
          <Skeleton  animation="wave" height="45px" />
          <div></div>
          <Skeleton  animation="wave"  />
          </div>
          <div className="grid grid-cols-2 gap-x-20">
          <Skeleton  animation="wave" height="45px" />
          
          <Skeleton  animation="wave"  />
          </div>
          <div className="grid grid-cols-2 gap-x-4">
          <Skeleton  animation="wave" height="60px" />
          
          <Skeleton  animation="wave"  />
          </div>
       </Block> 
      
        
    </>
  )
}

export default TransectionSkleton