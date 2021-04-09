import React from 'react'
import './Sidebar.css';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapsible from 'react-collapsible';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faCloud } from '@fortawesome/free-solid-svg-icons'
import { faMicrochip } from '@fortawesome/free-solid-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faServer } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(14),
      fontWeight: theme.typography.fontWeightRegular,
    },
    acc:{
        backgroundColor:'transparent',
        boxShadow:'none',
        cursor:'pointer',
        padding:0,
        color:'white'
        
    },
    nc:{
        backgroundColor:'black',
    },
    np:{
        paddingLeft:"0px",
        paddingRight:'0px'
    }
    
  }));
  

function Sidebar() {
    const classes = useStyles();
    return (
        <div className="sidebar">
            {/* <div className="testColl"> */}
                {/* <Collapsible trigger="Expand" triggerWhenOpen="Collapse">
                    <p>
                        This is the collapsible content. It can be any element or React
                        component you like.
                </p>
                    <p>
                        It can even be another Collapsible component. Check out the next
                        section!
                </p>
                </Collapsible> */}
                <div className="allListContainer">
                <div style={{color:'white',display:'flex',justifyContent:"flex-start"}}><FontAwesomeIcon style={{color:'white',margin:'0px 10px'}} icon={faMicrochip}></FontAwesomeIcon> <Typography style={{fontSize:'1vw'}}>Core Infrasctructure</Typography></div>
           <div className={classes.acc}>
                <Accordion className={classes.acc+" "+"acc"+" "+"other"}>
                    <AccordionSummary className="acc"
                        expandIcon={<FontAwesomeIcon style={{color:'white'}} icon={faChevronDown}></FontAwesomeIcon>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>Compute</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.np+" "+"acc"}>
                        <ul>
                            <li>
                               Instances
                            </li>
                            <li>
                             Dedicated Virtual Machine Hosts
                            </li>
                            <li>
                               Instance Configuration
                            </li>
                            <li>
                               Instance Pools
                            </li>
                            <li>
                               Cluster Networks
                            </li>
                            <li>
                               Autoscaling Configurations
                            </li>
                            <li>
                               Custom Images
                            </li>
                            <li>
                               Boot Volumes
                            </li>
                            <li>
                               Boot Volume Backup
                            </li>
                            <li>
                              OS Management
                            </li>
                        </ul>
                    </AccordionDetails>
                </Accordion>
                </div>
                <div className={classes.acc}>
                <Accordion className={classes.acc+" "+"acc"+" "+"other"}>
                    <AccordionSummary className="acc"
                        expandIcon={<FontAwesomeIcon style={{color:'white'}} icon={faChevronDown}></FontAwesomeIcon>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>Block Storage</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.np+" "+"acc"}>
                        <ul>
                            <li>
                                HI
                            </li>
                            <li>
                                HI
                            </li>
                            <li>
                                HI
                            </li>
                        </ul>
                    </AccordionDetails>
                </Accordion>
                </div>
                <div className={classes.acc}>
                <Accordion className={classes.acc+" "+"acc"+" "+"other"}>
                    <AccordionSummary className="acc"
                        expandIcon={<FontAwesomeIcon style={{color:'white'}} icon={faChevronDown}></FontAwesomeIcon>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>File Storage</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.np+" "+"acc"}>
                        <ul>
                            <li>
                                HI
                            </li>
                            <li>
                                HI
                            </li>
                            <li>
                                HI
                            </li>
                        </ul>
                    </AccordionDetails>
                </Accordion>
                </div>
                <div className={classes.acc}>
                <Accordion className={classes.acc+" "+"acc"+" "+"other"}>
                    <AccordionSummary className="acc"
                        expandIcon={<FontAwesomeIcon style={{color:'white'}} icon={faChevronDown}></FontAwesomeIcon>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>Networking</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.np+" "+"acc"}>
                        <ul>
                            <li>
                                HI
                            </li>
                            <li>
                                HI
                            </li>
                            <li>
                                HI
                            </li>
                        </ul>
                    </AccordionDetails>
                </Accordion>
                </div>
                <div style={{color:'white',marginTop:'1vw',display:'flex',justifyContent:"flex-start"}}><FontAwesomeIcon style={{color:'white',margin:'0px 10px'}} icon={faCloud}></FontAwesomeIcon> <Typography style={{fontSize:'1vw'}}>Oracle Database</Typography></div>
                <div className={classes.acc}>
                <Accordion className={classes.acc+" "+"acc"+" "+"other"}>
                    <AccordionSummary className="acc"
                        
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>Overview</Typography>
                    </AccordionSummary>

                </Accordion>
                </div>
                <div className={classes.acc}>
                <Accordion className={classes.acc+" "+"acc"+" "+"other"}>
                    <AccordionSummary className="acc"
                       
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>Autonomous Data Warehouse</Typography>
                    </AccordionSummary>
         
                </Accordion>
                </div>
                <div className={classes.acc}>
                
                <Accordion className={classes.acc+" "+"acc"+" "+"other"}>
                    <AccordionSummary className="acc"
                        
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>Autonomous JSON Database</Typography>
                    </AccordionSummary>
                   
                </Accordion>
                </div>
                <div className={classes.acc}>
                
                <Accordion className={classes.acc+" "+"acc"+" "+"other"}>
                    <AccordionSummary className="acc"
                        
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>Autonomous Transaction Processing</Typography>
                    </AccordionSummary>
                   
                </Accordion>
                </div>
                <div className={classes.acc}>
                
                <Accordion className={classes.acc+" "+"acc"+" "+"other"}>
                    <AccordionSummary className="acc"
                        
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>Bare Metal, VM, Exadata</Typography>
                    </AccordionSummary>
                   
                </Accordion>
                </div>

                <div className={classes.acc}>
                
                <Accordion className={classes.acc+" "+"acc"+" "+"other"}>
                    <AccordionSummary className="acc"
                        
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>Exadata Cloud@Customer</Typography>
                    </AccordionSummary>
                   
                </Accordion>
                </div>

                <div className={classes.acc}>
                
                <Accordion className={classes.acc+" "+"acc"+" "+"other"}>
                    <AccordionSummary className="acc"
                        
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>External Database</Typography>
                    </AccordionSummary>
                   
                </Accordion>
                </div>
                <div style={{color:'white',marginTop:'1vw',display:'flex',justifyContent:"flex-start"}}><FontAwesomeIcon style={{color:'white',margin:'0px 10px'}} icon={faDatabase}></FontAwesomeIcon> <Typography style={{fontSize:'10pt'}}>Databases</Typography></div>
                <div className={classes.acc}>
                <Accordion className={classes.acc+" "+"acc"+" "+"other"}>
                    <AccordionSummary className="acc"
                        expandIcon={<FontAwesomeIcon style={{color:'white'}} icon={faChevronDown}></FontAwesomeIcon>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>MySQL</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.np+" "+"acc"}>
                        <ul>
                            <li>
                                HI
                            </li>
                            <li>
                                HI
                            </li>
                            <li>
                                HI
                            </li>
                        </ul>
                    </AccordionDetails>
                </Accordion>
                </div>
                <div className={classes.acc}>
                
                <Accordion className={classes.acc+" "+"acc"+" "+"other"}>
                    <AccordionSummary className="acc"
                        
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>NoSQL</Typography>
                    </AccordionSummary>
                   
                </Accordion>
                </div>

                <div style={{color:'white',marginTop:'1vw',display:'flex',justifyContent:"flex-start"}}><FontAwesomeIcon style={{color:'white',margin:'0px 10px'}} icon={faServer}></FontAwesomeIcon> <Typography style={{fontSize:'10pt'}}>Database Related Service</Typography></div>
                <div className={classes.acc}>
                <Accordion className={classes.acc+" "+"acc"+" "+"other"}>
                    <AccordionSummary className="acc"
                        expandIcon={<FontAwesomeIcon style={{color:'white'}} icon={faChevronDown}></FontAwesomeIcon>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>APEX Application Development</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.np+" "+"acc"}>
                        <ul>
                            <li>
                                HI
                            </li>
                            <li>
                                HI
                            </li>
                            <li>
                                HI
                            </li>
                        </ul>
                    </AccordionDetails>
                </Accordion>
                </div>
                <div className={classes.acc}>
                
                <Accordion className={classes.acc+" "+"acc"+" "+"other"}>
                    <AccordionSummary className="acc"
                        
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>Data Safe</Typography>
                    </AccordionSummary>
                   
                </Accordion>
                </div>

            {/* </div> */}
            </div>
        </div>
    )
}

export default Sidebar
