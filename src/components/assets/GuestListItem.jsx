import React from "react";
import { makeStyles } from "@material-ui/core/styles";


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

export default function GuestListBox(props) {

const classes = useStyles();


return (
      <div className={classes.teamtitle}>
        <h2 style={{ marginRight: "150px", marginBottom:'20px', fontWeight:'700' }}>Team {props.title}</h2>
        <h2 style={{ fontWeight:'700' }}>{props.teampax} Pax</h2>
      </div>
)
}


