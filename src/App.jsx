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
import NewBudget from './components/pages/NewBudget';
import ToDoCreate from './components/pages/To-Do/Todo-Create';
import ToDoEdit from './components/pages/To-Do/Todo-Edit';
import GuestlistCreate from './components/pages/Guestlist/Guestlist-Create';
import GuestListEdit from './components/pages/Guestlist/Guestlist-Edit';
import EventCreate from './components/pages/Event-Schedule/Event-Create';
import EventEdit from './components/pages/Event-Schedule/Event-Editx';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Lexend',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 700,
    },
  },
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#7865E5',
    },
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
              <Route path="/hello" component={RegisterDateBudget} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/budget" component={NewBudget} />
              <Route path="/hi" component={LoginGuest} />
              <Route path="/RSVP" component={GuestRSVP} />
              <Route path="/to-docreate" component={ToDoCreate} />
              <Route path="/to-doedit" component={ToDoEdit} />
              <Route path="/guest-listscreate" component={GuestlistCreate} />
              <Route path="/guest-listsedit" component={GuestListEdit} />
              <Route path="/eventcreate" component={EventCreate} />
              <Route path="/eventedit" component={EventEdit} />
              </Switch>
      
              </div>
          </Router>
      </ThemeProvider>
    )
    
  }

}



export default App;