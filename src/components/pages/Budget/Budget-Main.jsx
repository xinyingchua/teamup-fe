import React, { useEffect } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import NavBar from '../Navbar/NavBar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import List from '@material-ui/core/List'
import BudgetListItem from '../../assets/BudgetListItem'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import axios from 'axios'

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
    height: 100,
  },
  costTypography: {
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
  tickIcon: {
    color: '#5EAB50',
    paddingBottom: theme.spacing(0),
  },
  submit: {
    background: '#7865E5',
    width: '200px',
    color: 'white',
    textDecoration: 'none',
  },
}))

export default function BudgetMain() {
  const classes = useStyles()

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
  // const fixedHeightByExpense = clsx(classes.paper, 50);

  // use useState hooks
  const [cookies] = useCookies(['auth_token'])
  const [weddingBudget, setWeddingBudget] = React.useState('')
  const [allBudgetData, setAllBudgetData] = React.useState([])

  const getApiCall = async (url) => {
    let response = null

    try {
      response = await axios.get(url, { headers: cookies })
    } catch (err) {
      return err
    }

    return response.data
  }

  useEffect(async () => {
    let dashboardData = await getApiCall(
      'https://teamup-be.herokuapp.com/api/v1/users/dashboard'
    )
    let budgetData = await getApiCall(
      'https://teamup-be.herokuapp.com/api/v1/users/budget/'
    )
    setWeddingBudget(dashboardData.budget)
    setAllBudgetData(budgetData)
  }, [])

  return (
    <div className={classes.root}>
      <NavBar title='Budget Planning' />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth='lg' className={classes.container}>
          <Grid container spacing={3}>
            {/* Estimated Wedding Cost */}
            <Grid item xs={12} md={4} lg={3}>
              <Box className={fixedHeightPaper}>
                <Typography
                  color='secondary'
                  className={classes.costTypography}
                >
                  {`$${parseFloat(weddingBudget.initialBudget).toFixed(2)}`}
                </Typography>
              </Box>
              Estimated Wedding Cost
            </Grid>

            {/* Avaibility of Wedding Budget */}
            <Grid item xs={12} md={4} lg={3}>
              <Box className={fixedHeightPaper}>
                <Typography
                  style={{ color: '#5EAB50' }}
                  className={classes.costTypography}
                >
                  {`$${parseFloat(weddingBudget.currentBudget).toFixed(2)}`}
                </Typography>
              </Box>
              Available in your budget
            </Grid>
          </Grid>

          <Grid
            item
            xs={8}
            md={11}
            lg={12}
            style={{ textAlign: 'right', paddingTop: '10px' }}
          >
            <Link
              to='/budget/create'
              style={{ textDecoration: 'none', color: '#fff' }}
            >
              <Button
                type='submit'
                variant='contained'
                color='primary'
                className={classes.submit}
              >
                Create New Expense
              </Button>
            </Link>
          </Grid>

          {/* Expense header */}

          {/* Wedding */}
          <Grid item xs={12} md={4} lg={3}>
            <Box className={classes.ulheader}>
              <Typography style={{ fontWeight: 'bold' }}>Wedding</Typography>
            </Box>
          </Grid>

          <List className={classes.ulroot}>
            {allBudgetData.length === 0 ? (
              <h6>There are no items at the moment.</h6>
            ) : (
              allBudgetData.map((item, pos) => {
                return item.category === 'wedding' ? (
                  <BudgetListItem
                    key={pos}
                    status={item.status}
                    _id={item._id}
                    category={item.category}
                    itemName={item.item_name}
                    amount={`$${parseFloat(item.amount).toFixed(2)}`}
                  />
                ) : (
                  <div key={pos}></div>
                )
              })
            )}
          </List>

          {/* Entertainment */}
          <Grid item xs={12} md={4} lg={3}>
            <Box className={classes.ulheader}>
              <Typography style={{ fontWeight: 'bold' }}>
                Entertainment
              </Typography>
            </Box>
          </Grid>

          <List className={classes.ulroot}>
            {allBudgetData.length === 0 ? (
              <h6>There are no items at the moment.</h6>
            ) : (
              allBudgetData.map((item, pos) => {
                return item.category === 'entertainment' ? (
                  <BudgetListItem
                    key={pos}
                    status={item.status}
                    _id={item._id}
                    category={item.category}
                    itemName={item.item_name}
                    amount={`$${parseFloat(item.amount).toFixed(2)}`}
                  />
                ) : (
                  <div key={pos}></div>
                )
              })
            )}
          </List>

          {/* Guests */}
          <Grid item xs={12} md={4} lg={3}>
            <Box className={classes.ulheader}>
              <Typography style={{ fontWeight: 'bold' }}>Guest</Typography>
            </Box>
          </Grid>

          <List className={classes.ulroot}>
            {allBudgetData.length === 0 ? (
              <h6>There are no items at the moment.</h6>
            ) : (
              allBudgetData.map((item, pos) => {
                return item.category === 'guests' ? (
                  <BudgetListItem
                    key={pos}
                    status={item.status}
                    _id={item._id}
                    category={item.category}
                    itemName={item.item_name}
                    amount={`$${parseFloat(item.amount).toFixed(2)}`}
                  />
                ) : (
                  <div key={pos}></div>
                )
              })
            )}
          </List>

          {/* Misc */}
          <Grid item xs={12} md={4} lg={3}>
            <Box className={classes.ulheader}>
              <Typography style={{ fontWeight: 'bold' }}>
                Miscellaneous
              </Typography>
            </Box>
          </Grid>

          <List className={classes.ulroot}>
            {allBudgetData.length === 0 ? (
              <h6>There are no items at the moment.</h6>
            ) : (
              allBudgetData.map((item, pos) => {
                return item.category === 'others' ? (
                  <BudgetListItem
                    key={pos}
                    status={item.status}
                    _id={item._id}
                    category={item.category}
                    itemName={item.item_name}
                    amount={`$${parseFloat(item.amount).toFixed(2)}`}
                  />
                ) : (
                  <div key={pos}></div>
                )
              })
            )}
          </List>
        </Container>
      </main>
    </div>
  )
}
