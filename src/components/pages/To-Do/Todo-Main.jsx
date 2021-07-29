import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import NavBar from '../Navbar/NavBar'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import { Link } from 'react-router-dom'
import axios from 'axios'
import TodoItem from '../../assets/TodoItem'
import { useCookies } from 'react-cookie'

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

export default function TodoMain() {
  const classes = useStyles()

  // use useState hooks
  const [todoData, setTodoData] = React.useState([])
  const [cookies] = useCookies(['auth_token'])

  const url = 'https://teamup-be.herokuapp.com/api/v1/users/todos'

  const getAllTodoData = () => {
    axios
      .get(`${url}`, {
        headers: cookies,
      })
      .then((response) => {
        const allData = response.data
        setTodoData(response.data)
      })
      .catch((error) => {
        return error
      })
  }

  React.useEffect(() => {
    getAllTodoData()
  }, [])

  return (
    <div className={classes.root}>
      <NavBar title="To Do's Before 'I Do'" />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth='lg' className={classes.container}>
          <Grid container>
            <Grid item xs={12} sm={6} lg={6}>
              <FormControl
                variant='outlined'
                style={{ width: '150px', marginBottom: '20px' }}
              >
                <InputLabel id='category'>Filter By</InputLabel>
                <Select
                  labelId='demo-simple-select-outlined-label'
                  id='demo-simple-select-outlined'
                >
                  <MenuItem value=''></MenuItem>
                  <MenuItem value='groom'>Groom</MenuItem>
                  <MenuItem value='bride'>Bride</MenuItem>
                  <MenuItem value='both'>Bride & Groom</MenuItem>
                  <MenuItem value='completed'>Completed</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} lg={6} style={{ textAlign: 'right' }}>
              <Link
                to='/to-do/create'
                style={{ textDecoration: 'none', color: '#fff' }}
              >
                <Button
                  type='submit'
                  variant='contained'
                  color='primary'
                  className={classes.submit}
                >
                  Add To Do
                </Button>
              </Link>
            </Grid>
          </Grid>

          {/* Map card here */}
          <Grid container spacing={2}>
            {todoData.length === 0 ? (
              <h6>There are no items at the moment.</h6>
            ) : (
              todoData.map((item, pos) => {
                return (
                  <TodoItem
                    key={pos}
                    role={`Team ${item.role.toUpperCase()}`}
                    task={item.task}
                    _id={item._id}
                    refreshItems={getAllTodoData}
                  />
                )
              })
            )}
          </Grid>
        </Container>
      </main>
    </div>
  )
}
