import React from 'react'
import Card from './Card';
import './CombinedCards.css';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faBoxes } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faCloud } from '@fortawesome/free-solid-svg-icons'

function CombinedCards() {
    return (
        <div className="combinedCards">
            <Card name="Open Database" tool="BUSINESS TRANSACTION PROCESS" icon={faDatabase} time="5-10 mins"/>
            <Card name="Cloud Migration tools" tool="DATA MIGRATION" icon={faCloud} time="5 mins"/>
            <Card name="Create an ADW Database" tool="AUTONOMOUS DATA WAREHOUSE" icon={faDatabase} time="10-20 mins"/>
            <Card name="Database1" tool="BUSINESS TRANSACTION PROCESS" icon={faDatabase} time="5-10 mins"/>
            <Card name="Database1" tool="BUSINESS TRANSACTION PROCESS" icon={faDatabase} time="10-15 mins"/>
            <Card name="Store Data" tool="OBJECT STORAGE" icon={faBoxes} time="10-20 mins"/>
            <Card name="Database1" tool="BUSINESS TRANSACTION PROCESS" icon={faDatabase} time="2-5 mins"/>
            <Card name="Setup instance with developer tools" tool="ORACLE CLOUD DEVELOPMENT KIT" icon={faCode} time="10-15 mins"/>
            <Card name="View all my resources" tool="SEARCH" icon={faSearch} time="1-2 mins"/>

            

            
        </div>
    )
}

export default CombinedCards
