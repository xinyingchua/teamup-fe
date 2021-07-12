import React from 'react'
// import './SiteNavBar.scss'


class SiteHeader extends React.Component {
    render () {
        return (

            <ul className="nav">
        
            <li className="nav-item">
                <p className="nav-link">Overview</p>
            </li>
            <li className="nav-item">
                <p className="nav-link" href="/">Link</p>
            </li>

            </ul>

        )
    }
}

export default SiteHeader