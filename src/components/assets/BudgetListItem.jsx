import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import { Link } from 'react-router-dom'

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
  //   submit: {
  //     background: '#7865E5',
  //     width: '200px',
  //     color: 'white',
  //     textDecoration: "none"
  //   },
}))

export default function BudgetListItem(props) {
  const classes = useStyles()

  const fixedHeightByExpense = clsx(classes.paper, 50)

  return (
    /* Return Expense by line by map */

    <Grid container>
      <Grid item xs={12} md={11} lg={12}>
        <Paper className={fixedHeightByExpense}>
          <ListItem dense button>
            <ListItemText edge='start'>{props.itemName}</ListItemText>

            <Grid edge='end' style={{ display: 'flex', flexDirection: 'row' }}>
              {props.status === 'paid' ? (
                <CheckCircleIcon className={classes.tickIcon} />
              ) : (
                <div />
              )}
              <ListItemText style={{ marginLeft: '10px' }}>
                {props.amount}
              </ListItemText>
            </Grid>
            <ListItemSecondaryAction>
              <Link
                to={{ pathname: '/budget/edit', state: { _id: props._id } }}
                style={{ textDecoration: 'none', color: '#fff' }}
              >
                <IconButton edge='end' aria-label='edit'>
                  <EditIcon />
                </IconButton>
              </Link>
            </ListItemSecondaryAction>
          </ListItem>
        </Paper>
      </Grid>
    </Grid>
  )
}
