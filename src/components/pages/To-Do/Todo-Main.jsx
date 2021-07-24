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
import { CookiesProvider } from 'react-cookie';
import { Link } from "react-router-dom"
import axios from 'axios'
import TodoItem from '../../assets/TodoItem';


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
  const [todoData, setTodoData] = React.useState([])
  const url = 'https://teamup-be.herokuapp.com/api/v1/users/todos'


  const getAllTodoData = () => {
    axios.get(`${url}`, {
      headers: { 'auth_token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1Y2FzZXMuc2VldEBnbWFpbC5jb20iLCJpYXQiOjE2MjcxMDYwMTgsImV4cCI6MTYyNzE5MjQxOH0.5Cc7IWlbge8_Pppp_UMx7NrARy1oJhIrHXW_h2G7BdA'
    }})
    .then((response) => {
      const allData = response.data
      console.log(allData)
      console.log(response.data)
      setTodoData(response.data)

    })
    .catch((error => 
      console.log("error")))
  }

  

  useEffect(() => {
    getAllTodoData();
  }, [])

  

  return (
    <CookiesProvider>
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

            {todoData.map((item) => (
              <TodoItem role= {item.role} task={item.task} _id={item._id} />
            ))}
          </Grid>
        </Container>
      </main>
    </div>
    </CookiesProvider>
  );
}
