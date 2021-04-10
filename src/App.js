import React, { useEffect, useState } from "react";
import './App.css';
import Card from './components/Cards/Card';
import CombinedCards from './components/Cards/CombinedCards';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faHamburger, faSearch, faShip } from '@fortawesome/free-solid-svg-icons'
import Allcards from "./components/Cards/Allcards";
import Linegraph from "./components/Chart/Linegraph";
import Newgraph from "./components/Chart/Newgraph";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}


function App() {
  const [showSidebarFlag,setShowSidebarFlag]= useState(0);

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

function showSidebar(){
  if(showSidebarFlag===0){
    setShowSidebarFlag(1);

  }
  else{
    setShowSidebarFlag(0)
  }
}


  return (
    <div className="App">
      {/* <h1 style={{ position:'absolute',zIndex:'199'}}>{windowDimensions.width}</h1> */}
      <span>
      <div className="burger" onClick={showSidebar}>
            <FontAwesomeIcon icon={faHamburger}></FontAwesomeIcon>
        </div>
      <div className="company">
          <FontAwesomeIcon icon={faShip}></FontAwesomeIcon>
          <text style={{fontSize:'1vw'}}>Some Company</text>
      </div>
      </span>
     <Navbar/>
      { showSidebarFlag? <Sidebar/> :showSidebarFlag===0 && windowDimensions.width>500? <Sidebar/>:''}

      <div className="combine">  
      <Allcards/> 
      {/* <Linegraph/>    */}
      {/* <Newgraph/> */}
      {/* <CombinedCards/> */}
      {/* <Card name="New Name"/> */}
      </div>
    </div>
  );
}

export default App;
