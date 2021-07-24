import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import NavBar from '../Navbar/NavBar';
import { CookiesProvider } from 'react-cookie';
import axios from 'axios'
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    background: '#F9F8FF'
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
  color: 'black'
},

}));

export default function ToDoCreate() {
  const classes = useStyles();

  const history = useHistory();
    

  // use useState hooks
  const [task, setTask] = React.useState('')
  const [status, setStatus] = React.useState('in progress')
  const [role, setRole] = React.useState('')
  let [fetchedData, setFetchedData] = React.useState('')

  // function toggle() {
  //   setStatus(!status);
  // }

  // use api callback
  let fetchData = async () => {
    const response = await axios({
      method: 'post',
      headers: { 'auth_token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1Y2FzZXMuc2VldEBnbWFpbC5jb20iLCJpYXQiOjE2MjY5NjcxMzYsImV4cCI6MTYyNzA1MzUzNn0.DMY1A_336WZsnC4iu6x7rLLx-1XQwQ2aMQcP59oSlpc' },
      url: 'https://teamup-be.herokuapp.com/api/v1/users/todos/create',
      data: {
        task: task,
        status: 'in progress',
        role: role,
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
    //after submit form redirect user
    history.push('/to-do');
    console.log(
      `form submitted with values: ${task}, ${status}, ${role} `
    )
  }


  return (
    <CookiesProvider>
    <div className={classes.root}>
    <NavBar title = "Create New To Do's" />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>

        <Box m={10}>
        <form onSubmit={(e) => {
              handleFormSummit(e)
            }}>
        <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="taskInput"
              label="Task"
              name="task"
              onChange={(e) => setTask(e.target.value)}
              autoFocus
            />

            <FormControl 
            variant="outlined" 
            // fullWidth
            style={{width:"70%"}}
            margin="normal"
            textalign= "left">
                <InputLabel id="demo-simple-select-outlined-label">Who is responsible for this task?</InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    onChange={(e) => setRole(e.target.value)}
                    // onClick={toggle}
                  >
                    <MenuItem value="">
                    </MenuItem>
                    <MenuItem value="bride">Bride</MenuItem>
                    <MenuItem value="groom">Groom</MenuItem>
                    <MenuItem value="bridegroom">Groom & Bride</MenuItem>
                  </Select>
            </FormControl>


            <FormControlLabel
            style={{margin:"0"}}
              control={
                <Checkbox
                  onChange={(e) => setStatus(e.target.checked)}
                  name="checkedG"
                  color="secondary"
                />
              }
              label="Completed"
            />

            <Button
              type="submit"
              // fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Create to do
            </Button>
            </form>

         </Box>
                
        </Container>
      </main>
    </div>
    </CookiesProvider>
  );
}