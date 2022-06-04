import React from "react";
import Web3 from "web3";
import './ConectButton.css';
import {init, getBalanceLocked , timeNextClaim} from '../Web3Client';

function ConectButton({setConected, setHaveBalance, setCheckResult, setBalance, setTimeNextClaim, balance, timeToNextClaim })  { 
  const [account, setAccount] = React.useState('Conectar');


  React.useEffect( () => {
    const initWeb3 = async () => {
      if (account !== 'Conectar' && account !== '') {        
        await setBalance(await getBalanceLocked());
        await setTimeNextClaim(await timeNextClaim());
        await setCheckResult(timeToNextClaim > 0);
        setConected(true);
      }
    };
    initWeb3();
  }, [account]);

  React.useEffect( () => {
    setHaveBalance(balance > 0);
    console.log(balance);
  }, [balance]);

  React.useEffect( () => {
    setCheckResult(timeToNextClaim > 0);
    console.log("use Efect 1: " +timeToNextClaim);
  }, [timeToNextClaim]);



  async function configureState() {    
    await init(setAccount);  
       
    await setBalance(await getBalanceLocked());
    await setTimeNextClaim(await timeNextClaim());
    await setCheckResult(timeToNextClaim > 0);
    console.log("Use Efect fn 1:"+ timeToNextClaim>0);
    
  }
  
  return (
    <button 
      className="ConectButton"
      onClick={() => configureState()}
    >      
      {account}
    </button>
    
  );
}
export { ConectButton };
