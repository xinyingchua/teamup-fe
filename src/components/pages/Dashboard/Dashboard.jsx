import React from 'react'
import clsx from 'clsx'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Budgetplanning from './Budgetplanning'
import Dday from './Dday'
import Guestlists from './Guestlists'
import UpcomingEvents from './UpcomingEvents'
import Todo from './Todo'
import NavBar from '../Navbar/NavBar'
import axios from 'axios'
import { withStyles } from '@material-ui/core/styles'
import { withCookies } from 'react-cookie'
import { Redirect } from 'react-router-dom'

const styles = (theme) => ({
  root: {
    display: 'flex',
    background: '#F9F8FF',
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
    textAlign: 'center',
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
})

// export default function Dashboard() {
class Dashboard extends React.Component {
  constructor(props) {
    super(props)

    const { cookies } = props

    this.state = {
      user: cookies.get('auth_token'),
      apiResponse: null,
      daysLeft: '',
      budget: '',
      currentBudget: '',
      attending: '',
      notAttending: '',
      pending: '',
      total: '',
    }
  }

  async componentDidMount(response) {
    try {
      response = await axios({
        method: 'get',
        url: 'https://teamup-be.herokuapp.com/api/v1/users/dashboard',
        headers: {
          auth_token: this.state.user,
        },
      })
      this.setState({
        apiResponse: response.data,
      })
    } catch (err) {
      // Handle Error Here
      console.error(err)
    }

    if (!response) {
      console.log('waiting for response')
      return
    }
    this.setState({
      daysLeft: this.state.apiResponse.calendar.daysLeft,
      budget: `0` || this.state.apiResponse.budget.initialBudget.toFixed(2),
      currentBudget:
        `0` || this.state.apiResponse.budget.currentBudget.toFixed(2),
      attending: this.state.apiResponse.guests.totalAttending,
      notAttending: this.state.apiResponse.guests.totalUnavailable,
      pending: this.state.apiResponse.guests.totalPending,
      total: this.state.apiResponse.guests.totalGuests,
      totalTasks: this.state.apiResponse.todos.total,
      completedTasks: this.state.apiResponse.todos.completed,
    })
  }

  render() {
    if (!this.state.user) {
      return <Redirect to='/login' />
    }
    const { classes } = this.props

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

    return (
      <div className={classes.root}>
        <NavBar title='Dashboard' />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth='lg' className={classes.container}>
            <Grid container spacing={3}>
              {/* D-day */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaper}>
                  <Dday dDay={this.state.daysLeft} />
                </Paper>
              </Grid>

              {/* Budget-Planning */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper className={fixedHeightPaper}>
                  <Budgetplanning
                    budget={`$${this.state.budget}`}
                    currentBudget={`$${this.state.currentBudget}`}
                  />
                </Paper>
              </Grid>

              {/* Guestlists */}
              <Grid item xs={12} md={6} lg={6}>
                <Paper className={fixedHeightPaper}>
                  <Guestlists
                    attending={this.state.attending}
                    notAttending={this.state.notAttending}
                    pending={this.state.pending}
                    total={this.state.total}
                  />
                </Paper>
              </Grid>

              {/* To Dos  */}
              <Grid item xs={12} md={6} lg={6}>
                <Paper className={fixedHeightPaper}>
                  <Todo
                    totalTasks={this.state.totalTasks}
                    completed={this.state.completedTasks}
                  />
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
    )
  }
}

export default withCookies(withStyles(styles)(Dashboard))
