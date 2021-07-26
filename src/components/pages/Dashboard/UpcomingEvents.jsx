import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from "react-router-dom"
import moment from 'moment';



export default function Deposits(props) {
  return (
    <React.Fragment>
    <Box m={2}>
      {/* <h6 >test</h6> */}
      <h6 >{props.eventName}</h6>
      <Typography component="p" variant="h4" style={{fontWeight:"500" }}>
      {moment(props.eventDate).format("DD MMMM YYYY")}
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