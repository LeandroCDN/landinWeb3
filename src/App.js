import React, { useState } from 'react';
import Web3 from 'web3';
import { ConectButton } from './components/ConectButton';
import { Title } from './components/Title';
import { Approve } from './components/Approve';
import { Lock } from './components/Lock';


function App() {	
  
	return (
		<React.Fragment>
      <ConectButton />
      <Title/>
      <Approve/>
      <Lock/>
    </React.Fragment>
	);
}

export default App;