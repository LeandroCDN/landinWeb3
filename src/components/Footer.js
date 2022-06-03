import React from "react";
import "./Footer.css";

function Footer (props){
  
  return(    
    <footer className= "footer">
      {props.children}
    </footer>
  )

}

export { Footer };





