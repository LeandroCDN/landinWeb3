import React from "react";
import './Approve.css';
import './Claim.css';
import { claim } from "../Web3Client";	
import {Check} from './Check';


function Claim () {
  
  return(
    <React.Fragment>
      <Check className="classCheck"/>
      <div className="divApprove">
          <h2> Claimea tus tokens </h2>
          
          <button  
            className="buttonApprove"
            onClick={() => claim()}
          >
            Claim Medamon
          </button>
          <p>Hola</p>
      </div>



    </React.Fragment>
  )

}

export { Claim };
