import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import NavBar from '../Navbar/NavBar'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import List from '@material-ui/core/List'
import GuestListItem from '../../assets/GuestListItem'
import GuestListSummary from '../../assets/GuestListSummary'
import TeamGroomBrideGuestList from './TeamGroomBride-List'
import Paper from '@material-ui/core/Paper'
import clsx from 'clsx'
import { filter } from 'lodash'

const useStyles = makeStyles((theme) => ({
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
    paddingTop: theme.spacing(3),
    textAlign: 'center',
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
    background: '#AAD1CA',
    width: '200px',
    color: 'black',
  },
  fixedHeight: {
    height: 1000,
  },

  box: {
    margin: theme.spacing(0, 0),
  },

  filter: {
    justifyContent: 'flex-start',
  },
  purplebox: {
    height: '100px',
    width: '100px',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e0dbff',
    color: '#7865E5',
  },

  outerbox: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    color: '#7865E5',
  },

  teamtitle: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '30px',
    alignItems: 'center',
    justifyContent: 'center',
  },

  paper2: {
    height: '70px',
  },
}))

export default function GuestList() {
  const classes = useStyles()
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  // use useState hooks
  const [cookies] = useCookies(['auth_token'])
  const [guestSummaryData, getGuestSummaryData] = React.useState('')
  const [guestListData, setGuestListData] = React.useState([])

  // const [tryguest, setTryGuest] = React.useState([])
  const [filterData, setFilteredData] = React.useState([])


  // MAKING MULTIPLE AXIOS CALLS //

  let urls = [
    'https://teamup-be.herokuapp.com/api/v1/users/dashboard',
    'https://teamup-be.herokuapp.com/api/v1/users/guests/',
  ]

  useEffect(() => {
    const getAllGuestData = () => {
      let requests = urls.map((url) => {
        return axios.get(url, {
          headers: cookies,
        })
      })

      Promise.all(requests)
        .then((responses) => {
          const dashboardData = responses[0].data
          const guestListData = responses[1].data
          getGuestSummaryData(dashboardData.guests)
          setGuestListData(guestListData)
          setFilteredData(guestListData)
        })
        .catch((err) => {
          return err
        })
    }

    getAllGuestData()

  }, [])

// Getting Total of Filtered Guest Data
  function sumOfBrideTeamPax() {
    const teamArray= filterData.filter(item => item.role === "bride")
    const total = teamArray.reduce(function(prev, cur) {
      return prev + cur.pax},0)
      return total
    }

    function sumOfGroomTeamPax() {
      const teamArray= filterData.filter(item => item.role === "groom")
      const total = teamArray.reduce(function(prev, cur) {
        return prev + cur.pax},0)
        return total
      }


  return (
    <div className={classes.root}>
      <NavBar title='Guestlists' />

      {/* Guest Pax Summary  */}
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth='lg' className={classes.container}>
          <div item={12} style={{ margin: '50px' }}>
            <Grid
              container
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              className={classes.outerbox}
            >
              <GuestListSummary
                attending={guestSummaryData.totalAttending}
                unavailable={guestSummaryData.totalUnavailable}
                pending={guestSummaryData.totalPending}
                total={guestSummaryData.totalGuests}
              />
            </Grid>
          </div>

          {/* Filter */}
          <div style={{ margin: '50px' }}>
            <Grid container style={{ marginTop: '50px' }}>
              <Grid item xs={12} sm={6} lg={6} style={{ textAlign: 'left' }}>
                <FormControl variant='outlined' style={{ width: '200px' }}>
                  <InputLabel id='category'>Filter By</InputLabel>
                  <Select
                    defaultValue= "all"
                    // if value is 'all', fil
                    // true --> item is selected // refer to mdn 
                    onChange={(e) => setFilteredData(guestListData.filter(item => e.target.value === 'all' ? true :
                    item.status === e.target.value))}
                    variant='outlined'
                    id='rsvp'
                  >
                    <MenuItem value='all'>Show All</MenuItem>
                    <MenuItem value='pending'>Pending</MenuItem>
                    <MenuItem value='attending'>Attending</MenuItem>
                    <MenuItem value='unavailable'>Not Attending</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6} lg={6} style={{ textAlign: 'right' }}>
                <Link
                  to='/guest-lists/create'
                  style={{ textDecoration: 'none', color: '#fff' }}
                >
                  <Button
                    type='submit'
                    variant='contained'
                    className={classes.submit}
                    style={{ background: '#7865E5', color: 'white' }}
                  >
                    Add Guest
                  </Button>
                </Link>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              {/* Team Groom */}
              <Grid item xs={12} md={6} lg={6}>
                <Paper className={fixedHeightPaper}>
                  {/* if guesSummaryData.groom.total is empty then render somthing else */}
                  {guestSummaryData ? (
                    <GuestListItem
                      title='Groom'
                      teampax= {sumOfGroomTeamPax()}

                    />
                  ) : (
                    <GuestListItem title='Groom' />
                  )}

                  <div style={{ margin: '25px' }}>
                    <List className={classes.ulroot}>
                      <Grid container>
                        {filterData.length === 0 ? (
                          <h6>There are no items at the moment.</h6>
                        ) : (
                          filterData.map((item, pos) => {
                            return item.role === 'groom' ? (
                              <TeamGroomBrideGuestList
                                key={pos}
                                name={`${item.guest_first_name} ${item.guest_last_name}`}
                                guest_contact={item.guest_contact}
                                status={item.status}
                                pax={item.pax}
                                _id={item._id}
                              />
                            ) : (
                              <div key={pos}></div>
                            )
                          })
                        )}
                      </Grid>
                    </List>
                  </div>
                </Paper>
              </Grid>

              {/* Team Bride */}
              <Grid item xs={12} md={6} lg={6}>
                <Paper className={fixedHeightPaper}>
                  {/* if guesSummaryData.bride.total is empty then render somthing else */}
                  {guestSummaryData ? (
                    <GuestListItem
                      title='Bride'
                      teampax= {sumOfBrideTeamPax()}
                    />
                  ) : (
                    <GuestListItem title='Bride' />
                  )}

                  <div style={{ margin: '25px' }}>
                    <List className={classes.ulroot}>
                      <Grid container>
                        {filterData.length === 0 ? (
                          <h6>There are no items at the moment.</h6>
                        ) : (
                          filterData.map((item, pos) => {
                              return item.role === 'bride' ? (
                              <TeamGroomBrideGuestList
                                key={pos}
                                name={`${item.guest_first_name} ${item.guest_last_name}`}
                                guest_contact={item.guest_contact}
                                status={item.status}
                                pax={item.pax}
                                _id={item._id}
                              />
                            ) : (
                              <div key={pos}></div>
                            )
                          })
                        )}
                      </Grid>
                    </List>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </div>
        </Container>
      </main>
    </div>
  )
}
