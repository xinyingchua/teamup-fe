import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import NavBar from "../NavBar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Title from "../Title";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import TeamGroom from "./TeamGroom-Guest";



const guestlist = [
  {
    name: "Jonathan",
    status: "attending",
  },
  {
    name: "John",
    status: "pending",
  },
  {
    name: "Jon",
    status: "not-attending",
  },
  {
    name: "Jonny",
    status: "attending",
  },
  {
    name: "John",
    status: "attending",
  },
  
];



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
    height: 500,
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    
  },

  paper2:{
    height: '70px',
  }
}));

export default function NewBudget() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const fixedHeightByExpense = clsx(classes.paper2, 100);

  const [checked, setChecked] = React.useState([0]);
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  return (
    <div className={classes.root}>
      <NavBar />
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
              <div className={classes.outerbox}>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <Box
                    className={classes.purplebox}
                    m={3}
                    style={{ margin: "0,auto" }}
                  >
                    <h1>52</h1>
                  </Box>
                  <h6 style={{ marginTop: "20px", textAlign: "center" }}>
                    Attending
                  </h6>
                </Grid>

                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <Box
                    className={classes.purplebox}
                    m={3}
                    style={{ margin: "0, auto" }}
                  >
                    <h1>61</h1>
                  </Box>
                  <h6 style={{ marginTop: "20px", textAlign: "center" }}>
                    Not Attending
                  </h6>
                </Grid>

                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <Box
                    className={classes.purplebox}
                    m={3}
                    style={{ margin: "0, auto" }}
                  >
                    <h1>35</h1>
                  </Box>
                  <h6 style={{ marginTop: "20px", textAlign: "center" }}>
                    Pending
                  </h6>
                </Grid>

                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <Box
                    className={classes.purplebox}
                    m={3}
                    style={{ margin: "0, auto"}}
                
                  >
                    <h1>22</h1>
                  </Box>
                  <h6 style={{ marginTop: "20px", textAlign: "center" }}>
                    Total
                  </h6>
                </Grid>
              </div>
            </Grid>
          </div>

          {/* Filter */}
          <div style={{ margin: "50px" }}>
            <Grid container style={{ marginTop: "50px" }}>
              <Grid item xs={12} sm={6} lg={6} style={{ textAlign: "left" }}>
                <FormControl variant="outlined" style={{ width: "200px" }}>
                  <InputLabel id="category">Filter By</InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                  >
                    <MenuItem value=""></MenuItem>
                    <MenuItem value="pending">Pending</MenuItem>
                    <MenuItem value="attending">Attending</MenuItem>
                    <MenuItem value="notattending">Not Attending</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6} lg={6} style={{ textAlign: "right" }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Add Guest
                </Button>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              {/* Team Groom */}
              <Grid item xs={12} md={6} lg={6}>
                <Paper className={fixedHeightPaper}>
                  <div className={classes.teamtitle}>
                    <h2 style={{ marginRight: "150px", marginBottom:'20px', fontWeight:'700' }}>Team Groom</h2>
                    <h2 style={{ fontWeight:'700' }}>32 Pax</h2>
                  </div>

                  {/* Teamgroom -guestlist */}
                  <TeamGroom/>
                </Paper>
              </Grid>
              

               {/* Team Bride */}
               <Grid item xs={12} md={6} lg={6}>
                <Paper className={fixedHeightPaper}>
                  <div className={classes.teamtitle}>
                    <h2 style={{ marginRight: "150px", marginBottom:'20px', fontWeight:'700' }}>Team Bride</h2>
                    <h2 style={{ fontWeight:'700' }}>32 Pax</h2>
                  </div>

                  {/* Teamgroom -guestlist */}
                  <TeamGroom/>
                </Paper>
              </Grid>


            </Grid>
            
          </div>
        </Container>
      </main>
    </div>
  );
}
