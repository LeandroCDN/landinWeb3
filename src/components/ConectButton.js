import React from "react";
import Web3 from "web3";
import './ConectButton.css';
import {init, getBalanceLocked , timeNextClaim} from '../Web3Client';

function ConectButton({setConected, setHaveBalance, setCheckResult}) { 
  const [account, setAccount] = React.useState('Conectar');


  React.useEffect( () => {
    const initWeb3 = async () => {
      if (account !== 'Conectar' && account !== '') {
        const balance =  await getBalanceLocked();
        const time = await timeNextClaim();
        if (balance === 0 ) {
          await setHaveBalance(balance > 0);           
        }else if (balance > 0 && time === 0) {
          await setCheckResult(time === 0);     

        }else if (balance > 0 && time > 0) {
          await setCheckResult(true);  
        }

        setConected(true);
      }
    };
    initWeb3();
  }, [account]);

  async function configureState() {
    await init(setAccount);  
    
  }
  
  return (
    <button 
      className="ConectButton"
      onClick={configureState}
    >      
      {account}
    </button>
    
  );
}
export { ConectButton };
