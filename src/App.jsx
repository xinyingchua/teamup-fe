import React from 'react'
import './App.css';

// PAGES // 
import SiteNavBar from './components/pages/SiteNavBar'
import SiteHeader from './components/pages/SiteHeader'
import Dashboard from './components/pages/Dashboard'




class App extends React.Component {
  render() {

    return(
      <div className="App">
      <Dashboard/>
    </div>

    )
  }

}


export default App;
