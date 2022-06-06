import React from "react";
import { lock, getBalance } from "../Web3Client";
import './Lock.css';
import './Approve.css';
var Web3 = require('web3');

function Lock (){
  
  const [valueLock, setValueLock] = React.useState(0);
  const amount = async () => {
    const amount = await getBalance();
    await setValueLock(Web3.utils.fromWei(amount, 'wei'));
    console.log("Ammount: "+ amount +".\n Value toLock: "+ valueLock);   
    return (Web3.utils.fromWei(amount, 'wei'));
  };
  
  return(
    <div className="divLock" >
        <h3>Elige la cantidad de tokens a blockear</h3>
        
        <button  
          className="buttonLock"
          onClick={() => {
            console.log("Pre value lock: "+valueLock);
            amount().then(() => {;
              lock(valueLock);
            });            
          }}
        >
          Block
        </button>
        <p>{valueLock}</p>
    </div>
  )

}

export { Lock };

