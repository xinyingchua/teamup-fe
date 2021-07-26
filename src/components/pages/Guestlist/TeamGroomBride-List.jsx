import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Button from '@material-ui/core/Button'
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom"
import EditIcon from '@material-ui/icons/Edit'


export default function TeamGroomBrideGuestList(props) {

  return (

              <Grid item  xs={12} md={11} lg={12}>
                  <ListItem
                    dense
                    style={{ paddingBottom:'30px'}}
                  >
                    
                    <ListItemText
                      edge="start"
                      primary={props.name}
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

                    {props.status ==="attending"
                    ?
                   (<Button variant="contained" color="secondary" style={{background:'#AAD1CA'}}>
                    Attending
                    </Button>)
                    : 
                    props.status ==="unavailable" 
                    ?
                    (<Button variant="contained" color="secondary" style={{background:'#F2BFD8'}}>
                    Not Attending
                    </Button>)
                    :
                    props.status ==="pending" 
                    ?
                    (<Button variant="contained" color="secondary" style={{background:'#FFCCA7'}}>
                    Pending
                    </Button>)
                    :
                   ( <div></div>)
                    }
   
                      <IconButton edge="end" aria-label="edit">
                      <Typography style={{fontWeight:'500', color:'#5EAB50', marginRight:'20px'}}>
                      {props.pax}
                      </Typography>
                      </IconButton>
                      

                      <Link to={{ pathname: '/guest-lists/edit', state: { _id: props._id} }} style={{ textDecoration: "none", color:'#fff' }}>
                      
                     
                      <IconButton edge='end' aria-label='edit'>
                      <EditIcon />
                      </IconButton>
          
                 
                    </Link>
                    </ListItemSecondaryAction>
                  </ListItem>
              </Grid>

  )
}
