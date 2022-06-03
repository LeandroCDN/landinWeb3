import React from "react";
import './Approve.css';
import './Claim.css';
import { claim } from "../Web3Client";	
import {Check} from './Check';


function Claim ({conected}) {

    
  return(
    <React.Fragment  >
      
      <div className="divClaim" >
          <h2> Claimea tus tokens </h2>
          
          <button  
            className="buttonClaim"
            
            onClick={() => claim()}
          >
            Claim Medamon
          </button>
      </div>     

    </React.Fragment>
  )

}

export { Claim };
