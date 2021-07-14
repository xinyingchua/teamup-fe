import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

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
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Budget Planning" />
    </ListItem>

    <ListItem button>
      <ListItemIcon style={{ color: 'white' }}>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="To Do" />
    </ListItem>

    <ListItem button>
      <ListItemIcon style={{ color: 'white' }}>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Guestlists" />
    </ListItem>

    <ListItem button>
      <ListItemIcon style={{ color: 'white' }}>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Events Scheduling" />
    </ListItem>

    <ListItem button>
      <ListItemIcon style={{ color: 'white' }}>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Design E-invites" />
    </ListItem>
    
    
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button>
      <ListItemIcon style={{ color: 'white' }}>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Dark Mode" />
    </ListItem>
   
    <ListItem button>
      <ListItemIcon style={{ color: 'white' }}>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Log Out" />
    </ListItem>
  </div>
);