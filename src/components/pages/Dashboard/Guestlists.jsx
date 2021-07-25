import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
  },
  purplebox: {
    height: '100px',
    width: '100px',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e0dbff',
    color: '#7865E5',
  },

  outerbox: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    color: '#7865E5',
  },

  teamtitle: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '30px',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

export default function Chart(props) {
  const classes = useStyles()

  return (
    <React.Fragment>
      <div item={12}>
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          className={classes.outerbox}
        >
          <div className={classes.outerbox}>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <Box
                className={classes.purplebox}
                m={3}
                style={{ margin: '0,auto' }}
              >
                <h1>{props.attending}</h1>
              </Box>
              <h6 style={{ marginTop: '20px', textAlign: 'center' }}>
                Attending
              </h6>
            </Grid>

            <Grid item xs={12} sm={3} md={3} lg={3}>
              <Box
                className={classes.purplebox}
                m={3}
                style={{ margin: '0, auto' }}
              >
                <h1>{props.notAttending}</h1>
              </Box>
              <h6 style={{ marginTop: '20px', textAlign: 'center' }}>
                Not Attending
              </h6>
            </Grid>

            <Grid item xs={12} sm={3} md={3} lg={3}>
              <Box
                className={classes.purplebox}
                m={3}
                style={{ margin: '0, auto' }}
              >
                <h1>{props.pending}</h1>
              </Box>
              <h6 style={{ marginTop: '20px', textAlign: 'center' }}>
                Pending
              </h6>
            </Grid>

            <Grid item xs={12} sm={3} md={3} lg={3}>
              <Box
                className={classes.purplebox}
                m={3}
                style={{ margin: '0, auto' }}
              >
                <h1>{props.total}</h1>
              </Box>
              <h6 style={{ marginTop: '20px', textAlign: 'center' }}>Total</h6>
            </Grid>
          </div>
        </Grid>
      </div>
    </React.Fragment>
  )
}
