import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import LinearProgress from '@material-ui/core/LinearProgress'
import Title from '../Title'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    width: '100%',
    background: '#fff',
  },
})

export default function LinearDeterminate(props) {
  const classes = useStyles()


  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Title textAlign='center'>To Do's Before "I Do"</Title>
        </Grid>
        <Grid item xs={6}>
          <Typography
            style={{ color: '#000', fontWeight: '500' }}
            variant='body1'
          >
            Total Tasks
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            style={{ color: '#000', fontWeight: '500' }}
            variant='body1'
          >
            Completed
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography style={{ color: '#000', fontWeight: '500' }} variant='h2'>
            {props.totalTasks}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography style={{ color: '#000', fontWeight: '500' }} variant='h2'>
            {props.completed}
          </Typography>
        </Grid>
      </Grid>
      <LinearProgress
        color='secondary'
        variant='determinate'
        value={props.completed/props.totalTasks*100}
      />
      <Box mt={1.5}>
        <Link to='/to-do' style={{ color: '#7865E5' }} color='primary'>
          View progress
        </Link>
      </Box>
    </div>
  )
}
