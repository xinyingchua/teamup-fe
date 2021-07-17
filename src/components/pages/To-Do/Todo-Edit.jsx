import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
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
import NavBar from '../NavBar';


// const CompletedCheckbox = withStyles({
//   root: {
//     color: green[400],
//     '&$checked': {
//       color: green[600]
//     },
//   },
//   checked: {},
// })((props) => <Checkbox color="default" {...props} />);



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
  },
submit: {
  margin: theme.spacing(3, 0, 2),
  background: '#AAD1CA',
  width: '200px',
  color: 'black'
},
delete: {
  margin: theme.spacing(3, 0, 2,1),
  background: '#F2BFD8',
  width: '200px',
  color: 'black'
},

}));

export default function ToDoCreate() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedG: true,
  });

  return (
    <div className={classes.root}>
      <NavBar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>

        <Box m={10}>
        <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="taskInput"
              label="Task"
              name="task"
              autoFocus
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
                    // value={age}
                    // onChange={handleChange}
                    // label="Groom"
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
                />
              }
              label="Completed"
            />

            <Button
              type="submit"
              variant="contained"
              className={classes.submit}
            >
              Edit
            </Button>

            <Button
              type="submit"
              variant="contained"
              className={classes.delete}
            >
              Delete
            </Button>

         </Box>
                
        </Container>
      </main>
    </div>
  );
}