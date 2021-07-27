import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import LandingPageNavBar from './LandingPageNavBar'



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {

    backgroundImage:
      'url(https://res.cloudinary.com/dhexix4cn/image/upload/v1627401789/teamup/background-img2_ytlj4n.png)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    
    
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: '#7865E5',
  },
  logo: {
    maxWidth: 75,
    margin: theme.spacing(-3, 12, 10, 0),
  },
  font: {
    position: "absolute",
    top: "15%",
    width: "100%",
    textAlign: "center",
    color:'#fff'
   
  }

}))

export default function RegisterPage() {
  const classes = useStyles()

  
  
  return (
    <Grid container component='main' className={classes.root}>
        <LandingPageNavBar />
      <CssBaseline />
      
      <Grid item xs={12} sm={12} md={12} className={classes.image}>
     
      <h1 className={classes.font} style={{fontSize:'70px', fontWeight:'700'}}>Welcome To Team Up!</h1>
      <p className={classes.font} style={{color:'white', fontSize:'20px', top:'30%'}} >An App to steamline wedding planning process and manage your budget at your fingertips.</p>
      
      
      </Grid>
      
    </Grid>
  )
}
