import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import NavBar from "../Navbar/NavBar";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom"
import axios from 'axios'
import { useEffect } from "react";
import { useCookies } from 'react-cookie';
import List from "@material-ui/core/List";
import GuestListItem from '../../assets/GuestListItem';
import GuestListSummary from '../../assets/GuestListSummary';
import TeamGroomBrideGuestList from './TeamGroomBride-List'
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    background: "#F9F8FF",
  },


  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(3),
    textAlign: "center",
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "#AAD1CA",
    width: "200px",
    color: "black",
  },
  fixedHeight: {
    height: 1000,
  },

  box: {
    margin: theme.spacing(0, 0),
  },

  filter: {
    justifyContent: "flex-start",
  },
  purplebox: {
    height: "100px",
    width: "100px",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e0dbff",
    color:'#7865E5'
  },

  outerbox: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    color:'#7865E5'
  },

  teamtitle: {
    display: "flex",
    flexDirection: "row",
    paddingTop: "30px",
    alignItems: "center",
    justifyContent: "center",
    
  },

  paper2:{
    height: '70px',
  }
}));

export default function GuestList() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


// use useState hooks
const [cookies] = useCookies(['auth_token'])
const [guestSummaryData, getGuestSummaryData] = React.useState('')
const [guestListData, getGuestListData] = React.useState([])


// const getAllGuestData = () => {
//   axios.get(`${url}`, {
//     headers: cookies
//   })
//   .then((response) => {
//     const allData = response.data
//     getGuestSummaryData(allData.guests)
//   })
//   .catch((error => 
//     console.log("error")))
// }


useEffect(() => {
  getAllGuestData();
}, []
)

// TRY //
let urls = [
  'https://teamup-be.herokuapp.com/api/v1/users/dashboard',
  'https://teamup-be.herokuapp.com/api/v1/users/guests/'
]

console.log(cookies)

const getAllGuestData = () => {
let requests = urls.map((url) => {
  return axios.get(url, {
    headers: cookies
    
  });
});   

Promise.all(requests).then((responses) => {
  const DashboardData = responses[0].data
  const GuestListData = responses[1].data
  getGuestSummaryData(DashboardData.guests)
  getGuestListData(GuestListData)
  console.log(responses);
  console.log(GuestListData);
   
}).catch((err) => {
   console.log(err)
});
}


  return (
    <div className={classes.root}>
      <NavBar title = "Guestlists" />
     
     {/* Guest Pax Summary  */}
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <div item={12} style={{ margin: "50px" }}>
            <Grid
              container
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              className={classes.outerbox}
            >
              <GuestListSummary attending= {guestSummaryData.attending} unavailable={guestSummaryData.unavailable} pending= {guestSummaryData.pending} total= {guestSummaryData.total}/>

            </Grid>
          </div>

          {/* Filter */}
          <div style={{ margin: "50px" }}>
            <Grid container style={{ marginTop: "50px" }}>
              <Grid item xs={12} sm={6} lg={6} style={{ textAlign: "left" }}>
                <FormControl variant="outlined" style={{ width: "200px" }}>
                  <InputLabel id="category">Filter By</InputLabel>
                  <Select
                    value = " "
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                  >
                    <MenuItem value=" "></MenuItem>
                    <MenuItem value="pending">Pending</MenuItem>
                    <MenuItem value="attending">Attending</MenuItem>
                    <MenuItem value="notattending">Not Attending</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6} lg={6} style={{ textAlign: "right" }}>
              <Link to="/guest-lists/create" style={{ textDecoration: "none", color:'#fff' }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="#60C3F1"
                  className={classes.submit}
                  style={{background:'#7865E5', color:'white'}}
                >
                  Add Guest
                </Button>
                </Link>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              {/* Team Groom */}
              <Grid item xs={12} md={6} lg={6}>
              <Paper className={fixedHeightPaper}>
              <GuestListItem title="Groom"/>

              <div style={{ margin:'25px'}}>
                <List className={classes.ulroot}>
                <Grid container>

                {guestListData.map((item) => (
  
                <TeamGroomBrideGuestList role= {item.role} name={item.guest_first_name} guest_contact={item.guest_contact} status={item.status} pax={item.pax} _id={item._id} />
                ))}

        
                </Grid>  
                </List>
        
              </div>
              </Paper>
              </Grid>
              


               {/* Team Bride */}
               <Grid item xs={12} md={6} lg={6}>
              <Paper className={fixedHeightPaper}>
              <GuestListItem title="Bride"/>

              <div style={{ margin:'25px'}}>
                <List className={classes.ulroot}>
                <Grid container>

                {guestListData.map((item) => (
  
                <TeamGroomBrideGuestList role= {item.role} name={item.guest_first_name} guest_contact={item.guest_contact} status={item.status} pax={item.pax} _id={item._id}  />
                ))}
                </Grid>  
                </List>
        
              </div>
              </Paper>
              </Grid>
            </Grid>
            
          </div>
        </Container>
      </main>
    </div>
  );
}
