import Web3 from "web3";
import { abiPreSale } from "./ABI/PreSale";

// RPC, Address & ABI
var RPCUrl = "https://data-seed-prebsc-1-s1.binance.org:8545";
var ContractaddressPresale = "0x33BaA373110d36CDf562D4cDA4C153d02d2A45D6";
const abiPresale = abiPreSale;

// HttpProvider
var web3 = new Web3(new Web3.providers.HttpProvider(RPCUrl));

// CurrentProvider
const detectCurrentProvider = () => {
  let provider;
  if (window.ethereum) {
    provider = window.ethereum;
  } else if (window.web3) {
    provider = window.web3.currentProvider;
  } else {
    console.log("Non-ethereum browser detected. You should install Metamask");
  }
  return provider;
};



// PreSale

export const setBuyPreEVC = async (_amount) => {
  if (window.ethereum) {
    const web3 = new Web3(window.ethereum);
    await window.ethereum.request({ method: "eth_requestAccounts" });
    // Get the selected account
    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    const account = accounts[0];
    const currentChainId = await web3.eth.net.getId();
    if (currentChainId !== 97) {
      await web3.currentProvider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: Web3.utils.toHex(97) }],
      });
    }
    const contracts = new web3.eth.Contract(abiPresale, ContractaddressPresale);
    console.log(contracts);
    const amount = _amount;
    console.log("amountBuyPreEVC", amount);
    const _finalamount = web3.utils.toWei(_amount);
    console.log("_finalamount", _finalamount);
    const txid = await contracts.methods.buypreEVC(_finalamount).send({ from: account });
    console.log(txid);
  }
};

export const getEVCPresaleDuration = async () => {
  let evcContract = new web3.eth.Contract(abiPresale, ContractaddressPresale);
  const response = await evcContract.methods.presaleDuration().call();
  console.log("EVCPresaleDuration", response);
  return response;
};

export const getBalanceOfPreSale = async () => {
  console.log("getBalanceOfPreSale");
  let preevcflexstake = new web3.eth.Contract(abiPresale, ContractaddressPresale);
  const accounts = await window.ethereum.request({
    method: "eth_accounts",
  });
  const account = accounts[0];
  console.log("getBalanceOfPreSale", account);
  const response = await preevcflexstake.methods.balanceOf(account).call();
  console.log("getBalanceOfPreSale", response);
  let BalanceOfPreSale = await web3.utils.fromWei(response, "ether");
  return BalanceOfPreSale;
};

export const getUserPreEvctotal = async () => {
  console.log("getUserPreEvctotal");
  let preevctotal = new web3.eth.Contract(abiPresale, ContractaddressPresale);
  const accounts = await window.ethereum.request({
    method: "eth_accounts",
  });
  const account = accounts[0];
  console.log("getUserPreEvctotalacc", account);
  const PreEvctotal = await preevctotal.methods.userpreEVCTotally(account).call();
  console.log("getUserPreEvctotal", PreEvctotal);
  let UserPreEvctotal = await web3.utils.fromWei(PreEvctotal, "ether");
  return UserPreEvctotal;
};

export const getPreEvcTotalSupply = async () => {
  let preevctotsupply = new web3.eth.Contract(abiPresale, ContractaddressPresale);
  const totalsupply = await preevctotsupply.methods.preevcMaximumSupply().call();
  let totalsupplyPreEVC = await web3.utils.fromWei(totalsupply, "ether");
  console.log("totalsupplyPreEVC", totalsupplyPreEVC);
  return totalsupplyPreEVC;
};