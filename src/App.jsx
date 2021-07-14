import React from 'react'
import './App.css';
import { ThemeProvider, createTheme} from '@material-ui/core/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Lexend',
      'sans-serif',
    ].join(','),
  },

});


// PAGES // 
import Dashboard from './components/pages/Dashboard'





class App extends React.Component {
  render() {

    return(
      
      <ThemeProvider theme={theme}>
        <div className="App">
          <Dashboard/>
        </div>
      </ThemeProvider>
    )
    
  }

}



export default App;
