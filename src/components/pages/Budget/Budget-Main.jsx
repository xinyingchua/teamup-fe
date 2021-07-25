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
  const [weddingAvailableBudget, setWeddingAvailableBudge] = React.useState('')
  const [AllBudgetData, setAllBudgetData] = React.useState([])

  useEffect(() => {
    // Get Multiple URL//
    let urls = [
      'https://teamup-be.herokuapp.com/api/v1/users/dashboard',
      'https://teamup-be.herokuapp.com/api/v1/users/budget/',
    ]

    // Get Multiple Data points//
    const getAllBudgetData = () => {
      let requests = urls.map((url) => {
        return axios.get(url, {
          headers: cookies,
        })
      })

      // After retriving data, setState//
      Promise.all(requests)
        .then((responses) => {
          setAllBudgetData(responses[1].data)
          setWeddingAvailableBudge(
            responses[0].data.budget.currentBudget.toFixed(2)
          )
          setWeddingBudget(responses[0].data.budget.initialBudget.toFixed(2))
        })
        .catch((err) => {
          console.log(err)
        })
    }

    getAllBudgetData()
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
                  {`$${weddingBudget}`}
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
                  {`$${weddingAvailableBudget}`}
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
          <Grid item xs={12} md={4} lg={3}>
            <Box className={classes.ulheader}>
              <Typography style={{ fontWeight: 'bold' }}>
                Entertainment
              </Typography>
            </Box>
          </Grid>

          <List className={classes.ulroot}>
            {AllBudgetData.map((item, pos) => {
              return (
                <BudgetListItem
                  key={pos}
                  status={item.status}
                  _id={item._id}
                  itemName={item.item_name}
                  amount={`$${parseFloat(item.amount).toFixed(2)}`}
                />
              )
            })}
          </List>
        </Container>
      </main>
    </div>
  )
}
