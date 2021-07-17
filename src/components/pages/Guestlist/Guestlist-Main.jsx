import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import NavBar from "../NavBar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Title from "../Title";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { Typography } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';



const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    background: "#F9F8FF",
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(3),
    textAlign: "center",
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "#AAD1CA",
    width: "200px",
    color: "black",
  },
  fixedHeight: {
    height: 500,
  },


  box: {
      margin: theme.spacing(0 , 0)
  },

  filter:{
      justifyContent: 'flex-start',
  },
  purplebox:{
    height: '100px',
    width: '100px',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e0dbff',
    textAlign: 'center',
    alignContent:'center'
    
  },

}));

export default function NewBudget() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


  return (
    <div className={classes.root}>
      <NavBar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <div item={6} style={{margin: '100px'}}>
          <Grid container spacing={5}>
            {/* <Grid item item xs={12}>
              <Title textAlign="center">Guestlists Overview</Title>
            </Grid> */}

            <Grid item xs={12} sm={3} md={6} lg={3} >
                <Box className={classes.purplebox}>
                  <h1>52</h1>
                </Box>
                <h6 style={{marginTop:'20px', textAlign:'center'}}>Attending</h6>
            </Grid>

            <Grid item xs={12} sm={3} md={6} lg={3}>
                <Box className={classes.purplebox}>
                  <h1>61</h1>
                </Box>
                <h6 style={{marginTop:'20px'}}>Not Attending</h6>
            </Grid>

            <Grid item xs={12} sm={3} md={6} lg={3} >
                <Box className={classes.purplebox}>
                  <h1>35</h1>
                </Box>
                <h6 style={{marginTop:'20px'}}>Pending</h6>
            </Grid>

            <Grid item xs={12} sm={3} md={6} lg={3} >
                <Box className={classes.purplebox}>
                  <h1>22</h1>
                </Box>
                <h6 style={{marginTop:'20px'}}>Total</h6>
            </Grid>

        
          </Grid>
          </div>


            {/* Filter */}
        <div style={{margin:'50px'}}>
          <Grid container style={{marginTop:'50px'}}>
                <Grid item xs={12} sm={6} lg={6} style={{textAlign:'left'}}>
                <FormControl variant="outlined" style={{width:'200px'}} >
                    <InputLabel id="category">Filter By</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        
                    >
                        <MenuItem value="">
                        </MenuItem>
                        <MenuItem value="pending">Pending</MenuItem>
                        <MenuItem value="attending">Attending</MenuItem>
                        <MenuItem value="notattending">Not Attending</MenuItem>
                    </Select>
                    </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={6} lg={6} style={{textAlign:'right'}}>
                    <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    >
                    Add Event
                    </Button>   
                    </Grid>
            </Grid>

            <Grid container spacing={3}>


            {/* Guestlists */}
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={fixedHeightPaper}>
              <h2>test</h2>
              </Paper>
            </Grid>

            {/* To Dos  */}
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={fixedHeightPaper}>
              <h2>test</h2>
              </Paper>
            </Grid>

           
         

          </Grid>
          </div>
          



        </Container>
      </main>
    </div>
  );
}
