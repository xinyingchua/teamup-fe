import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
    <Box m={2}>
      <h6 >Parents Meeting</h6>
      <Typography component="p" variant="h4" style={{fontWeight:"500" }}>
        April 4, 2021
      </Typography>

      <Box mt={1.5}>
        <Link  style={{color: '#7865E5'}}color="primary" href="#" onClick={preventDefault}>
          View event
        </Link>
      </Box>
      </Box>
    </React.Fragment>
  );
}