import React from 'react'
import './App.css';
import { ThemeProvider, createTheme} from '@material-ui/core/styles';

// PAGES // 
import Dashboard from './components/pages/Dashboard'
import SignInSide from './components/pages/SignInSide'


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
        <div className="App">
          <Dashboard/>
          {/* <SignInSide/> */}
        </div>
      </ThemeProvider>
    )
    
  }

}



export default App;
