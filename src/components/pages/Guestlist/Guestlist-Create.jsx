import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import NavBar from '../NavBar';



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

}));

export default function GuestListCreate() {
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
              id="guestname"
              label="Guest Name"
              name="guestname"
              autoFocus
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="guestmobile"
              label="Guest Mobile"
              name="guestmobile"
              autoFocus
            />

            <FormControl 
            variant="outlined" 
            style={{width:"65%"}}
            margin="normal"
            textAlign= "left">
                <InputLabel id="demo-simple-select-outlined-label">Which team is guest on?</InputLabel>
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
                  </Select>
            </FormControl>


            <FormControl 
            variant="outlined" 
            style={{width:"30%", marginLeft:"10px"}}
            margin="normal"
            textAlign= "center">
                <InputLabel id="demo-simple-select-outlined-label">RSVP</InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    // value={age}
                    // onChange={handleChange}
                    // label="Groom"
                  >
                    <MenuItem value="">
                    </MenuItem>
                    <MenuItem value="attending">Attending</MenuItem>
                   <MenuItem value="not-attending">Not Attending</MenuItem>
                  </Select>
            </FormControl>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Add Guest
            </Button>

         </Box>
                
        </Container>
      </main>
    </div>
  );
}