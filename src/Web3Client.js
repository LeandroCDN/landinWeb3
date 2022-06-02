import Web3 from 'web3';
import IERC20 from 'contracts/IERC20.json';
import VestingAbi from 'contracts/Vesting.json'
import {vestingAddress, MedamonAddress} from './Address';

let isInitialized = false;
export let selectedAccount;


export const init = async () => {
	let provider = window.ethereum;

	if (typeof provider !== 'undefined') {
		provider
			.request({ method: 'eth_requestAccounts' })
			.then((accounts) => {
				selectedAccount = accounts[0];
				localStorage.setItem('selectedAccount', selectedAccount);
				console.log(`Selected account is ${selectedAccount}`);
			})
			.catch((err) => {
				console.log(err);
				return;
			});

		window.ethereum.on('accountsChanged', function (accounts) {
			selectedAccount = accounts[0];
			console.log(`Selected account changed to ${selectedAccount}`);
		});
	}

	const web3 = new Web3(provider);
	
	isInitialized = true;
};

const token = async () => {
	const provider = window.ethereum;
	const web3 = new Web3(provider);
	const medamon = new web3.eth.Contract(
		IERC20.abi, 
		MedamonAddress
	);
	return medamon;	
}

export const approveToken = async (amount) => {	
	const erc20 = await token();
	return erc20.methods.approve(vestingAddress, amount).send({from: selectedAccount});
}
 

export const getBalance = async () => {
	const erc20 = await token();
	return erc20.methods.balanceOf(selectedAccount).call();
}

const vestingContract = async () => {
	const provider = window.ethereum;
	const web3 = new Web3(provider);
	const vesting = new web3.eth.Contract(
		VestingAbi,
		vestingAddress
	);
	return vesting;
}

export const lock = async (amount) => {
	const vesting = await vestingContract();
	return vesting.methods.lock(amount).send({from: selectedAccount});
}