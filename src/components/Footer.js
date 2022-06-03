import React from "react";
import { ConectButton } from './ConectButton';
import "./Footer.css";

function Footer ({setConected}){
  
  return(    
    <footer className= "footer">
      <ConectButton  setConected={setConected}/>
    </footer>
  )

}

export { Footer };





