import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import NavBar from '../Navbar/NavBar';
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useCookies } from 'react-cookie'

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
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: '#AAD1CA',
    width: '200px',
    color: 'black',
  },
  delete: {
    margin: theme.spacing(3, 0, 2, 1),
    background: '#F2BFD8',
    width: '200px',
    color: 'black',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}))

export default function EventForm(props) {
  const classes = useStyles()

  const history = useHistory()

  // use useState hooks
  const [cookies] = useCookies(['auth_token'])
  const [selectedDate, setSelectedDate] = React.useState(
    new Date('2021-08-18T21:11:54')
  )
  const [eventName, setEventName] = React.useState('')
  const [eventStart, setEventStart] = React.useState('')
  const [eventEnd, setEventEnd] = React.useState('')
  const [eventLocation, setEventLocation] = React.useState('')
  const [eventDescription, setEventDescription] = React.useState('')
  let [fetchedData, setFetchedData] = React.useState('')

  useEffect(() => {
    // GET A SINGLE EVENT DATA //
    const getOnEventData = () => {
      axios
        .get(
          'https://teamup-be.herokuapp.com/api/v1/users/events/' +
            props.location.state._id,
          { headers: cookies }
        )
        .then((response) => {
          const allData = response.data[0]
          setEventLocation(allData.location.name)
          setEventName(allData.event_name)
          setEventStart(allData.from)
          setEventEnd(allData.to)
          setEventDescription(allData.description)
        })
        .catch((error) => console.log(error))
    }

    if (props.location.state && props.location.state._id) {
      getOnEventData()
    }
  }, [])

  // POST - CREATE NEW EVENT
  let postNewEvent = async () => {
    const response = await axios({
      method: 'post',
      headers: cookies,
      url: 'https://teamup-be.herokuapp.com/api/v1/users/events/create',
      data: {
        event_name: eventName,
        from: eventStart,
        to: eventEnd,
        location: eventLocation,
        description: eventDescription,
      },
    })
    setFetchedData(response)
  }

  // PATCH EVENT//
  const updateEvent = () => {
    axios
      .patch(
        'https://teamup-be.herokuapp.com/api/v1/users/events/' +
          props.location.state._id +
          '/update',
        {
          event_name: eventName,
          from: eventStart,
          to: eventEnd,
          location: eventLocation,
          description: eventDescription,
        },
        {
          headers: cookies,
        }
      )
      .then((response) => {
        return
      })
      .catch((error) => console.log(error))
  }

  // DELETE EVENT //
  const deleteEvent = () => {
    axios
      .delete(
        'https://teamup-be.herokuapp.com/api/v1/users/events/' +
          props.location.state._id +
          '/delete',
        {
          headers: cookies,
        }
      )
      .then((response) => {
        return
      })
      .catch((error) => console.log(error))
  }

  // DATE FORM HANDLER
  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

  // FORM SUBMISSION
  const handleFormSubmission = async (e) => {
    e.preventDefault()
    history.push('/events')
  }

  return (
    <div className={classes.root}>
      <NavBar
        title={
          props.location.state && props.location.state._id
            ? 'Event Scheduling - Edit'
            : 'Event Scheduling - Create'
        }
      />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth='lg' className={classes.container}>
          <Box m={10}>
            <form
              onSubmit={(e) => {
                handleFormSubmission(e)
              }}
            >
              {/* Event Name */}
              <TextField
                style={{ marginBottom: '20px' }}
                variant='outlined'
                margin='normal'
                required
                fullWidth
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                id='eventname'
                label='Event Name'
                name='eventname'
                autoFocus
              />

              {/* Event Description */}
              <TextField
                style={{ marginBottom: '20px' }}
                variant='outlined'
                margin='normal'
                required
                fullWidth
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
                id='eventdescription'
                label='Event Description'
                name='eventdescription'
                autoFocus
              />

              {/* Event Start */}

              <TextField
                id='datetime-local'
                style={{ width: '50%' }}
                margin='normal'
                label='Event Start'
                type='datetime-local'
                // defaultValue="2021-05-24T10:30"
                defaultValue='2021-12-23T13:33:00.000Z'
                onChange={(e) => setEventStart(e.target.value)}
                // className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              {/* Event End */}
              <TextField
                id='datetime-local'
                style={{ width: '47%' }}
                margin='normal'
                label='Event Start'
                type='datetime-local'
                defaultValue='2021-12-23T13:33:00.000Z'
                onChange={(e) => setEventEnd(e.target.value)}
                // className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              {/* Event Location */}

              <TextField
                style={{ marginTop: '40px' }}
                variant='outlined'
                margin='normal'
                fullWidth
                id='eventlocation'
                label='Event Location'
                name='eventlocation'
                value={eventLocation}
                onChange={(e) => setEventLocation(e.target.value)}
                autoFocus
              />

              {props.location.state && props.location.state._id ? (
                <div>
                  <Button
                    type='submit'
                    variant='contained'
                    className={classes.submit}
                    onClick={updateEvent}
                  >
                    Edit
                  </Button>

                  <Button
                    type='submit'
                    variant='contained'
                    className={classes.delete}
                    onClick={deleteEvent}
                  >
                    Delete
                  </Button>
                </div>
              ) : (
                <Button
                  type='submit'
                  variant='contained'
                  color='primary'
                  className={classes.submit}
                  onClick={postNewEvent}
                >
                  Add Event
                </Button>
              )}
            </form>
          </Box>
        </Container>
      </main>
    </div>
  )
}
