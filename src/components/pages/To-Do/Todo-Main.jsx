import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import NavBar from "../Navbar/NavBar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import EditIcon from "@material-ui/icons/Edit";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from "react-router-dom"
import axios from 'axios'


const todo = [
  {
    role: "Groom",
    todo: "Join a DIY inspiration group",
  },
  {
    role: "Groom",
    todo: "Settle Guestlist",
  },
  {
    role: "Bride",
    todo: "Prepare Photoshoot",
  },
  {
    role: "Groom",
    todo: "Meet Hotel",
  },
  {
    role: "Groom",
    todo: "Task 4",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    background: "#F9F8FF",
  },

  rootcard: {
    height: 300,
    width: 300,
    marginRight: theme.spacing(0),
    padding: theme.spacing(2),
    justifyContent: 'center'

  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
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
}));

export default function TodoMain() {
  const classes = useStyles();

  // use useState hooks
  const [status, setStatus] = React.useState('')
  const [id, setId] = React.useState('')
  const [task, setTask] = React.useState('')
  const [role, setRole] = React.useState('')
  const [coupleId, setCoupleId] = React.useState('')
  const [createdAt, setCreatedAt] = React.useState('')
  const [updatedAt, setupdatedAt] = React.useState('')
  const [v, setV] = React.useState('')

  let [fetchedData, setFetchedData] = React.useState('')
  
  // let [fetchedData, setFetchedData] = React.useState('')

  // useEffect(() => {
  //   const headers = {
  //     'auth_token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1Y2FzZXMuc2VldEBnbWFpbC5jb20iLCJpYXQiOjE2MjY5NjcxMzYsImV4cCI6MTYyNzA1MzUzNn0.DMY1A_336WZsnC4iu6x7rLLx-1XQwQ2aMQcP59oSlpc',
  // };
  //   // GET request using axios inside useEffect React hook
  //   .then(data => {
  //     let data = axios.get('https://teamup-be.herokuapp.com/api/v1/users/todos',{ headers })

  //  })
  //   .then ((response) => {
  //     let data = axios.get('https://teamup-be.herokuapp.com/api/v1/users/todos',{ headers })
  //   // .then(res => setFetchedData(res.data));
  //   console.log(data[0])
  //   }
    
        

// empty dependency array means this effect will only run once (like componentDidMount in classes)
// }, []);

  // useEffect(() => {

  //   // use api callback
  //   let fetchData = async () => {
  //     console.log('hello world2')
  //     const response = await axios({
  //       method: 'GET',
  //       headers: { 'auth_token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1Y2FzZXMuc2VldEBnbWFpbC5jb20iLCJpYXQiOjE2MjY5NjcxMzYsImV4cCI6MTYyNzA1MzUzNn0.DMY1A_336WZsnC4iu6x7rLLx-1XQwQ2aMQcP59oSlpc' },
  //       url: 'https://teamup-be.herokuapp.com/api/v1/users/todos',
  //       status: status,
  //         _id: id,
  //         task: task,
  //         role: role,
  //         couple_id: coupleId,
  //         createAt: createdAt,
  //         updatedAt: updatedAt,
  //         __v: v,

  //     })
  //     console.log(response.data)
  //     setFetchedData(response)
   
  // }},[]) 


  return (
    <div className={classes.root}>
  <NavBar title = "To Do's Before 'I Do'" />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>

            <Grid container>
                <Grid item xs={12} sm={6} lg={6}>
                <FormControl variant="outlined" style={{width:'150px', marginBottom:'20px'}} >
                    <InputLabel id="category">Filter By</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        
                    >
                        <MenuItem value="">
                        </MenuItem>
                        <MenuItem value="groom">Groom</MenuItem>
                        <MenuItem value="bride">Bride</MenuItem>
                        <MenuItem value="both">Both</MenuItem>
                        <MenuItem value="completed">Completed</MenuItem>

                    </Select>
                    </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={6} lg={6} style={{textAlign:'right'}}>
                    <Link to="/to-do/create" style={{ textDecoration: "none", color:'#fff' }}>
                    <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    >
                    Add To Do
                    </Button>  
                    </Link> 
                    </Grid>
            </Grid>


        {/* Map card here */}
          <Grid container spacing={4}>

            {todo.map((todo) => (
              <Grid item key={todo} xs={12} sm={4} lg={3}>
                <Card className={classes.rootcard} >
                  <CardContent>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      {todo.role}
                    </Typography>
                    <Typography variant="h5" component="h2">
                      {todo.todo}
                    </Typography>
                    <Grid container className={classes.button}>
                      <Grid item xs={6}>
                        <CardActions>
                        <Link to="/to-do/edit" style={{ textDecoration: "none", color:'#fff' }}>
                          <Button
                            variant="contained"
                            style={{ color: "#7865E5" }}
                            className={classes.button}
                            startIcon={<EditIcon />}
                          >
                            Edit
                          </Button>
                          </Link>
                        </CardActions>
                      </Grid>
                      <Grid item xs={6} >
                        <CardActions>
                          <Button
                            variant="contained"
                            justify="right" 
                            color="secondary"
                            className={classes.button}
                            startIcon={<CheckCircleOutlineIcon />}
                          >
                            Done
                          </Button>
                        </CardActions>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </div>
  );
}
