import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Budgetplanning from '../Budgetplanning';
import Todo from '../Todo';
import NavBar from '../NavBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';



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
              color="secondary"
              className={classes.costTypography}>
                $2,673
            </Typography>
              </Box>
              Available in your budget
            </Grid>
          </Grid>
   
        

            <List className={classes.root}>
            {[0, 1, 2, 3].map((value) => {
            const labelId = `checkbox-list-label-${value}`;

            return (
              <Grid container fullWidth>
                <Grid item xs={12} md={11} lg={12}>
                <Paper className={fixedHeightByExpense}>
                <ListItem key={value} role={undefined} 
                dense button 
                onClick={handleToggle(value)}>
                <ListItemIcon>
                    <Checkbox
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                    />
                </ListItemIcon>
                <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="comments">
                    <CommentIcon />
                    </IconButton>
                </ListItemSecondaryAction>
                </ListItem>
                </Paper>
                </Grid>
                </Grid>
            );
            })}
            </List>




         {/* Budget-Planning */}
            <Grid item xs={12} md={11} lg={11}
            style={{textAlign:"left"}}>
            Entertainment
              <Paper className={fixedHeightByExpense}>
              <Typography >
              Nature of Expense
            </Typography>
            <Typography >
             $500
            </Typography>
              </Paper>
            </Grid>


    

        


          
        </Container>
      </main>
    </div>
  );
}