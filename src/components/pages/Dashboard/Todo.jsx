import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';
import Title from '../Title';
import Grid from '@material-ui/core/Grid';


function preventDefault(event) {
    event.preventDefault();
  }



const useStyles = makeStyles({
    root: {
      width: '100%',
      background: '#fff'
    },
  });

  export default function LinearDeterminate() {
    const classes = useStyles();
    const [progress, setProgress] = React.useState(0);
   
  
    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            return 0;
          }
          const diff = Math.random() * 10;
          return Math.min(oldProgress + diff, 100);
        });
      }, 500);
  
      return () => {
        clearInterval(timer);
      };
    }, []);
  
    return (
      <div className={classes.root}>
           <Grid container> 
            <Grid item xs={12}>
                <Title textAlign="center" >To Do's Before "I Do"</Title>
            </Grid>
            <Grid item xs={6}>
                <Typography style={{color: '#000', fontWeight:"500" }}variant="body">
                    Task
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography style={{color: '#000', fontWeight:"500" }}variant="body">
                    Completed
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography style={{color: '#000', fontWeight:"500" }}variant="h2">
                    45
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography style={{color: '#000', fontWeight:"500" }}variant="h2">
                    10
                </Typography>
            </Grid>
          </Grid>
        <LinearProgress color="secondary" variant="determinate" value={progress} />
        <Box mt={1.5}>
        <Link  style={{color: '#7865E5'}}color="primary" href="#" onClick={preventDefault}>
          View progress
        </Link>
      </Box>

      </div>
    );

  }