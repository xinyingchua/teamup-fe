import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import NavBar from '../Navbar/NavBar'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import moment from 'moment'
import { useHistory } from 'react-router-dom'

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
}))

export default function UpdateUser() {
  const classes = useStyles()

  // use useState hooks
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [dDate, setDdate] = React.useState('')
  const [dDestination, setDdestination] = React.useState('')
  const [budget, setBudget] = React.useState('')
  let history = useHistory()
  const [cookies] = useCookies(['auth_token'])

  useEffect(() => {
    // GET //
    const getUserData = () => {
      axios
        .get('https://teamup-be.herokuapp.com/api/v1/users/profile', {
          headers: cookies,
        })
        .then((response) => {
          const allUserData = response.data
          setFirstName(allUserData.first_name)
          setLastName(allUserData.last_name)
          setEmail(allUserData.email)
          setDdate(moment(allUserData.d_date).format('YYYY-MM-DD'))
          setDdestination(allUserData.d_destination.name)
          setBudget(allUserData.e_budget)
        })
        .catch((error) => {
          return error
        })
    }
    getUserData()
  }, [])

  // Patch User Profile //
  const updateUserProfile = () => {
    axios
      .patch(
        'https://teamup-be.herokuapp.com/api/v1/users/profile/update',
        {
          first_name: firstName,
          last_namet: lastName,
          email: email,
          password: password,
          d_date: dDate,
          d_destination: dDestination,
          e_budget: budget,
        },
        {
          headers: cookies,
        }
      )
      .then((response) => {
        return
      })
      .catch((error) => {
        return error
      })
  }

  // submit form function
  const handleFormSummit = async (e) => {
    e.preventDefault()
    history.push('/login')
  }

  return (
    <div className={classes.root}>
      <NavBar title='Update Personal Information' />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth='lg' className={classes.container}>
          <Box m={10}>
            <form
              onSubmit={(e) => {
                handleFormSummit(e)
              }}
            >
              <TextField
                variant='outlined'
                margin='normal'
                required
                style={{ width: '55%' }}
                id='firstnameInput'
                label='First Name'
                name='firstname'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                autoFocus
              />

              <TextField
                variant='outlined'
                margin='normal'
                required
                style={{ width: '44%', marginLeft: '5px' }}
                id='lastnameInput'
                label='Last Name'
                name='lastname'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                autoFocus
              />

              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                label='Email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />

              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                label='Password'
                name='password'
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
              />

              <TextField
                id='date'
                style={{
                  width: '50%',
                  marginTop: '20px',
                  marginRight: '5px',
                }}
                label='Wedding Date'
                type='date'
                value={dDate}
                className={classes.textField}
                onChange={(e) => setDdate(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <TextField
                variant='outlined'
                margin='normal'
                required
                style={{ width: '48%', marginLeft: '5px' }}
                id='d-destination'
                label='D-Destination'
                name='d-destination'
                value={dDestination}
                onChange={(e) => setDdestination(e.target.value)}
                autoFocus
              />

              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='emailInput'
                label='Budget'
                name='password'
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                autoFocus
              />

              <Button
                type='submit'
                // fullWidth
                variant='contained'
                color='primary'
                onClick={updateUserProfile()}
                className={classes.submit}
              >
                Update User
              </Button>
            </form>
          </Box>
        </Container>
      </main>
    </div>
  )
}
