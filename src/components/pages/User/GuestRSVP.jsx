import React from 'react'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import { makeStyles } from '@material-ui/core/styles'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import { toast } from 'material-react-toastify'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage:
      'url(https://res.cloudinary.com/dhexix4cn/image/upload/v1626617754/teamup/rsvp_wfz3oe.png)',
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

  submit: {
    margin: theme.spacing(3, 0, 2),
    background: '#7865E5',
  },
  logo: {
    maxWidth: 75,
    margin: theme.spacing(-3, 12, 10, 0),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}))

export default function GuestRSVP() {
  const classes = useStyles()

  const [cookies, removeCookie] = useCookies(['guest_token'])
  const [role, setRole] = React.useState(cookies.guest_token.role)
  const [numOfPax, setNumOfPax] = React.useState(cookies.guest_token.pax)
  const [status, setStatus] = React.useState(cookies.guest_token.status)

  const notify = (message) => toast.dark(message)

  let history = useHistory()

  const RsvpReply = async (e) => {
    e.preventDefault()

    let response = null

    try {
      response = await axios({
        method: 'patch',
        url: `https://teamup-be.herokuapp.com/api/v1/users/guests/${cookies.guest_token._id}/rsvp`,
        data: {
          role: role,
          status: status,
          pax: numOfPax,
        },
      })
    } catch (err) {
      return err
    }
    if (response.status !== 200) {
      return notify('Please try to RSVP again')
    }

    removeCookie('guest_token')
    notify(`Your RSVP has been saved!`)
    history.push('/guest/login')
    return
  }

  return (
    <Grid container component='main' className={classes.root}>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <img
            src='https://res.cloudinary.com/dhexix4cn/image/upload/v1626617737/teamup/logo_sbei3p.png'
            alt='logo'
            className={classes.logo}
          />
          <Typography style={{ fontWeight: '700' }} variant='h4' align='left'>
            RSVP
          </Typography>
          <Typography
            style={{ fontWeight: '200', fontSize: '18px', marginTop: '10px' }}
            variant='h6'
            align='left'
          >
            Please confirm your attendance.
          </Typography>

          <FormControl variant='outlined' className={classes.formControl}>
            <InputLabel id='demo-simple-select-outlined-label'>
              Which team on you on?
            </InputLabel>
            <Select
              labelId='demo-simple-select-outlined-label'
              id='demo-simple-select-outlined'
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <MenuItem value=''></MenuItem>
              <MenuItem value='bride'>Bride</MenuItem>
              <MenuItem value='groom'>Groom</MenuItem>
            </Select>
          </FormControl>

          <FormControl variant='outlined' className={classes.formControl}>
            <InputLabel id='demo-simple-select-outlined-label'>
              Any family members to bring along?
            </InputLabel>
            <Select
              labelId='demo-simple-select-outlined-label'
              id='demo-simple-select-outlined'
              value={numOfPax}
              onChange={(e) => setNumOfPax(e.target.value)}
            >
              <MenuItem value=''></MenuItem>
              <MenuItem value='1'>1</MenuItem>
              <MenuItem value='2'>2</MenuItem>
              <MenuItem value='3'>3</MenuItem>
              <MenuItem value='4'>4</MenuItem>
              <MenuItem value='5'>5</MenuItem>
              <MenuItem value='6'>6</MenuItem>
            </Select>
          </FormControl>

          <FormControl variant='outlined' className={classes.formControl}>
            <InputLabel id='demo-simple-select-outlined-label'>RSVP</InputLabel>
            <Select
              labelId='demo-simple-select-outlined-label'
              id='demo-simple-select-outlined'
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <MenuItem value=''></MenuItem>
              <MenuItem value='attending'>Attending</MenuItem>
              <MenuItem value='unavailable'>Not Attending</MenuItem>
              <MenuItem value='pending'>Pending</MenuItem>
            </Select>
          </FormControl>

          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick={(e) => RsvpReply(e)}
          >
            Confirm
          </Button>
        </div>
      </Grid>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
    </Grid>
  )
}
