import React, { useState } from 'react';
import Web3 from 'web3';

import { Title } from './components/Title';
import { Approve } from './components/Approve';
import { Lock } from './components/Lock';
import { Claim } from './components/Claim';
import { Footer } from './components/Footer';
import {ConectButton} from './components/ConectButton';
import {Check} from './components/Check';



function App() {
  
  const [conected, setConected] = React.useState(undefined);
  const [haveBalance, setHaveBalance] = React.useState(undefined);
  const [checkResult, setCheckResult] = React.useState(undefined);
  const [balance, setBalance] = React.useState(0);
  const [timeToNextClaim, setTimeNextClaim] = React.useState(0);
  
	return (
		<React.Fragment>
      
      <Title/>
      {conected && !haveBalance  && <Approve/>  }
      {conected && !haveBalance  && <Lock  /> }      
      {checkResult &&  timeToNextClaim && <Check /> }
      {!checkResult && haveBalance && <Claim />} 

      <Footer >        
        <ConectButton  
          setConected={setConected}
          setHaveBalance={setHaveBalance}
          setCheckResult={setCheckResult}
          balance={balance}
          setBalance={setBalance}
          timeToNextClaim={timeToNextClaim}
          setTimeNextClaim={setTimeNextClaim}
        />
      </Footer>
    </React.Fragment >
	);
}

export default App;

/*

const initWeb3 = async () => {
  if (account !== 'Conectar' && account !== '') {
    const balance =  await getBalanceLocked();
    const time = await timeNextClaim();
    
    if (balance === 0 ) {
      await setHaveBalance(balance > 0);
               
    }else if (balance > 0 && time === 0) {
      await setCheckResult(time === 0);  
        

    }else if (balance > 0 && time > 0) {
      await setCheckResult(false);  
     
    }else{
      console.log('error');
    }
   
    setConected(true);
  }
 
};*/