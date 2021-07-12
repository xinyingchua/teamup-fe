import React from 'react'
import './App.css';

// PAGES // 
import SiteNavBar from './components/pages/SiteNavBar'
import SiteHeader from './components/pages/SiteHeader'

class App extends React.Component {
  render() {

    return(
      <div className="App">
      <header className="App-header">
        <div className="row">
            <div className="col-2">
              <SiteNavBar/>
            </div>
            <div className="col-10">
              <SiteHeader/>
            </div>
        </div>
      </header>
    </div>

    )
  }

}


export default App;
