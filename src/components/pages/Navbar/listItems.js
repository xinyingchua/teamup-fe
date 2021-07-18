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

export const mainListItems = (
  <div >
    <ListItem button>
      <ListItemIcon style={{ color: 'white' }}>
        <DashboardIcon />
      </ListItemIcon >
      <ListItemText primary="Home" />
    </ListItem>

    <ListItem button>
      <ListItemIcon style={{ color: 'white' }}>
        <MonetizationOnIcon />
      </ListItemIcon>
      <ListItemText primary="Budget Planning" />
    </ListItem>

    <ListItem button>
      <ListItemIcon style={{ color: 'white' }}>
        <FormatListNumberedIcon />
      </ListItemIcon>
      <ListItemText primary="To Do" />
    </ListItem>

    <ListItem button>
      <ListItemIcon style={{ color: 'white' }}>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Guestlists" />
    </ListItem>

    <ListItem button>
      <ListItemIcon style={{ color: 'white' }}>
        <DraftsIcon />
      </ListItemIcon>
      <ListItemText primary="Events Scheduling" />
    </ListItem>

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
      <ListItemIcon style={{ color: 'white' }}>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Log Out" />
    </ListItem>
  </div>
);