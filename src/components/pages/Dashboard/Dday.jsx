import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
    fontSize: 28,
    fontWeight: 'bold',
  },
})

export default function Deposits(props) {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Typography fontWeight='fontWeightbold' color='secondary' variant='h1'>
        {props.dDay}
      </Typography>
      <Typography color='primary' className={classes.depositContext}>
        Days to D-Day
      </Typography>
    </React.Fragment>
  )
}
