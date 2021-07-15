import React from 'react'
import './App.css';
import { ThemeProvider, createTheme} from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


// PAGES // 
import Dashboard from './components/pages/Dashboard'
import SignInSide from './components/pages/SignInSide'
import RegisterPage from './components/pages/RegisterPage'
import RegisterDateBudget from './components/pages/RegisterDateBudget'
import LoginGuest from './components/pages/LoginGuest'
import GuestRSVP from './components/pages/GuestRSVP';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Lexend',
      'sans-serif',
    ].join(','),
  },

}); 



class App extends React.Component {
  render() {

    return(
      
      <ThemeProvider theme={theme}>
           <Router>
              <div className="App">

              <Switch>
              <Route path="/login" component={SignInSide} />
              <Route path="/register" component={RegisterPage} />
              <Route path="/register/cont" component={RegisterDateBudget} />
              <Route path="/:slug/dashboard" component={Dashboard} />
              <Route path="/guest/:slug/login" component={LoginGuest} />
              <Route path="/guest/:slug/RSVP" component={GuestRSVP} />
              </Switch>
      
              </div>
          </Router>
      </ThemeProvider>
    )
    
  }

}



export default App;
