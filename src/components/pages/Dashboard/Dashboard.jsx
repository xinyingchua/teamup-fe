import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Budgetplanning from './Budgetplanning';
import Dday from './Dday';
import Guestlists from './Guestlists';
import UpcomingEvents from './UpcomingEvents';
import Todo from './Todo';
import NavBar from '../Navbar/NavBar';


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
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },


}));

export default function Dashboard() {
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <NavBar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>

            {/* D-day */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Dday />
              </Paper>
            </Grid>

            {/* Budget-Planning */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                    <Budgetplanning/>
              </Paper>
            </Grid>

            {/* Guestlists */}
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={fixedHeightPaper}>
                <Guestlists />
              </Paper>
            </Grid>

            {/* To Dos  */}
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={fixedHeightPaper}>
                <Todo />
              </Paper>
            </Grid>

            {/* Upcoming Events 1*/}
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <UpcomingEvents />
              </Paper>
            </Grid>
             {/* Upcoming Events 2*/}
            <Grid item xs={3}>
              <Paper className={classes.paper}>
              <UpcomingEvents />
              </Paper>
            </Grid>
            {/* Upcoming Events 3*/}
            <Grid item xs={3}>
              <Paper className={classes.paper}>
              <UpcomingEvents />
              </Paper>
            </Grid>
            {/* Upcoming Events 4*/}
            <Grid item xs={3}>
              <Paper className={classes.paper}>
              <UpcomingEvents />
              </Paper>
            </Grid>

          </Grid>
          
        </Container>
      </main>
    </div>
  );
}