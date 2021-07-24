import React, { useEffect, useState } from "react";
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
delete: {
  margin: theme.spacing(3, 0, 2,1),
  background: '#F2BFD8',
  width: '200px',
  color: 'black'
},

}));

export default function ToDoEdit(props) {
  const classes = useStyles();
  const url = 'https://teamup-be.herokuapp.com/api/v1/users/todos/sadfagadhafhf'

  // use useState hooks
  const [todoData, setTodoData] = React.useState('')
  const [task, setTask] = React.useState('')
  const [role, setRole] = React.useState('')
  const [status, setStatus] = React.useState('')

  let [fetchedData, setFetchedData] = React.useState('')

  // // use api callback
  // let fetchData = async () => {
  //   const response = await axios({
  //     method: 'patch',
  //     headers: { 'auth_token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1Y2FzZXMuc2VldEBnbWFpbC5jb20iLCJpYXQiOjE2MjcwNTM5MTEsImV4cCI6MTYyNzE0MDMxMX0.rBDxuNROrURb-0DwTNPX7CJYdfzJ9ECHF5YAqSLiOmo' },
  //     url: 'https://teamup-be.herokuapp.com/api/v1/users/todos/sadfagadhafhf',
  //     data: {
  //       task: task,
  //       status: status,
  //       role: role,
  //     },
  //   })
  //   console.log(response.data)
  //   setFetchedData(response)
  // }

  const getAllToDoData = () => {
    axios.get('https://teamup-be.herokuapp.com/api/v1/users/todos/60fbc8eb3f5aee001531f08e', {
      headers: { 'auth_token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1Y2FzZXMuc2VldEBnbWFpbC5jb20iLCJpYXQiOjE2MjcxMDYwMTgsImV4cCI6MTYyNzE5MjQxOH0.5Cc7IWlbge8_Pppp_UMx7NrARy1oJhIrHXW_h2G7BdA'
    },
  })
    .then((response) => {
      const allData = response.data
      const todo = allData[0]
      console.log(allData[0].status)
      setTask(todo.task)
      setRole(todo.role)
      setStatus(todo.status)
    })
    .catch((error => 
      console.log("error")))
  }

  useEffect(() => {
    if(props.location.state && props.location.state._id) {
      getAllToDoData();
    }
 
    console.log(props.location.state)
  }, [])



  // // submit form function
  // const handleFormSummit = async (e) => {
  //   e.preventDefault()
    
  //   fetchData()
  //   //after submit form redirect user
  //   history.push('/to-do');
  //   console.log(
  //     `form submitted with values: ${task}, ${status}, ${role} `
  //   )
  // }

 
  return (
    <CookiesProvider>
    <div className={classes.root}>
   <NavBar title = "Edit To Do's" />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>

        <Box m={10}>
        <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="taskInput"
              label="Task"
              value={task}
              name="task"
              // onChange={todoData.task}
              onChange={(e) => setTask(e.target.value)}
              autoFocus
            />

            <FormControl 
            variant="outlined" 
            // fullWidth
            style={{width:"70%"}}
            margin="normal"
            textAlign= "left">
                <InputLabel >Who is responsible for this task?</InputLabel>
                  <Select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                   
                    <MenuItem value="bride">Bride</MenuItem>
                    <MenuItem value="groom">Groom</MenuItem>
                    <MenuItem value="bridegroom">Groom & Bride</MenuItem>
                  </Select>
            </FormControl>


            <FormControlLabel
            style={{margin:"0"}}
              control={
                <Checkbox
                  // value= {
                  //     todoData.status
                  //               ?(<Checkbox checked={true}></Checkbox>) 
                  //               :(<Checkbox disabled={true}></Checkbox>)
                  //   }
                  name="checkedG"
                  color="secondary"
                  checked={status}
                  onChange={(e) => setStatus(e.target.checked)}
                />
              }
              label="Completed"
            />

            <Button
              type="submit"
              variant="contained"
              className={classes.submit}
            >
              Edit
            </Button>

            <Button
              type="submit"
              variant="contained"
              className={classes.delete}
            >
              Delete
            </Button>

         </Box>
                
        </Container>
      </main>
    </div>
    </CookiesProvider>
  );
}