import React from "react";
import Web3 from "web3";
import './ConectButton.css';
import {init} from '../Web3Client';

function ConectButton({setConected}) { 
  const [account, setAccount] = React.useState('Conectar');
  
  return (
    <button 
      className="ConectButton"
      onClick={() => init(setAccount)
        .then(() => setConected(true))}
    >      
      {account}
    </button>
    
  );
}
export { ConectButton };
