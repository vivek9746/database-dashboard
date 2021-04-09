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
            <Card name="Open Database" tool="BUSINESS TRANSACTION PROCESS" icon={faDatabase}/>
            <Card name="Cloud Migration tools" tool="DATA MIGRATION" icon={faCloud}/>
            <Card name="Create an ADW Database" tool="AUTONOMOUS DATA WAREHOUSE" icon={faDatabase}/>
            <Card name="Database1" tool="BUSINESS TRANSACTION PROCESS" icon={faDatabase}/>
            <Card name="Database1" tool="BUSINESS TRANSACTION PROCESS" icon={faDatabase}/>
            <Card name="Store Data" tool="OBJECT STORAGE" icon={faBoxes}/>
            <Card name="Database1" tool="BUSINESS TRANSACTION PROCESS" icon={faDatabase}/>
            <Card name="Setup instance with developer tools" tool="ORACLE CLOUD DEVELOPMENT KIT" icon={faCode}/>
            <Card name="View all my resources" tool="SEARCH" icon={faSearch}/>

            

            
        </div>
    )
}

export default CombinedCards
