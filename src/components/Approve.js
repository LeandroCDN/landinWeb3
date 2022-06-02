import React from "react";
import { approveToken } from "../Web3Client";

function Approve () {
  
  const amount = () => {
    let _amount = document.getElementById('aprovedTokens').value * 1000000000000000000;    
    console.log(_amount);
    return _amount.toString();
   };
  
  return(
    <div className="divApprove">
        <span className="spanApprove">Approve Medamon</span>
        
        <input  
          type="text" 
          placeholder="Cantidad de token" 
          id="aprovedTokens" 
          className="inputApprove"
        />
        
        <button  
          className="buttonApprove"
          onClick={() => approveToken( amount())}
        >
          Aprrove
        </button>
    </div>
  )

}

export { Approve };