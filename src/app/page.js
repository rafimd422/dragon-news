import LatestNews from '@/components/ui/LatestNews/LatestNews'
import Sidebar from '@/components/ui/LatestNews/Sidebar/Sidebar'
import { Grid } from '@mui/material'
import React from 'react'

const HomePage = () => {
  return (
<Grid container spacing={2} paddingTop={'1rem'}>
  <Grid item xs={8}>
<LatestNews />


  </Grid>
  <Grid item xs={4}>
<Sidebar />


  </Grid>

</Grid>
  )
}

export default HomePage
