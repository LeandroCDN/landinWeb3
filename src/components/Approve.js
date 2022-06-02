import React from "react";
import { approveToken } from "../Web3Client";
import './Approve.css';


function Approve () {
  
  const amount = () => {
    let _amount = document.getElementById('aprovedTokens').value * 1000000000000000000;    
    console.log(_amount);
    return _amount.toString();
   };
  
  
  return(
    <div className="divApprove">
        <h2> Aprobar tokens suficientes a vesting contract para que este pueda moverlos ej: 10000 tokens = 10000000000000000000000</h2>

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
          Approve
        </button>
    </div>
  )

}

export { Approve };
