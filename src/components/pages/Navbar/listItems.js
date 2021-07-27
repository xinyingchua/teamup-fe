import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import DraftsIcon from '@material-ui/icons/Drafts';
import PaletteIcon from '@material-ui/icons/Palette';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ToggleOnIcon from '@material-ui/icons/ToggleOn';
import { Link } from "react-router-dom"


// const [cookies, removeCookie] = useCookies(['auth_token'])
// const handleRemoveCookie = async(e) => {
//   removeCookie('auth_token');
//   console.log("hello")

// } 
  

export const mainListItems = (
  <div >
    <Link to="/dashboard" style={{ textDecoration: "none", color:'#fff' }}>
    <ListItem button  >
      <ListItemIcon style={{ color: 'white' }}>
        <DashboardIcon />
      </ListItemIcon >
      <ListItemText primary="Dashboard" />
    </ListItem>
    </Link>

    <Link to="/budget" style={{ textDecoration: "none", color:'#fff' }} >
    <ListItem button>
      <ListItemIcon style={{ color: 'white' }}>
        <MonetizationOnIcon />
      </ListItemIcon>
      <ListItemText primary="Budget Planning" />
    </ListItem>
    </Link>


    <Link to="/to-do" style={{ textDecoration: "none", color:'#fff' }} >
    <ListItem button>
      <ListItemIcon style={{ color: 'white' }}>
        <FormatListNumberedIcon />
      </ListItemIcon>
      <ListItemText primary="To Do" />
    </ListItem>
    </Link>

    <Link to="/guest-lists" style={{ textDecoration: "none", color:'#fff' }} >
    <ListItem button>
      <ListItemIcon style={{ color: 'white' }}>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Guestlists" />
    </ListItem>
    </Link>

    <Link to="/events" style={{ textDecoration: "none", color:'#fff' }} >
    <ListItem button>
      <ListItemIcon style={{ color: 'white' }}>
        <DraftsIcon />
      </ListItemIcon>
      <ListItemText primary="Events Scheduling" />
    </ListItem>
    </Link>

    <ListItem button>
      <ListItemIcon style={{ color: 'white' }}>
        <PaletteIcon  />
      </ListItemIcon>
      <ListItemText primary="Design E-invites" />
    </ListItem>
    
    
  </div>
);

export const secondaryListItems = (

  <div>
    <ListItem button>
      <ListItemIcon style={{ color: 'white' }}>
        <ToggleOnIcon />
      </ListItemIcon>
      <ListItemText primary="Dark Mode" />
    </ListItem>
   
    <ListItem button>
    {/* <ListItem button onClick={(e) => { handleRemoveCookie(e)}}> */}
      <ListItemIcon style={{ color: 'white' }}>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText 
      primary="Log Out" />
    </ListItem>
  </div>
);