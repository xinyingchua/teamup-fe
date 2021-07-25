import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import EditIcon from '@material-ui/icons/Edit'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    background: '#F9F8FF',
  },

  rootcard: {
    height: 300,
    width: 300,
    marginRight: theme.spacing(0),
    padding: theme.spacing(2),
    justifyContent: 'center',
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    padding: theme.spacing(3),
  },

  button: {
    marginTop: theme.spacing(4),
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
    background: '#AAD1CA',
    width: '200px',
    color: 'black',
  },
}))

export default function ToDoGrid(props) {
  const classes = useStyles()
  const [cookies] = useCookies(['auth_token'])
  let history = useHistory()

  // Delete TO DO //
  const deleteToDoData = () => {
    axios
      .delete(
        'https://teamup-be.herokuapp.com/api/v1/users/todos/' +
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

  // submit form function
  const handleFormSummit = async (e) => {
    e.preventDefault()
    history.push('/to-do')
  }

  return (
    <Grid item key={props} xs={12} sm={4} lg={3}>
      <Card className={classes.rootcard}>
        <CardContent>
          <Typography
            className={classes.title}
            color='textSecondary'
            gutterBottom
          >
            {props.role}
          </Typography>
          <Typography variant='h5' component='h2'>
            {props.task}
          </Typography>
          <Grid container className={classes.button}>
            <Grid item xs={6}>
              <CardActions>
                <Link
                  to={{ pathname: '/to-do/edit', state: { _id: props._id } }}
                  style={{ textDecoration: 'none', color: '#fff' }}
                >
                  <Button
                    variant='contained'
                    style={{ color: '#7865E5' }}
                    className={classes.button}
                    startIcon={<EditIcon />}
                  >
                    Edit
                  </Button>
                </Link>
              </CardActions>
            </Grid>
            <Grid item xs={6}>
              <CardActions>
                <Link
                  to={{ state: { _id: props._id } }}
                  style={{ textDecoration: 'none', color: '#fff' }}
                >
                  <form
                    onSubmit={(e) => {
                      handleFormSummit(e)
                    }}
                  >
                    <Button
                      variant='contained'
                      justify='right'
                      color='secondary'
                      className={classes.button}
                      onClick={deleteToDoData}
                      startIcon={<CheckCircleOutlineIcon />}
                    >
                      Done
                    </Button>
                  </form>
                </Link>
              </CardActions>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  )
}
