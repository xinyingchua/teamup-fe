import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import NavBar from '../Navbar/NavBar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import List from '@material-ui/core/List'
import Button from '@material-ui/core/Button'
import Moment from 'react-moment'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import EventByLine from '../../assets/Event-Schedule'
import { DataGrid } from '@material-ui/data-grid';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    background: '#F9F8FF',
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    textAlign: 'center',
  },
  paper: {
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    margin: '8px',
  },
  fixedHeight: {
    height: 150,
  },
  dateTypography: {
    flex: 1,
    fontSize: 40,
    fontWeight: 'bold',
  },
  listItem: {
    flex: 1,
    fontSize: 40,
    fontWeight: 'bold',
  },
  ulroot: {
    width: '100%',
    paddingBottom: theme.spacing(5),
  },
  ulheader: {
    width: '100%',
    paddingTop: theme.spacing(4),
    textAlign: 'left',
  },
  icon: {
    color: '#7865E5',
    paddingBottom: theme.spacing(0),
  },
  submit: {
    background: '#7865E5',
    width: '200px',
    color: 'white',
  },
}))

export default function EventMain() {
  const classes = useStyles()

  // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  // use useState hooks
  const [cookies] = useCookies(['auth_token'])
  const [eventData, getEventData] = React.useState([])
  const url = 'https://teamup-be.herokuapp.com/api/v1/users/events'

  const getAllEventData = () => {
    axios
      .get(`${url}`, { headers: cookies })
      .then((response) => {
        const getData = response.data
        getEventData(getData)
      })
      .catch((error) => {
        return error
      })
  }

  React.useEffect(() => {
    getAllEventData()
  }, [])

  return (
    <div className={classes.root}>
      <NavBar title='Event Scheduling' />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth='lg' className={classes.container}>
          <Grid container spacing={3}>
            {/* Show Current Date & Time */}

            <Grid item xs={12} md={4} lg={5}>
              <Box>
                <Typography
                  color='secondary'
                  className={classes.dateTypography}
                >
                  <Moment format='DD MMMM YYYY hh:mm A' withTitle></Moment>
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid
            item
            xs={8}
            md={11}
            lg={12}
            style={{ textAlign: 'right', paddingTop: '10px' }}
          >
            <Link
              to='/events/create'
              style={{ textDecoration: 'none', color: '#fff' }}
            >
              <Button
                type='submit'
                variant='contained'
                color='primary'
                className={classes.submit}
              >
                Add Event
              </Button>
            </Link>
          </Grid>

          <List className={classes.ulroot}>
            {eventData.length === 0 ? (
              <h6>There are no items at the moment.</h6>
            ) : (
              eventData.map((item, pos) => {
                /* Return Event by line by map */
                return (
                  <EventByLine
                    from={
                      <Moment format='DD MMMM YYYY hh:mm A'>{item.from}</Moment>
                    }
                    to={
                      <Moment format='DD MMMM YYYY hh:mm A'>{item.to}</Moment>
                    }
                    key={pos}
                    name={item.event_name}
                    description={item.description}
                    location={item.location.name}
                    _id={item._id}
                  />
                )
              })
            )}
          </List>
        </Container>
      </main>
    </div>
  )
}
