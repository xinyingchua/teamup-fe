import React from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage:
      'url(https://res.cloudinary.com/dhexix4cn/image/upload/v1626617738/teamup/photo-girl2_jogvay.webp)',
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

export default function RegisterPage() {
  const classes = useStyles()

  // use useState hooks
  const [mainUserFullName, setMainUserFullName] = React.useState('')
  const [mainUserEmail, setMainUserEmail] = React.useState('')
  const [mainUserRole, setMainUserRole] = React.useState('')
  const [secondaryUserFullName, setSecondaryUserFullName] = React.useState('')
  const [secondaryUserEmail, setSecondaryUserEmail] = React.useState('')
  let [fetchedData, setFetchedData] = React.useState('')
  let history = useHistory()


  // MAKING POST REQUEST TO REGISTER // 

  let fetchData = async () => {
    fetchedData = await axios({
      method: 'post',
      url: 'https://teamup-be.herokuapp.com/api/v1/register',
      data: {
        user_fullName: mainUserFullName,
        user_email: mainUserEmail,
        user_role: mainUserRole,
        partner_fullName: secondaryUserFullName,
        partner_email: secondaryUserEmail,
      },
    })
    setFetchedData(fetchedData)
  }

  // submit form function
  const handleFormSubmission = async (e) => {
    e.preventDefault()
    fetchData()
    history.push('/register/change-password')
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
            Register to TeamUp!
          </Typography>
          <Typography
            style={{ fontWeight: '200', fontSize: '18px', marginTop: '10px' }}
            variant='h6'
            align='left'
          >
            Join TeamUp! for easy and fuss-free wedding planning!
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
              style={{ width: '55%' }}
              id='name'
              label='Your Full Name'
              name='name'
              autoComplete='name'
              autoFocus
              onChange={(e) => setMainUserFullName(e.target.value)}
            />
            <FormControl
              variant='outlined'
              style={{ width: '43%', marginLeft: '6px' }}
              margin='normal'
              textalign='left'
            >
              <InputLabel id='demo-simple-select-outlined-label'>
                Your Role
              </InputLabel>
              <Select
                labelId='demo-simple-select-outlined-label'
                id='teamSelection'
                value = {mainUserRole}
                onChange={(e) => setMainUserRole(e.target.value)}
              >
                <MenuItem value='bride'>Bride</MenuItem>
                <MenuItem value='groom'>Groom</MenuItem>
              </Select>
            </FormControl>

            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Your Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              onChange={(e) => setMainUserEmail(e.target.value)}
            />

            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='partnerName'
              label="Your Partner's Full Name"
              name='partnerName'
              autoComplete='name'
              autoFocus
              onChange={(e) => setSecondaryUserFullName(e.target.value)}
            />

            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='partnerEmail'
              label="Your Partner's Email"
              name='partnerEmail'
              autoComplete='email'
              autoFocus
              onChange={(e) => setSecondaryUserEmail(e.target.value)}
            />

            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              Register
            </Button>
            <Grid item xs={12} md={12} lg={12}>
              {/* <GoogleLoginButton iconSize={20} onClick={() => alert('Hello')}>
                <Typography style={{ textAlign: 'center' }}>
                  Register with Google
                </Typography>
              </GoogleLoginButton>
              <FacebookLoginButton iconSize={20} onClick={() => alert('Hello')}>
                <Typography style={{ textAlign: 'center' }}>
                  Register with Facebook
                </Typography>
              </FacebookLoginButton> */}
            </Grid>
            <Grid container>
              <Grid item>
                Do you have an account?
                <Link
                  to='/login'
                  style={{ textDecorationLine: 'underline', color: '#7865E5' }}
                  variant='body2'
                >
                  {' Login now'}
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
