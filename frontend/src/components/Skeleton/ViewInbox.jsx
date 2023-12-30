import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { Block, Card, Navbar, Page } from 'konsta/react';
import { List } from '@mui/material';
function ViewInboxSkleton() {
  return (
    <Page className='k-color-brand-warning'>
          <Navbar style={{padding: 0}}>
            <Skeleton  animation="wave" width="100%" height="150px" />
         </Navbar> 
        <Block strongIos outlineIos>
            <Skeleton  animation="wave" height="55px" />
        </Block>
  <br />
   <Card
        outline
        header={ <Skeleton  animation="wave" width="50%" height="40px" />}
        footer={<Skeleton  animation="wave" width="100%" height="40px" /> }
        headerDivider
        footerDivider
      >
       {<Skeleton  animation="wave" width="100%" height="100px" />}
      </Card>
      <Block>
      <div className="grid grid-cols-2 gap-2">
            <div className="">
            <Skeleton  animation="wave" height="65px" />
            </div>
            <div className=""> 
            <Skeleton  animation="wave" height="65px" />
            </div>
        </div>
      </Block>
    </Page>
  )
}

export default ViewInboxSkleton