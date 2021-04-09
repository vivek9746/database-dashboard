import React from 'react'
import '../Cards/Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Card(props) {
    return (
        <div className="card">
            <div>
            <p className="ptag">{props.tool}</p>
            <p className="nameClass">{props.name}</p>
            <p className="timeClass">{props.time}</p>
            </div>
            <div className="iconTag">
                <FontAwesomeIcon icon={props.icon}></FontAwesomeIcon>
            </div>

        </div>
    )
}

export default Card
