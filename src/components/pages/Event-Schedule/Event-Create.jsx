import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import NavBar from '../Navbar/NavBar';
import MomentUtils from '@date-io/moment';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';



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

textField: {
  marginLeft: theme.spacing(1,),
  marginRight: theme.spacing(1),
  width: 200,
},

}));

export default function EventCreate() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
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
             style={{marginBottom:"20px"}}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="eventdescription"
              label="Event Description"
              name="eventdescription"
              autoFocus
            />

          <MuiPickersUtilsProvider utils={MomentUtils}>
            <Grid container justifyContent="space-around">
              <KeyboardDatePicker
                  disableToolbar
                  style={{width:"33%"}}
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="eventdate"
                  label="Event Date"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
              />
              
              <form noValidate>
              <TextField
                id="eventStartTime"
                label="Event Start Time"
                margin="normal"
                type="time"
                defaultValue="07:30"
                onChange={handleDateChange}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
              />
            </form>

            <form noValidate>
              <TextField
                id="eventEndTime"
                label="Event End Time"
                margin="normal"
                type="time"
                defaultValue="07:30"
                onChange={handleDateChange}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
              />
            </form>
              
              </Grid>
              </MuiPickersUtilsProvider>



            <TextField
               style={{marginTop:"40px"}}
              variant="outlined"
              margin="normal"
              fullWidth
              id="eventlocation"
              label="Event Location"
              name="eventlocation"
              autoFocus
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Add Event
            </Button>

         </Box>
                
        </Container>
      </main>
    </div>
  );
}