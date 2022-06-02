import React from "react";
import './Approve.css';
import './Claim.css';
import { claim } from "../Web3Client";	
import {Check} from './Check';


function Claim () {
  
  return(
    <React.Fragment>
      <Check className="classCheck"/>
      <div className="divClaim">
          <h2> Claimea tus tokens </h2>
          
          <button  
            className="buttonClaim"
            onClick={() => claim()}
          >
            Claim Medamon
          </button>
      </div>

      <footer className= "footer">
      <h2> </h2>
      </footer>

    </React.Fragment>
  )

}

export { Claim };
