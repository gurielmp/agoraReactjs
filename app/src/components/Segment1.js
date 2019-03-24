import React from 'react';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const Segment1 = () => {
 return(
  <div className="test">
   <Grid container spacing={24}>
     <Grid item xs={12}>
       <Paper>xs=12</Paper>
     </Grid>
     <Grid item xs={12} sm={6}>
       <Paper>xs=12 / sm=6</Paper>
     </Grid>
     <Grid item xs={12} sm={6}>
       <Paper>xs=12 / sm=6</Paper>
     </Grid>
     <Grid item xs={12} sm={3}>
       <Paper>xs=12 / sm=3</Paper>
     </Grid>
     <Grid item xs={12} sm={3}>
       <Paper>xs=12 / sm=3</Paper>
     </Grid>
     <Grid item xs={12} sm={3}>
       <Paper>xs=12 / sm=3</Paper>
     </Grid>
     <Grid item xs={12} sm={3}>
       <Paper>xs=12 / sm=3</Paper>
     </Grid>
   </Grid>
  </div>
 )
}

export default Segment1;