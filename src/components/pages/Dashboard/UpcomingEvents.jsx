import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from "react-router-dom"


export default function Deposits() {
  return (
    <React.Fragment>
    <Box m={2}>
      <h6 >Parents Meeting</h6>
      <Typography component="p" variant="h4" style={{fontWeight:"500" }}>
        April 4, 2021
      </Typography>

      <Box mt={1.5}>
        <Link to="/events" style={{color: '#7865E5'}}color="primary">
          View event
        </Link>
      </Box>
      </Box>
    </React.Fragment>
  );
}