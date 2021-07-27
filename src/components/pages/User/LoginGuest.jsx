import React from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import axios from 'axios'
import { withCookies } from 'react-cookie'

const styles = (theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage:
      'url(https://res.cloudinary.com/dhexix4cn/image/upload/v1626617740/teamup/photo-ring_ga1svr.jpg)',
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
})

class LoginGuest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      guest_contact: '',
    }
  }

  handleFormSubmission(e) {
    e.preventDefault()

    axios
      .post('https://teamup-be.herokuapp.com/api/v1/guests/login', {
        guest_contact: this.state.guest_contact,
      })
      .then((response) => {
        // after successful login, store the token as cookie
        const { cookies } = this.props

        cookies.set('auth_token', response.data.token, {
          path: '/',
        })

        this.props.history.push('/guest/rsvp')
      })
      .catch((err) => {
        return err
      })
  }

  handleFormChange(e, fieldName) {
    let newState = {}
    newState[fieldName] = e.target.value

    this.setState(newState)
  }

  render() {
    const { classes } = this.props

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
              Welcome!
            </Typography>
            <Typography
              style={{ fontWeight: '200', fontSize: '18px', marginTop: '10px' }}
              variant='h6'
              align='left'
            >
              Please login with your mobile number
            </Typography>
            <form
              className={classes.form}
              noValidate
              onSubmit={(e) => {
                this.handleFormSubmission(e)
              }}
            >
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='guest_contact'
                label='Mobile Number'
                name='guest_contact'
                autoFocus
                value={this.state.guest_contact}
                onChange={(e) => {
                  this.handleFormChange(e, 'guest_contact')
                }}
              />

              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                className={classes.submit}
              >
                Login
              </Button>
            </form>
          </div>
        </Grid>
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
      </Grid>
    )
  }
}
LoginGuest.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withCookies(withStyles(styles)(LoginGuest))
