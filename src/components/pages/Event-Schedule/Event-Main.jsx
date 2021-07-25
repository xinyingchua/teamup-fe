import React, { useEffect, useState } from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import NavBar from '../Navbar/NavBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Moment from 'react-moment';
import axios from 'axios'
import { Link } from "react-router-dom"
import { useCookies } from 'react-cookie';
import { useHistory } from "react-router-dom";
import EventByLine from '../../assets/Event-Schedule'



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

export default function EventMain() {
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  


  // use useState hooks
  const [cookies] = useCookies(['auth_token'])
  const [eventData, getEventData] = React.useState([])
  const url = 'https://teamup-be.herokuapp.com/api/v1/users/events'

  const getAllEventData = () => {
    axios
      .get(
        `${url}`, 
        {headers: cookies,
      })
      .then((response) => {
        const getData = response.data
        console.log(response.data)
        getEventData(getData)
      })
      .catch((error) => console.log('error'))
  }

  useEffect(() => {
    getAllEventData()
  }, [])

console.log(eventData)

  return (
    
    <div className={classes.root}>
     <NavBar title = "Event Scheduling" />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>

           {/* Estimated Wedding Cost */}
            <Grid item xs={12} md={4} lg={3}>
              <Box>
              <Typography 
              color="secondary"
              className={classes.dateTypography}>
               <Moment titleFormat="D MMM YYYY" withTitle>
            </Moment>
            </Typography>
              </Box>
            </Grid>

          </Grid>

          <Grid item xs={8} md={11} lg={12}
          style={{textAlign : "right", paddingTop: "10px"}}>
          <Link to="/events/create" style={{ textDecoration: "none", color:'#fff' }}>
          <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
             Add Event
            </Button>
            </Link>
            </Grid>

            {console.log(eventData)}
            <List className={classes.ulroot}>
            {eventData.map((item) => {
              {console.log(item.from)}
            /* Return Event by line by map */
            return(
            <EventByLine from={item.from} description={item.description} location={item.location.name} _id={item._id} />
            )
            })}
            </List>

          
        </Container>
      </main>
    </div>
  );
}