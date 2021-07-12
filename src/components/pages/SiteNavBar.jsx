import React from 'react'
import '../styles/SiteNavBar.scss'

class SiteNavBar extends React.Component {
    render() {
        return (

            <div className="container">
   
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav flex-column">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/">Budget Planning</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/">To Do</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/">Guestlists</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/">Events Scheduling</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/">Design E-Invites</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/">Live Streaming</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/">Seating Arrangement</a>
                            </li>
                        </ul>
                        </div>
                     </div>
                </nav>
         </div>

        )
    }
}

export default SiteNavBar