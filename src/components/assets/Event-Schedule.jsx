import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Moment from 'react-moment';
import { Link } from "react-router-dom"



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
    textAlign: 'center'
  },
  paper: {
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    margin: "8px"
  },
  fixedHeight: {
    height: 150,
  },
  dateTypography: {
    flex: 1,
    fontSize: 40,
    fontWeight: 'bold',
  },
  listItem: {
    flex: 1,
    fontSize: 40,
    fontWeight: 'bold',
  },
  ulroot: {
    width: '100%',
    paddingBottom: theme.spacing(5),
  },
  ulheader: {
    width: '100%',
    paddingTop: theme.spacing(4),
    textAlign: 'left',
  },
  icon:  {
    color: '#7865E5',
    paddingBottom: theme.spacing(0),
  },
  submit: {
    background: '#7865E5',
    width: '200px',
    color: 'white'
  },

}));

export default function EventByLine(props) {
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


           /* Return Event by line by map */
            return (
              <Grid container >
                <Grid item xs={12} md={11} lg={12}
                >
                <Paper 
                className={fixedHeightPaper}>
                <ListItem key={props} role={undefined} 
                dense button 
                >
                
                {/* Date */}
                <Grid>
                <ListItemText 
                edge="start" 
                disableTypography
                style={{fontWeight:"bold", fontSize:"28px"}}
                // id={labelId} 
                primary={props.from} />
                </Grid>

                {/* Event Details */}
                <Grid xs={12} md={11} lg={12}
                style={{textAlign:"center", marginLeft: "80px"}}

                edge="start">
                <ListItem>
                <ListItemText 
                  disableTypography
                  style={{fontWeight:"bold", fontSize:"30px"}}
                  // id={labelId} 
                  primary={props.description} />
                </ListItem>

                <ListItem>
                <QueryBuilderIcon
                className={classes.icon}/>
                <ListItemText 
                  style={{flexDirection:"column"}}
                  // id={labelId} 
                  primary={props.from} />
                </ListItem>

                <ListItem>
                <LocationOnIcon
                className={classes.icon}/>
                  <ListItemText 
                  style={{flexDirection:"column"}}
                  // id={labelId}
                  primary={props.location} />
                  </ListItem>
                </Grid>
                


                  <Grid
                  edge="end"
                  style={{display:"flex", flexDirection:"row"}}
                  >
                  <DeleteIcon className={classes.icon}/>
                  </Grid>

                  <ListItemSecondaryAction>
                  <Link to= {{pathname: "/events/edit" ,state: { _id: props._id }}}
                  style={{ textDecoration: "none", color:'#fff' }}>
                      <IconButton edge="end" aria-label="edit">
                      <EditIcon
                      className={classes.icon} />
                      </IconButton>
                      </Link>
                  </ListItemSecondaryAction>
                  </ListItem>
                  </Paper>
                  </Grid>
                </Grid>
             
          );

 }