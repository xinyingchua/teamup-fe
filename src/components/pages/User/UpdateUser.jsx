import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import NavBar from '../Navbar/NavBar'
import { CookiesProvider } from 'react-cookie'
import axios from 'axios'

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
  const [task, setTask] = React.useState('')
  const [status, setStatus] = React.useState(false)
  const [role, setRole] = React.useState('')
  let [fetchedData, setFetchedData] = React.useState('')

  function toggle() {
    setStatus(!status)
  }

  // use api callback
  let fetchData = async () => {
    const response = await axios({
      method: 'post',
      headers: {
        auth_token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1Y2FzZXMuc2VldEBnbWFpbC5jb20iLCJpYXQiOjE2MjY5NjcxMzYsImV4cCI6MTYyNzA1MzUzNn0.DMY1A_336WZsnC4iu6x7rLLx-1XQwQ2aMQcP59oSlpc',
      },
      url: 'https://teamup-be.herokuapp.com/api/v1/users/todos/create',
      data: {
        task: '',
        status: false,
        role: '',
      },
    })
    console.log(response.data)
    setFetchedData(response)
  }

  // console log for debugging
  console.log(task)
  console.log(status)
  console.log(role)

  // submit form function
  const handleFormSummit = async (e) => {
    e.preventDefault()

    fetchData()
  }

  return (
    <CookiesProvider>
      <div className={classes.root}>
        <NavBar />
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
                  label='FirstName'
                  name='firstname'
                  onChange={(e) => setTask(e.target.value)}
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
                  onChange={(e) => setTask(e.target.value)}
                  autoFocus
                />

                <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  id='emailInput'
                  label='Email'
                  name='email'
                  onChange={(e) => setTask(e.target.value)}
                  autoFocus
                />

                <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  id='emailInput'
                  label='Password'
                  name='password'
                  onChange={(e) => setTask(e.target.value)}
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
                  defaultValue='2017-05-24'
                  className={classes.textField}
                  onChange={(e) => setTask(e.target.value)}
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
                  onChange={(e) => setTask(e.target.value)}
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
                  onChange={(e) => setTask(e.target.value)}
                  autoFocus
                />

                <Button
                  type='submit'
                  // fullWidth
                  variant='contained'
                  color='primary'
                  className={classes.submit}
                >
                  Update User
                </Button>
              </form>
            </Box>
          </Container>
        </main>
      </div>
    </CookiesProvider>
  )
}
