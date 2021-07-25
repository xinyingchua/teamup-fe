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
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useCookies } from 'react-cookie'

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
  delete: {
    margin: theme.spacing(3, 0, 2, 1),
    background: '#F2BFD8',
    width: '200px',
    color: 'black',
  },
}))

export default function TodoForm(props) {
  const classes = useStyles()
  // const url =
  //   "https://teamup-be.herokuapp.com/api/v1/users/todos/sadfagadhafhf";

  // use useState hooks
  const [task, setTask] = React.useState('')
  const [role, setRole] = React.useState('')
  const [status, setStatus] = React.useState(false)
  const [cookies] = useCookies(['auth_token'])
  let history = useHistory()

  useEffect(() => {
    // GET - OK //
    const getOneToDoData = () => {
      axios
        .get(
          'https://teamup-be.herokuapp.com/api/v1/users/todos/' +
            props.location.state._id,
          { headers: cookies }
        )
        .then((response) => {
          const allData = response.data
          const todo = allData[0]
          setTask(todo.task)
          setRole(todo.role)
          setStatus(todo.status)
        })
        .catch((error) => console.log(error))
    }

    if (props.location.state && props.location.state._id) {
      getOneToDoData()
    }
  }, [])

  // Create TO DO //
  let createToDoData = async () => {
    await axios.post(
      'https://teamup-be.herokuapp.com/api/v1/users/todos/create',
      {
        task: task,
        status: '' + status,
        role: role,
      },
      {
        headers: cookies,
      }
    )
  }

  // Patch TO DO //
  const updateToDoData = () => {
    axios
      .patch(
        'https://teamup-be.herokuapp.com/api/v1/users/todos/' +
          props.location.state._id +
          '/update',
        {
          task: task,
          status: '' + status,
          role: role,
        },
        {
          headers: cookies,
        }
      )
      .then((response) => {
        return
      })
      .catch((error) => console.log('error'))
  }

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
      .catch((error) => console.log('error'))
  }

  // submit form function
  const handleFormSummit = async (e) => {
    e.preventDefault()
    history.push('/to-do')
  }

  return (
    <div className={classes.root}>
      <NavBar
        title={
          props.location.state && props.location.state._id
            ? "Edit To Do's"
            : "Create To Do's"
        }
      />
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
                fullWidth
                id='taskInput'
                label='Task'
                value={task}
                name='task'
                onChange={(e) => setTask(e.target.value)}
                autoFocus
              />

              <FormControl
                variant='outlined'
                style={{ width: '70%' }}
                margin='normal'
                textalign='left'
              >
                <InputLabel>Who is responsible for this task?</InputLabel>
                <Select value={role} onChange={(e) => setRole(e.target.value)}>
                  <MenuItem value='bride'>Bride</MenuItem>
                  <MenuItem value='groom'>Groom</MenuItem>
                  <MenuItem value='bridegroom'>Groom & Bride</MenuItem>
                </Select>
              </FormControl>

              <FormControlLabel
                style={{ margin: '0' }}
                control={
                  <Checkbox
                    name='checkedG'
                    color='secondary'
                    checked={status}
                    onChange={(e) => setStatus(e.target.checked)}
                  />
                }
                label='Completed'
              />

              {props.location.state && props.location.state._id ? (
                <div>
                  <Button
                    type='submit'
                    variant='contained'
                    className={classes.submit}
                    onClick={updateToDoData}
                  >
                    Edit
                  </Button>

                  <Button
                    type='submit'
                    variant='contained'
                    className={classes.delete}
                    onClick={deleteToDoData}
                  >
                    Delete
                  </Button>
                </div>
              ) : (
                <Button
                  type='submit'
                  // fullWidth
                  variant='contained'
                  color='primary'
                  className={classes.submit}
                  onClick={createToDoData}
                >
                  Create to do
                </Button>
              )}
            </form>
          </Box>
        </Container>
      </main>
    </div>
  )
}
