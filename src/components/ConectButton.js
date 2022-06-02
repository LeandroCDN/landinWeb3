import React from "react";
import Web3 from "web3";
import './ConectButton.css';
import {init, selectedAccount} from '../Web3Client';

function ConectButton() { 
  const [account, setAccount] = React.useState('Conectar');

  return (
    <button 
      className="ConectButton"
      onClick={() => init({setAccount})}
    >
      
      {account}
    </button>
    
  );
}
export { ConectButton };
