import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://res.cloudinary.com/dhexix4cn/image/upload/v1626617738/teamup/photo-girl2_jogvay.webp)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
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
  
}));

export default function RegisterPage() {
  const classes = useStyles()
  // use useState hooks
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  // const [password, setPass] = React.useState('')
  let [fetchedData, setFetchedData] = React.useState('')
  // use api callback
  let fetchData = async () => {
    fetchedData = await axios({
      method: 'post',
      url: 'https://teamup-be.herokuapp.com/api/v1/register',
      data: {
        first_name: name,
        last_name: name,
        email: email,
        partner_first_name: 'lady',
        partner_last_name: 'lady',
        partner_email: 'lady2@email.com',
        role: 'groom',
        d_date: '2021-12-31',
        e_budget: 50000,
        password: '1234',
        confirmPassword: '1234',
        d_destination: 'Bedok Mall',
      },
    })
    console.log(fetchedData.data)
    setFetchedData(fetchedData)
  }

  // React.useEffect(() => {
  //   fetchData()
  // }, [])
  // console log for debugging
  console.log(name)
  console.log(email)

  // submit form function
  const handleFormSummit = async (e) => {
    e.preventDefault()
    // if (password !== confirmPass) {
    //   console.log('password does not match')
    //   return
    // }
    fetchData()
    
    console.log(
      `form submitted with values: ${name}, ${email}, `
    )
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
              handleFormSummit(e)
            }}
          >
            <TextField
              variant='outlined'
              margin='normal'
              required
              style={{width:"55%"}}
              id='name'
              label='Your Name'
              name='name'
              autoComplete='name'
              autoFocus
              onChange={(e) => setName(e.target.value)}
            />
            <FormControl 
            variant="outlined" 
            style={{width:"43%", marginLeft: "6px"}}
            margin="normal"
            textAlign= "left">
                <InputLabel id="demo-simple-select-outlined-label">Your Role</InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="teamSelection"
                    // onChange={(e) => setTeamSelection(e.target.value)}
                  >
                    <MenuItem value="">
                    </MenuItem>
                    <MenuItem value="bride">Bride</MenuItem>
                    <MenuItem value="groom">Groom</MenuItem>
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
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='partnerName'
              label="Your Partner's Name"
              name='partnerName'
              autoComplete='name'
              autoFocus
              // onChange={(e) => setEmail(e.target.value)}
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
              // onChange={(e) => setEmail(e.target.value)}
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
              <GoogleLoginButton iconSize={20} onClick={() => alert('Hello')}>
                <Typography style={{ textAlign: 'center' }}>
                  Register with Google
                </Typography>
              </GoogleLoginButton>
              <FacebookLoginButton iconSize={20} onClick={() => alert('Hello')}>
                <Typography style={{ textAlign: 'center' }}>
                  Register with Facebook
                </Typography>
              </FacebookLoginButton>
            </Grid>
            <Grid container>
              <Grid item>
                Do you have an account?
                <Link
                  href='#'
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