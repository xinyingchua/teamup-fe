import React from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { Link } from 'react-router-dom'
import { toast } from 'material-react-toastify'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage:
      'url(https://res.cloudinary.com/dhexix4cn/image/upload/v1626617738/teamup/photo-girl1b_nwb8u7.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: '#7865E5',
  },
  logo: {
    maxWidth: 75,
    margin: theme.spacing(-3, 12, 10, 0),
  },
}))

export default function SignInSide() {
  const classes = useStyles()

  const notify = (message) => toast.dark(message)

  // use useState hooks

  const [emailLogin, setEmailLogin] = React.useState('')
  const [passwordLogin, setPasswordLogin] = React.useState()
  // Npm Cookies  => [ value, setter ] ==> if we want to use setter, we need to set value
  const [cookie, setCookie] = useCookies(['auth_token'])
  let history = useHistory()

  // use api callback
  let fetchData = async (response) => {
    try {
      response = await axios({
        method: 'post',
        url: 'https://teamup-be.herokuapp.com/api/v1/login',
        data: {
          email: emailLogin,
          password: passwordLogin,
        },
      })
    } catch (err) {
      return err
    }

    return response
  }

  // submit form function
  const handleFormSubmission = async (e) => {
    e.preventDefault()

    let response = await fetchData()

    if (!response.data) {
      notify('Email or password is incorrect. Please try again.')
      return
    }

    setCookie('auth_token', response.data.token)
    history.push('/dashboard')
    return
  }

  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <img
            src='https://res.cloudinary.com/dhexix4cn/image/upload/v1626617737/teamup/logo_sbei3p.png'
            alt='logo'
            className={classes.logo}
          />
          <Typography style={{ fontWeight: '700' }} variant='h4' align='left'>
            Login
          </Typography>
          <Typography
            style={{ fontWeight: '200', fontSize: '18px', marginTop: '10px' }}
            variant='h6'
            align='left'
          >
            Welcome back! Please login to your account.
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={(e) => {
              handleFormSubmission(e)
            }}
          >
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              onChange={(e) => {
                setEmailLogin(e.target.value)
              }}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              onChange={(e) => setPasswordLogin(e.target.value)}
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container style={{ textAlign: 'center' }}>
              <Grid item>
                New User?
                <Link
                  to='/register'
                  style={{ textDecorationLine: 'underline', color: '#7865E5' }}
                  variant='body2'
                >
                  {' Sign Up!'}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
    </Grid>
  )
}
