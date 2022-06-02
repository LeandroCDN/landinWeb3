import React from "react";
import { approveToken } from "../Web3Client";

import './Approve.css';


function Approve () {
  
  const amount = () => {  
    let _amount = "80000000000000000000000000";       
    return _amount;
  };
  
  
  return(
    <div className="divApprove">
        <h2> Aprobar tokens </h2>
        
        <button  
          className="buttonApprove"
          onClick={() => approveToken( amount())}
        >
          Approve Medamon
        </button>
    </div>
  )

}

export { Approve };
