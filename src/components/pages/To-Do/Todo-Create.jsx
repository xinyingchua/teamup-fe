import React from 'react';
import PropTypes from 'prop-types';
import { withCookies } from 'react-cookie'
import axios from 'axios'
import { withStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import NavBar from '../Navbar/NavBar';




const styles = theme => ({
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
  },
submit: {
  margin: theme.spacing(3, 0, 2),
  background: '#AAD1CA',
  width: '200px',
  color: 'black'
},

});


class ToDoCreate extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          task: '',
          status: false,
          role: '',
      }
  }

  // componentDidMount() {
  //   // get auth token from cookie, if does not exist or empty, redirect to login
  //   const { cookies } = this.props

  //   let authToken = cookies.get('auth_token')

  //   if (!authToken) {
  //       this.props.history.push('/login')
  //   }

  //   this.setState({
  //       token: authToken
  //   })
  // }

  handleFormSubmission(e) {
    e.preventDefault()

    // construct form data
    let formData = new FormData()
    formData.append('task', this.state.task)
    formData.append('status', this.state.status)
    formData.append('role', this.state.role)
    if (this.state.img) {
        formData.append('img', this.state.img)
    }

    axios.post('https://teamup-be.herokuapp.com/api/v1/users/todos/create', formData, {
        headers: {
            'auth_token': this.state.token
        }
    })
        .then(response => {
            this.props.history.push('/')
        })
        .catch(err => {
            console.log(err)
        })
  }

  handleFormChange(e, fieldName) {
    let newState = {}
    newState[fieldName] = e.target.value

    this.setState(newState)
  }

  handleFileChange(e) {
      this.setState({
          img: e.target.files[0]
      })
  } 



  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <NavBar />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>

          <Box m={10}>
          <form  onSubmit={ e => { this.handleFormSubmission(e) } }>
          <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="taskInput"
                label="Task"
                name="task"
                autoFocus
                // value={this.state.task}
                onChange={ e => { this.handleFormChange(e, 'task') } }
              />

              <FormControl 
              variant="outlined" 
              // fullWidth
              style={{width:"70%"}}
              margin="normal"
              textAlign= "left">
                  <InputLabel id="demo-simple-select-outlined-label">Who is responsible for this task?</InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={this.state.role}
                      onChange={ e => { this.handleFormChange(e, 'role') } }                      
                    >
                      <MenuItem value="">
                      </MenuItem>
                      <MenuItem value="bride">Bride</MenuItem>
                      <MenuItem value="groom">Groom</MenuItem>
                      <MenuItem value="bridegroom">Groom & Bride</MenuItem>
                    </Select>
              </FormControl>


              <FormControlLabel
              style={{margin:"0"}}
                control={
                  <Checkbox
                    // checked={state.checkedB}
                    // onChange={handleChange}
                    name="checkedG"
                    color="secondary"
                    value={this.state.status}
                    onChange={ (e) => { this.setState(prevState => ({ status: !prevState.status})) }}
                  />
                }
                label="Completed"
              />

              <Button
                type="submit"
                // fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                
              >
                Create to do
              </Button>
              </form>

          </Box>
                  
          </Container>
        </main>
      </div>
    );
  }
}

ToDoCreate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ToDoCreate)