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
import NavBar from '../Navbar/NavBar';
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { useCookies } from 'react-cookie';


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

 // use useState hooks
 const [guestname, setGuestName] = React.useState('')
 const [guestmobile, setGuestMobile] = React.useState('')
 const [teamSelection, setTeamSelection] = React.useState('')
 const [addPax, setAddPax] = React.useState('')
 const [rsvp, setRSVP] = React.useState('')
 const [cookies] = useCookies(['auth_token'])
 let [response, setFetchedData] = React.useState('')
 let history = useHistory();

 console.log(cookies)

 // use api callback
 let fetchData = async () => {
   response = await axios({
     method: 'post',
     headers: cookies,
     url: 'https://teamup-be.herokuapp.com/api/v1/users/guests/create',
    //  withCredentials: true, 
     data: {
      guest_first_name: guestname,
      guest_last_name: guestname,
      guest_contact: guestmobile,
      role: teamSelection,
      status: rsvp,
      pax: addPax,
     }, 
   })
   console.log(response.data)
   setFetchedData(response)
 }

//  console.log(guestname)
//  console.log(guestmobile)
//  console.log(teamSelection)
//  console.log(rsvp)


 // submit form function
 const handleFormSubmission = async (e) => {
  e.preventDefault()
  fetchData()
  history.push("/guest-lists");
  console.log(
    `form submitted with values: ${guestname}, ${guestmobile}, ${teamSelection}, ${rsvp}  `
  )
}


  return (

    <div className={classes.root}>
      <NavBar title = "Guestlists - Add Guests" />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
        <form onSubmit={ e=> {handleFormSubmission(e)} }>
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
              onChange={(e) => setGuestName(e.target.value)}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              style={{width:"55%"}}
              id="guestmobile"
              label="Guest Mobile"
              name="guestmobile"
              autoFocus
              onChange={(e) => setGuestMobile(e.target.value)}
            />

          <FormControl
          margin="normal"
          style={{width:"44%", marginLeft: "6px"}}
      
          variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">Any family members to bring along?</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                onChange={(e) => setAddPax(e.target.value)}
                defaultValue = "0"
              >
                <MenuItem value="0">0</MenuItem>
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
                <MenuItem value="5">5</MenuItem>
                <MenuItem value="6">6</MenuItem>
                
              </Select>
         </FormControl>

            <FormControl 
            variant="outlined" 
            style={{width:"65%"}}
            margin="normal"
            textalign= "left">
                <InputLabel id="demo-simple-select-outlined-label">Which team is guest on?</InputLabel>
                  <Select
                    defaultValue = " "
                    labelId="demo-simple-select-outlined-label"
                    id="teamSelection"
                    onChange={(e) => setTeamSelection(e.target.value)}
                  >
                    <MenuItem value=" "></MenuItem>
                    <MenuItem value="bride">Bride</MenuItem>
                    <MenuItem value="groom">Groom</MenuItem>
                  </Select>
            </FormControl>


            <FormControl 
            variant="outlined" 
            style={{width:"30%", marginLeft:"10px"}}
            margin="normal"
            textalign= "center">
                <InputLabel id="demo-simple-select-outlined-label">RSVP</InputLabel>
                  <Select
                    defaultValue = " "
                    labelId="demo-simple-select-outlined-label"
                    id="rsvp"
                    onChange={(e) => setRSVP(e.target.value)}
                  >
                    <MenuItem value=" "></MenuItem>
                    <MenuItem value="attending">Attending</MenuItem>
                   <MenuItem value="unavailable">Not Attending</MenuItem>
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
         </form>
        </Container>
      </main>
    </div>
  );
}