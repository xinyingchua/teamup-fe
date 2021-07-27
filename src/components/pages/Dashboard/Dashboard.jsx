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
import Pagination from '@material-ui/lab/Pagination'

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
      // response[0].data: null,
      daysLeft: '',
      budget: '',
      currentBudget: '',
      attending: '',
      notAttending: '',
      pending: '',
      total: '',
      allEventData: [],
    }
  }



  async componentDidMount() {
    let dashboardURL = 'https://teamup-be.herokuapp.com/api/v1/users/dashboard'
    let eventURL = 'https://teamup-be.herokuapp.com/api/v1/users/events/'

    const promise1 = await axios.get(dashboardURL, {
      headers: { auth_token: this.state.user },
    })
    const promise2 = await axios.get(eventURL, {
      headers: { auth_token: this.state.user },
    })

    Promise.all([promise1, promise2])
      .then((response) => {
        this.setState({
          daysLeft: `0` || response[0].data.calendar.daysLeft,
          budget: `0` || response[0].data.budget.initialBudget.toFixed(2),
          currentBudget:
            `0` || response[0].data.budget.currentBudget.toFixed(2),
          attending: `0` || response[0].data.guests.totalAttending,
          notAttending: `0` || response[0].data.guests.totalUnavailable,
          pending: `0` || response[0].data.guests.totalPending,
          total: `0` || response[0].data.guests.totalGuests,
          totalTasks: `0` || response[0].data.todos.total,
          completedTasks: `0` || response[0].data.todos.completed,
          numberOfEvents: `0` || response[0].data.events.total,
          allEventData: response[1].data,
        })
      })
      .catch((err) => {
        return err
      })

      console.log(user)
    // const response = await axios({
    //   method: 'get',
    //   url: 'https://teamup-be.herokuapp.com/api/v1/users/dashboard',
    //   headers: {
    //     auth_token: this.state.user,
    //   },
    // })

    //   this.setState({
    //     response[0].data: response.data,
    //   })
    // } catch (err) {
    //   // Handle Error Here
    //   console.error(err)
    // }

    // this.setState({
    //   daysLeft: this.state.response[0].data.calendar.daysLeft,
    //   budget: this.state.response[0].data.budget.initialBudget.toFixed(2),
    //   currentBudget: this.state.response[0].data.budget.currentBudget.toFixed(2),
    //   attending: this.state.response[0].data.guests.totalAttending,
    //   notAttending: this.state.response[0].data.guests.totalUnavailable,
    //   pending: this.state.response[0].data.guests.totalPending,
    //   total: this.state.response[0].data.guests.totalGuests,
    //   totalTasks: this.state.response[0].data.todos.total,
    //   completedTasks: this.state.response[0].data.todos.completed,
    //   numberOfEvents: this.state.response[0].data.events.total,

    // },
    // )
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
              <Grid container spacing={2}>
                {this.state.allEventData.length === 0 ? (
                  <h6>There are no items at the moment.</h6>
                ) : (
                  this.state.allEventData.map((item, pos) => {
                    return (
                      <Grid item xs={3}>
                        <Paper className={classes.paper}>
                          <UpcomingEvents
                            eventName={item.event_name}
                            eventDate={item.from}
                            key={pos}
                          />
                        </Paper>
                      </Grid>
                    )
                  })
                )}
                <Grid item xs={12}>
                  <Pagination
                    count={this.state.numberOfEvents}
                    color='primary'
                  />
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </main>
      </div>
    )
  }
}

export default withCookies(withStyles(styles)(Dashboard))
