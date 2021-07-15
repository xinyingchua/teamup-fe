
import React from 'react';
import { useTheme,  makeStyles  } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Title from './Title';
import Box from '@material-ui/core/Box';




const useStyles = makeStyles((theme) => ({

    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'row',
      alignItems: 'center',
    },
  }));

export default function Chart() {
const classes = useStyles();
  const theme = useTheme();

  return (
    <React.Fragment>
      <Grid container spacing={5} >
        <Grid item item xs={12}>
            <Title textAlign="center" >Guestlists</Title>
        </Grid>

        <Grid item xs={3}>
            <h3 style={{color: '#7865E5', fontWeight:"500" }}>
            <Box component="div" display="inline" p={4} m={4} bgcolor="#e0dbff" borderRadius={5}>
                52
            </Box>
            </h3>
        </Grid>

        <Grid item xs={3}>
        <h3 style={{color: '#7865E5', fontWeight:"500" }}>
            <Box component="div" display="inline" p={4} m={4} bgcolor="#e0dbff" borderRadius={5}>
                34
            </Box>
            </h3>
        </Grid>

        <Grid item xs={3}>
        <h3 style={{color: '#7865E5', fontWeight:"500" }}>
            <Box component="div" display="inline" p={4} m={4} bgcolor="#e0dbff" borderRadius={5}>
                21
            </Box>
            </h3>
        </Grid>

        <Grid item xs={3}>
        <h3 style={{color: '#7865E5', fontWeight:"500" }}>
            <Box component="div" display="inline" p={4} m={4} bgcolor="#e0dbff" borderRadius={5}>
                21
            </Box>
            </h3>
        </Grid>

        <Grid item xs={3}>
        <Box mt={2}>
            <h6  m={5} style={{color: '#7865E5', fontWeight:"500" }}>
            Attending
            </h6>
            </Box>
        </Grid>

        <Grid item xs={3}>
        <Box mt={2}>
            <h6  m={5} style={{color: '#7865E5', fontWeight:"500" }}>
            Not Attending
            </h6>
            </Box>
        </Grid>

        <Grid item xs={3}>
        <Box mt={2}>
            <h6  m={5} style={{color: '#7865E5', fontWeight:"500" }}>
            Pending
            </h6>
            </Box>
        </Grid>

        <Grid item xs={3} >
            <Box mt={2}>
            <h6  m={5} style={{color: '#7865E5', fontWeight:"500" }}>
            Total
            </h6>
            </Box>
        </Grid>


      </Grid>
    </React.Fragment>



  );
}