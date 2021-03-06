import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { toast } from 'material-react-toastify'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage:
      'url(https://res.cloudinary.com/dhexix4cn/image/upload/v1626617739/teamup/photo-guy_l7islm.png)',
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
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: '#7865E5',
  },
  logo: {
    maxWidth: 75,
    margin: theme.spacing(-3, 12, 10, 0),
  },
  icons: {
    maxWidth: 80,
    marginRight: theme.spacing(2),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(5),
    width: 200,
  },
}))

export default function RegisterDateBudget() {
  const classes = useStyles()

  // use useState hooks

  const [eDate, setEDate] = React.useState('')
  const [budget, setBudget] = React.useState('')
  const [cookies] = useCookies(['auth_token'])
  let history = useHistory()

  React.useEffect(() => {
    const notify = (message) => toast.dark(message)

    notify('Please provide your Event Date and Budget!')
  }, [])

  // PATCH REQUEST TO UPDATE EDATE AND BUDGET //
  const updateUserProfile = async () => {
    await axios
      .patch(
        'https://teamup-be.herokuapp.com/api/v1/users/profile/update',
        {
          d_date: eDate,
          e_budget: budget,
        },
        {
          headers: cookies,
        }
      )
      .then((response) => {
        return response
      })
      .catch((err) => {
        return err
      })
  }

  // submit form function
  const handleFormSubmission = async (e) => {
    let response = {}

    e.preventDefault()
    try {
      response = await updateUserProfile()
    } catch (err) {
      return err
    }

    if (!response) {
      return
    }
    history.push('/dashboard')
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

          <Typography style={{ fontWeight: '600' }} variant='h4' align='center'>
            When is your wedding date?
          </Typography>

          <form
            onSubmit={(e) => {
              handleFormSubmission(e)
            }}
            className={classes.form}
            noValidate
          >
            <img
              src='https://res.cloudinary.com/dhexix4cn/image/upload/v1626617736/teamup/event-purple_dmadqr.png'
              alt='logo'
              className={classes.icons}
            />
            <TextField
              id='date'
              label='Wedding Date'
              type='date'
              defaultValue='2022-05-24'
              onChange={(e) => {
                setEDate(e.target.value)
              }}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Typography
              style={{ fontWeight: '600', marginTop: '50px' }}
              variant='h4'
              align='center'
            >
              Input your budget!
            </Typography>
            <img
              src='https://res.cloudinary.com/dhexix4cn/image/upload/v1626617735/teamup/budget-purple_adjbcg.png'
              alt='logo'
              className={classes.icons}
            />

            <TextField
              variant='outlined'
              margin='normal'
              required
              id='wedding-budget'
              label='Amount'
              name='weddingBudget'
              onChange={(e) => {
                setBudget(e.target.value)
              }}
              className={classes.textField}
              autoFocus
            />

            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              Continue
            </Button>
          </form>
        </div>
      </Grid>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
    </Grid>
  )
}
