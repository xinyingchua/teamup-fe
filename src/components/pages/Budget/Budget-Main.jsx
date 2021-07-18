import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import NavBar from '../Navbar/NavBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Button from '@material-ui/core/Button';


const drawerWidth = 240;

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
    textAlign: 'center'
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 100,
  },
  costTypography: {
    flex: 1,
    fontSize: 40,
    fontWeight: 'bold',
  },
  listItem: {
    flex: 1,
    fontSize: 40,
    fontWeight: 'bold',
  },
  ulroot: {
    width: '100%',
    paddingBottom: theme.spacing(5),
  },
  ulheader: {
    width: '100%',
    paddingTop: theme.spacing(4),
    textAlign: 'left',
  },
  tickIcon:  {
    color: '#5EAB50',
    paddingBottom: theme.spacing(0),
  },
  submit: {
    background: '#7865E5',
    width: '200px',
    color: 'white'
  },

}));

export default function BudgetMain() {
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const fixedHeightByExpense = clsx(classes.paper, 50);

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
          <Grid container spacing={3}>

           {/* Estimated Wedding Cost */}
            <Grid item xs={12} md={4} lg={3}>
              <Box className={fixedHeightPaper}>
              <Typography 
              color="secondary"
              className={classes.costTypography}>
                $7,200
            </Typography>
              </Box>
              Estimated Wedding Cost
            </Grid>

            {/* Avaibility of Wedding Budget */}
            <Grid item xs={12} md={4} lg={3}>
              <Box className={fixedHeightPaper}>
              <Typography 
              style={{color:"#5EAB50"}}
              className={classes.costTypography}>
                $2,673
            </Typography>
              </Box>
              Available in your budget
            </Grid>

          </Grid>

          <Grid item xs={8} md={11} lg={12}
          style={{textAlign : "right", paddingTop: "10px"}}>
          <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
             Create New Expense
            </Button>
            </Grid>

            {/* Expense header */}
            <Grid item xs={12} md={4} lg={3}>
            <Box className={classes.ulheader}>
              <Typography
              style={{fontWeight:"bold"}}>
              Entertainment
            </Typography>
              </Box>
              </Grid>

            <List className={classes.ulroot}>
            {[0, 1, 2, 3].map((value) => {
            const labelId = `checkbox-list-label-${value}`;
    
            {/* Return Expense by line by map */}
            return (
              <Grid container fullWidth>
                <Grid item xs={12} md={11} lg={12}>
                <Paper 
                className={fixedHeightByExpense}>
                <ListItem key={value} role={undefined} 
                dense button 
                onClick={handleToggle(value)}>
                {/* <ListItemIcon
                    edge="start"
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  >
                </ListItemIcon> */}



                <ListItemText edge="start" id={labelId} primary={`Line item ${value + 1}`} />

                <Grid
                edge="end"
                style={{display:"flex", flexDirection:"row"}}
                >
                <CheckCircleIcon className={classes.tickIcon}/>
                <ListItemText 
                 style={{marginLeft:"10px"}}
                id={labelId} 
                primary={`$ ${value + 1}`}
      
                 />
                </Grid>

                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="edit">
                    <EditIcon />
                    </IconButton>
                </ListItemSecondaryAction>
                </ListItem>
                </Paper>
                </Grid>
                </Grid>
            );
            })}
            </List>

          
        </Container>
      </main>
    </div>
  );
}