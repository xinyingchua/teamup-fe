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
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0
        }
        const diff = Math.random() * 10
        return Math.min(oldProgress + diff, 100)
      })
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Title textAlign='center'>To Do's Before "I Do"</Title>
        </Grid>
        <Grid item xs={6}>
          <Typography
            style={{ color: '#000', fontWeight: '500' }}
            variant='body'
          >
            Tasks
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            style={{ color: '#000', fontWeight: '500' }}
            variant='body'
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
        value={progress}
      />
      <Box mt={1.5}>
        <Link to='/to-do' style={{ color: '#7865E5' }} color='primary'>
          View progress
        </Link>
      </Box>
    </div>
  )
}
