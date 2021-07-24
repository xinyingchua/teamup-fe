import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button'
import NavBar from '../Navbar/NavBar'




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
    margin: theme.spacing(3, 0, 2,1),
    background: '#F2BFD8',
    width: '200px',
    color: 'black'
  },

}));

export default function NewBudget() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
    <NavBar title = "Budget Planning - Edit" />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
        <Box m={4}>
            <div>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="item-name"
              label="Item Name"
              name="item-name"
              autoFocus
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="your-budget"
              label="Your Budget"
              name="your-budget"
              autoFocus
            />

            <Box mt={2}>
            <InputLabel htmlFor="bootstrap-input" style={{textAlign:"left" }}>
            How much have you paid for this?
            </InputLabel>

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="1st-payment"
              label="#1 Payment"
              name="1st-payment"
              autoFocus
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="2nd-payment"
              label="#2 Payment"
              name="2nd-payment"
              autoFocus
            />
            </Box>
            
            <FormControl variant="outlined" fullWidth >
            <InputLabel id="category">Select Category</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                
              >
                <MenuItem value="">
                </MenuItem>
                <MenuItem value="entertainment">Entertainment</MenuItem>
                <MenuItem value="guest">Guest</MenuItem>
                <MenuItem value="others">Others</MenuItem>
              </Select>
            </FormControl>


            <form className={classes.root2} noValidate autoComplete="off" >
            <TextField id="notes" label="Notes" variant="outlined" rows={9} multiline fullWidth row='9'/>
            </form>

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

            </div>
        </Box>

        </Container>
      </main>
    </div>
  );
}