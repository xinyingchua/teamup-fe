import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom"



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

  teamtitle: {
    display: "flex",
    flexDirection: "row",
    paddingTop: "30px",
    alignItems: "center",
    justifyContent: "center",
    
  },

}));


export default function TeamGroom() {
  const classes = useStyles();


  return (
    
      <div style={{ margin:'25px'}}>
      <List className={classes.ulroot}>
        {guestlist.map((guestlist) => {
          

          return (
            <Grid container fullWidth>
              <Grid item xs={12} md={11} lg={12}>
                  <ListItem
                    key={guestlist}
                    dense
                    style={{ paddingBottom:'30px'}}
                  >
                    
                    <ListItemText
                      edge="start"
                      primary={guestlist.name}
                      style={{ display:'flex', alignItems:'center'}}
                    />
                    <Grid
                      edge="end"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}

                    ></Grid>
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="edit">
                      <Typography style={{fontWeight:'500', color:'#5EAB50', marginRight:'20px'}}>
                        +5
                      </Typography>
                      </IconButton>
                      
                      <Link to="/guest-lists/edit" style={{ textDecoration: "none", color:'#fff' }}>
                      <Button variant="contained" color="secondary" style={{background:'#60C3F1'}}>
                      Attending
                    </Button>
                    </Link>
                    </ListItemSecondaryAction>
                  </ListItem>
              </Grid>
            </Grid>
          );
        })}
      </List>
      </div>



    
  );
}
