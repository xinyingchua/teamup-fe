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
import BudgetCreate from './components/pages/Budget/NewBudget';
import BudgetEdit from './components/pages/Budget/Budget-Edit';
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
  link:{
    textDecoration: "none", 
    color:'#fff'
  }

}); 



class App extends React.Component {
  render() {

    return(
      
      <ThemeProvider theme={theme}>
           <Router>
              <div className="App">

              <Switch>

              {/* Users Routes*/}
              <Route path="/login" component={SignInSide} />
              <Route path="/register/date-and-budget" component={RegisterDateBudget} />
              <Route path="/register" component={RegisterPage} />
              <Route path="/guest/login" component={LoginGuest} /> 
              <Route path="/guest/RSVP" component={GuestRSVP} />

              {/* Dashboard Route*/}
              <Route path="/dashboard" component={Dashboard} />

              {/* Budget Routes*/}
              <Route path="/budget/create" component={BudgetCreate} />
              <Route path="/budget/edit"component={BudgetEdit} />
              <Route path="/budget" component={BudgetMain} />


              {/* To Do List Routes*/}
              <Route path="/to-do/create" component={ToDoCreate} />
              <Route path="/to-do/edit" component={ToDoEdit} />
              <Route path="/to-do" component={ToDoMain} />


             {/* Guest List Routes*/}
              <Route path="/guest-lists/create" component={GuestlistCreate} />
              <Route path="/guest-lists/edit" component={GuestListEdit} />
              <Route path="/guest-lists" component={GuestListMain} />

              {/* Events Routes*/}
              <Route path="/events/create" component={EventCreate} />
              <Route path="/events/edit" component={EventEdit} />
              <Route path="/events" component={EventMain} />

              </Switch>
      
              </div>
          </Router>
      </ThemeProvider>
    )
    
  }

}



export default App;