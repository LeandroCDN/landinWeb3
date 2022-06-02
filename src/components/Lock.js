import React from "react";
import { lock } from "../Web3Client";
import './Lock.css';

function Lock (){
  
  const amount = () => {
    let _amount = document.getElementById('blockTokens').value * 1000000000000000000;    
    console.log(_amount);
    return _amount.toString();
   };

  return(
    <div className="divLock">
        <h3>Blockear tokens a vesting contract 75 tokens = 75000000000000000000  - numero recomendado</h3>
        <span className="spanLock">Block</span>
        <input  
          type="text" 
          placeholder="Cantidad de token" 
          id="blockTokens" 
          className="inputLock"
        />
        
        <button  
          className="buttonLock"
          onClick={() => lock(amount())}
        >
          Block
        </button>
    </div>
  )

}

export { Lock };
