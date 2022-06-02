import React from "react";
import { lock } from "../Web3Client";

function Lock (){
  
  const amount = () => {
    let _amount = document.getElementById('blockTokens').value * 1000000000000000000;    
    console.log(_amount);
    return _amount.toString();
   };

  return(
    <div className="divLock">
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