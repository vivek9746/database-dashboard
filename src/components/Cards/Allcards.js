import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import CombinedCards from './CombinedCards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './Allcards.css';
import Newgraph from '../Chart/Newgraph';

const useStyles = makeStyles((theme) => ({
    // root: {
      
    // },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
      color:'black'
    },
  }));
  

function Allcards() {
    const classes = useStyles();
    return (
        <div className="topParent">
        <div className="allcards">
            <Accordion>
        <AccordionSummary
          expandIcon={<FontAwesomeIcon style={{color:'gray'}} icon={faChevronDown}></FontAwesomeIcon>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>My Workarea</Typography>
        </AccordionSummary>
        <AccordionDetails style={{padding:'20px 0px',backgroundColor:'#F3F3F3'}}>
          <CombinedCards/>
        </AccordionDetails>
      </Accordion>
      <Newgraph/>
        </div>
        
        </div>
    )
}

export default Allcards
