import React from 'react'
import Helmet from '../components/Helmet'
import Header from '../components/Header'
import Dashboard from '../components/Dashboard'
import Grid from '../components/Grid'
import { Box } from '@material-ui/core'
const Home = () => {
  return (

    <Helmet title='Home'>
      <Header></Header>


      <div style={{display:"flex",borderTop:"2px solid black"}}>
      <Box  style={{width:"310px",height:"100%"}}>
      <Dashboard ></Dashboard>
      </Box>

      <Box  style={{width:"1225px",height:"vh",backgroundColor:"#E5E5E5",borderLeft:"2px solid black",overflowY: "scroll"}}>
        scroll here...
      </Box>

      </div>
      



    
    </Helmet>
    
  )
}

export default Home