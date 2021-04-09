import React from 'react'
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger, faSearch } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    return (
        <div className="navigation">
        <div style={{display:'flex'}}>
            <input type="text" placeholder="Search for resources, service and documentation" />
            <div className="iconContainer">
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            </div>
        </div>
            {/* <div className="user">
                <p>US West (Phoenix)</p>
            </div> */}
        </div>
    )
}

export default Navbar
