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
  
  const [conected, setConected] = React.useState(false);
  const [haveBalance, setHaveBalance] = React.useState(false);
  const [checkResult, setCheckResult] = React.useState(false);
  
	return (
		<React.Fragment>
      
      <Title/>
      {conected && !haveBalance && <Approve/>  }
      {!haveBalance && <Lock  /> }      
      {checkResult && <Check/> }
      {!checkResult && haveBalance && <Claim />}     
      <Footer >        
        <ConectButton  
          setConected={setConected}
          setHaveBalance={setHaveBalance}
          setCheckResult={setCheckResult}
        />
      </Footer>
    </React.Fragment >
	);
}

export default App;