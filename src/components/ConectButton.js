import React from "react";
import Web3 from "web3";
import './ConectButton.css';
import {init, selectedAccount} from '../Web3Client';

function ConectButton() { 
  // const onClickButton = () => {
  //   init();
  // };

  return (
    <button 
      className="ConectButton"
      onClick={() => init()}
    >
      Conectar Wallet
      {selectedAccount}
    </button>
    
  );
}
export { ConectButton };
