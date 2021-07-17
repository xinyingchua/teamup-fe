import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import NavBar from "./NavBar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import EditIcon from "@material-ui/icons/Edit";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';


const todo = [
  {
    role: "Groom",
    todo: "Join a DIY inspiration group",
  },
  {
    role: "Groom",
    todo: "Settle Guestlist",
  },
  {
    role: "Bride",
    todo: "Prepare Photoshoot",
  },
  {
    role: "Groom",
    todo: "Meet Hotel",
  },
  {
    role: "Groom",
    todo: "Task 4",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    background: "#F9F8FF",
  },

  rootcard: {
    height: 300,
    width: 300,
    marginRight: theme.spacing(0),
    padding: theme.spacing(2),
    justifyContent: 'center'

  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    padding: theme.spacing(3),
  },

  button: {
    marginTop: theme.spacing(4),
  },
}));

export default function NewBudget() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>

                <FormControl variant="outlined" style={{width:'150px', marginBottom:'20px'}} >
                    <InputLabel id="category">Filter By</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        
                    >
                        <MenuItem value="">
                        </MenuItem>
                        <MenuItem value="groom">Groom</MenuItem>
                        <MenuItem value="bride">Bride</MenuItem>
                        <MenuItem value="both">Both</MenuItem>
                        <MenuItem value="completed">Completed</MenuItem>

                    </Select>
                    </FormControl>

        {/* Map card here */}
          <Grid container spacing={4}>

            {todo.map((todo) => (
              <Grid item key={todo} xs={12} sm={4} lg={3}>
                <Card className={classes.rootcard} >
                  <CardContent>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      {todo.role}
                    </Typography>
                    <Typography variant="h5" component="h2">
                      {todo.todo}
                    </Typography>
                    <Grid container className={classes.button}>
                      <Grid item xs={6}>
                        <CardActions>
                          <Button
                            variant="contained"
                            style={{ color: "#7865E5" }}
                            className={classes.button}
                            startIcon={<EditIcon />}
                          >
                            Edit
                          </Button>
                        </CardActions>
                      </Grid>
                      <Grid item xs={6}>
                        <CardActions>
                          <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            startIcon={<CheckCircleOutlineIcon />}
                          >
                            Done
                          </Button>
                        </CardActions>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </div>
  );
}
