import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import NavBar from '../Navbar/NavBar'
import { useHistory } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    background: '#F9F8FF',
  },
  root2: {
    marginTop: '20px',
  },

  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
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
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginTop: 5,
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
    background: '#AAD1CA',
    width: '200px',
  },
  delete: {
    margin: theme.spacing(3, 0, 2, 1),
    background: '#F2BFD8',
    width: '200px',
    color: 'black',
  },
}))

export default function NewBudget(props) {
  const classes = useStyles()

  // use useState hooks
  const [itemName, setItemName] = React.useState('')
  const [amount, setAmount] = React.useState('')
  const [paymentType, setPaymentType] = React.useState('')
  const [category, setCategory] = React.useState('')
  const [status, setStatus] = React.useState('')
  const [description, setDescription] = React.useState('')
  let history = useHistory()
  const [cookies] = useCookies(['auth_token'])

  useEffect(() => {
    // GET //
    const getOneBudgetData = () => {
      axios
        .get(
          'https://teamup-be.herokuapp.com/api/v1/users/budget/' +
            props.location.state._id,
          { headers: cookies }
        )
        .then((response) => {
          const allData = response.data[0]
          setItemName(allData.item_name)
          setAmount(allData.amount)
          setPaymentType(allData.payment_type)
          setCategory(allData.category)
          setStatus(allData.status)
          setDescription(allData.description)
        })
        .catch((error) => {
          return error
        })
    }

    if (props.location.state && props.location.state._id) {
      getOneBudgetData()
    }
  }, [])

  // Create New Budget//
  let CreateBudget = () => {
    axios.post(
      'https://teamup-be.herokuapp.com/api/v1/users/budget/create',
      {
        item_name: itemName,
        amount: amount,
        payment_type: paymentType,
        category: category,
        status: status,
        description: description,
      },
      {
        headers: cookies,
      }
    )
  }

  // Patch TO DO //
  const updateBudget = () => {
    axios
      .patch(
        'https://teamup-be.herokuapp.com/api/v1/users/budget/' +
          props.location.state._id +
          '/update',
        {
          item_name: itemName,
          amount: amount,
          payment_type: paymentType,
          category: category,
          status: status,
          description: description,
        },
        {
          headers: cookies,
        }
      )
      .then((response) => {
        return
      })
      .catch((error) => {
        return error
      })
  }

  // Delete TO DO //
  const deleteBudget = () => {
    axios
      .delete(
        'https://teamup-be.herokuapp.com/api/v1/users/budget/' +
          props.location.state._id +
          '/delete',
        {
          headers: cookies,
        }
      )
      .then((response) => {
        return
      })
      .catch((error) => {
        return error
      })
  }

  // submit form function
  const handleFormSummit = (e) => {
    e.preventDefault()
    history.push('/budget')
  }

  return (
    <div className={classes.root}>
      <NavBar
        title={
          props.location.state && props.location.state._id
            ? 'Budget Planning — Edit'
            : 'Budget Planning — create'
        }
      />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth='lg' className={classes.container}>
          <Box m={4}>
            <form
              onSubmit={(e) => {
                handleFormSummit(e)
              }}
            >
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='item_Name'
                label='Item Name'
                name='item_Name'
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                autoFocus
              />

              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='amount'
                label='Your Budget'
                name='amount'
                value={amount}
                autoFocus
                onChange={(e) => setAmount(e.target.value)}
              />
              <FormControl variant='outlined' fullWidth>
                <InputLabel id='category'>Payment option</InputLabel>
                <Select
                  value={paymentType}
                  onChange={(e) => {
                    paymentType !== 'credit'
                      ? setAmount(-Math.abs(amount))
                      : setAmount(Math.abs(amount))

                    setPaymentType(e.target.value)
                  }}
                >
                  <MenuItem value='credit'>Credit</MenuItem>
                  <MenuItem value='debit'>Debit</MenuItem>
                </Select>
              </FormControl>

              <Box mt={1}>
                <FormControl variant='outlined' fullWidth>
                  <InputLabel id='category'>Select Category</InputLabel>
                  <Select
                    labelId='demo-simple-select-outlined-label'
                    id='demo-simple-select-outlined'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <MenuItem value=''></MenuItem>
                    <MenuItem value='wedding'>Wedding Costs</MenuItem>
                    <MenuItem value='entertainment'>Entertainment</MenuItem>
                    <MenuItem value='guests'>For Guests</MenuItem>
                    <MenuItem value='others'>Miscellaneous</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box mt={1}>
                <FormControl variant='outlined' fullWidth>
                  <InputLabel id='category'>Payment Status</InputLabel>
                  <Select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <MenuItem value='not paid'>Not Paid</MenuItem>
                    <MenuItem value='paid'>Paid</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <TextField
                id='status'
                label='Item Description (optional)'
                variant='outlined'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={9}
                multiline
                fullWidth
                row='9'
                className={classes.root2}
              />

              {props.location.state && props.location.state._id ? (
                <div>
                  <Button
                    type='submit'
                    variant='contained'
                    className={classes.submit}
                    onClick={updateBudget}
                  >
                    Edit
                  </Button>

                  <Button
                    type='submit'
                    variant='contained'
                    className={classes.delete}
                    onClick={deleteBudget}
                  >
                    Delete
                  </Button>
                </div>
              ) : (
                <Button
                  type='submit'
                  // fullWidth
                  variant='contained'
                  className={classes.submit}
                  onClick={CreateBudget}
                >
                  Create budget
                </Button>
              )}
            </form>
          </Box>
        </Container>
      </main>
    </div>
  )
}
