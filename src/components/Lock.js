import React from "react";
import { lock } from "../Web3Client";
import './Lock.css';
var Web3 = require('web3');

function Lock (){
  
  const [valueLock, setValueLock] = React.useState(0);
  const amount = (event) => {
    const amount = (event.target.value);
    setValueLock(Web3.utils.toWei(amount, 'ether'));    
  };
  
  return(
    <div className="divLock">
        <h3>Elige la cantidad de tokens a blockear</h3>
        <span className="spanLock">Block</span>
        <input  
          type="text" 
          placeholder="Cantidad de token" 
          className="inputLock"
          //value = {valueLock}
          onChange = {amount}
        />
        
        <button  
          className="buttonLock"
          onClick={() => {
            console.log(valueLock);
            lock(valueLock);
          }}
        >
          Block
        </button>
    </div>
  )

}

export { Lock };
