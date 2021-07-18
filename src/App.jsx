import React from 'react'
import './App.css';
import { ThemeProvider, createTheme} from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


// PAGES // 
import Dashboard from './components/pages/Dashboard/Dashboard'
import SignInSide from './components/pages/User/SignInSide'
import RegisterPage from './components/pages/User/RegisterPage'
import RegisterDateBudget from './components/pages/User/RegisterDateBudget'
import LoginGuest from './components/pages/User/LoginGuest'
import GuestRSVP from './components/pages/User/GuestRSVP';
import NewBudget from './components/pages/Budget/NewBudget';
import ToDoMain from './components/pages/To-Do/Todo-Main';
import ToDoCreate from './components/pages/To-Do/Todo-Create';
import ToDoEdit from './components/pages/To-Do/Todo-Edit';
import GuestlistCreate from './components/pages/Guestlist/Guestlist-Create';
import GuestListEdit from './components/pages/Guestlist/Guestlist-Edit';
import GuestListMain from './components/pages/Guestlist/Guestlist-Main';
import EventCreate from './components/pages/Event-Schedule/Event-Create';
import EventEdit from './components/pages/Event-Schedule/Event-Edit';
import BudgetMain from './components/pages/Budget/Budget-Main';
import EventMain from './components/pages/Event-Schedule/Event-Main';



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
              <Route path="/to-do-before" component={ToDoMain} />
              <Route path="/to-docreate" component={ToDoCreate} />
              <Route path="/to-doedit" component={ToDoEdit} />
              <Route path="/guest-listscreate" component={GuestlistCreate} />
              <Route path="/guest-listsedit" component={GuestListEdit} />
              <Route path="/guest-listsmain" component={GuestListMain} />
              <Route path="/eventcreate" component={EventCreate} />
              <Route path="/eventedit" component={EventEdit} />
              <Route path="/budgetmain" component={BudgetMain} />
              <Route path="/eventmain" component={EventMain} />


              </Switch>
      
              </div>
          </Router>
      </ThemeProvider>
    )
    
  }

}



export default App;