import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";



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
    margin: theme.spacing(0, 0),
  },

  filter: {
    justifyContent: "flex-start",
  },
  purplebox: {
    height: "100px",
    width: "100px",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e0dbff",
    color:'#7865E5'
  },

  outerbox: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    color:'#7865E5'
  },

  teamtitle: {
    display: "flex",
    flexDirection: "row",
    paddingTop: "30px",
    alignItems: "center",
    justifyContent: "center",
    
  },

  paper2:{
    height: '70px',
  }
}));

export default function GuestSummary(props) {
  const classes = useStyles();

  return (

    <div className={classes.outerbox}>
    <Grid item key ={props} xs={12} sm={3} md={3} lg={3}>
      <Box
        className={classes.purplebox}
        m={3}
        style={{ margin: "0,auto" }}
      >
        <h1>{props.attending}</h1>
      </Box>
      <h6 style={{ marginTop: "20px", textAlign: "center" }}>
        Attending
      </h6>
    </Grid>

    <Grid item xs={12} sm={3} md={3} lg={3}>
      <Box
        className={classes.purplebox}
        m={3}
        style={{ margin: "0, auto" }}
      >
        <h1>{props.unavailable}</h1>
      </Box>
      <h6 style={{ marginTop: "20px", textAlign: "center" }}>
        Not Attending
      </h6>
    </Grid>

    <Grid item xs={12} sm={3} md={3} lg={3}>
      <Box
        className={classes.purplebox}
        m={3}
        style={{ margin: "0, auto" }}
      >
        <h1>{props.pending}</h1>
      </Box>
      <h6 style={{ marginTop: "20px", textAlign: "center" }}>
        Pending
      </h6>
    </Grid>

    <Grid item xs={12} sm={3} md={3} lg={3}>
      <Box
        className={classes.purplebox}
        m={3}
        style={{ margin: "0, auto"}}
    
      >
        <h1>{props.total}</h1>
      </Box>
      <h6 style={{ marginTop: "20px", textAlign: "center" }}>
        Total
      </h6>
    </Grid>
  </div>



    )}

