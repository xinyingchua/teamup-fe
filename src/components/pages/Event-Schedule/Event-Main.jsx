import React from 'react';
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

export default function EventMain() {
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };


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

            <List className={classes.ulroot}>
            {[0, 1, 2, 3].map((value) => {
            const labelId = `checkbox-list-label-${value}`;
    
            /* Return Event by line by map */
            return (
              <Grid container >
                <Grid item xs={12} md={11} lg={12}
                >
                <Paper 
                className={fixedHeightPaper}>
                <ListItem key={value} role={undefined} 
                dense button 
                onClick={handleToggle(value)}>
                
                {/* Date */}
                <Grid>
                <ListItemText 
                edge="start" 
                disableTypography
                style={{fontWeight:"bold", fontSize:"28px"}}
                id={labelId} primary={`16 May ${value + 1}`} />
                </Grid>

              {/* Event Details */}
              <Grid xs={12} md={11} lg={12}
              style={{textAlign:"center", marginLeft: "80px"}}

               edge="start">
              <ListItem>
              <ListItemText 
                disableTypography
                style={{fontWeight:"bold", fontSize:"30px"}}
                id={labelId} primary={`Hotel Viewing ${value + 1}`} />
              </ListItem>

              <ListItem>
              <QueryBuilderIcon
              className={classes.icon}/>
               <ListItemText 
                style={{flexDirection:"column"}}
                id={labelId} primary={`6pm - 7pm ${value + 1}`} />
              </ListItem>

              <ListItem>
              <LocationOnIcon
              className={classes.icon}/>
                <ListItemText 
                style={{flexDirection:"column"}}
                id={labelId} primary={`Raffles Hotel ${value + 1}`} />
                </ListItem>
              </Grid>
              


                <Grid
                edge="end"
                style={{display:"flex", flexDirection:"row"}}
                >
                <DeleteIcon className={classes.icon}/>
                </Grid>

                <ListItemSecondaryAction>
                <Link to="/events/edit" style={{ textDecoration: "none", color:'#fff' }}>
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
            })}
            </List>

          
        </Container>
      </main>
    </div>
  );
}