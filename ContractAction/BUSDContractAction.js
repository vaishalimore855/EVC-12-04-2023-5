import Web3 from "web3";
import { abiBUSD } from "./ABI/BUSD.js";
import { abiEVCNFT } from "./ABI/EVCNFT.js";
import { abiPreSale } from "./ABI/PreSale.js";

// RPC, Address & ABI
var RPCUrl = "https://data-seed-prebsc-1-s1.binance.org:8545";
var ContractaddressBUSD = "0x3ed64D74A7191f404d53eddAC90cCb66Ee42e45C";
const abiBusd = abiBUSD;

// AddressNFT & ABINFT
var NftContractaddress = "0xBeBbFEd61Cd77412AFCB9f6b8F861AB3fD168f11"
const abiEvcNft = abiEVCNFT;

// AddressPreSale & ABIPreSale
var PresaleContractaddress = "0x33BaA373110d36CDf562D4cDA4C153d02d2A45D6"
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



// BUSD

export const setBUSD_NFTApprove = async () => {
  console.log("setBUSD_NFTApprove");
  try {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });
      // Get the selected account
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      const account = accounts[0];
      const currentChainId = await web3.eth.net.getId();
      if (currentChainId !== 97) {
        await web3.currentProvider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: Web3.utils.toHex(97) }],
        });
      }
      const contracts = new web3.eth.Contract(abiBusd, ContractaddressBUSD);
      console.log("setBUSD_NFTApprove_NFTContractAddress", NftContractaddress);
      console.log("setBUSD_NFTApprove_ContractaddressBUSD", ContractaddressBUSD);
      // console.log("setBUSD_NFTApprovecall",ethers.MaxUint256);
      const approveNFT = await contracts.methods
        .approve(NftContractaddress, "100000000000000000000000000000000000")
        .send({ from: account });
      console.log("setBUSD_NFTApprove", approveNFT);
    }
  } catch (error) {
    console.log("approveError", error);
  }
};

export const setBUSD_PresaleApprove = async () => {
  console.log("setBUSD_PresaleApprove");
  try {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });
      // Get the selected account
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      const account = accounts[0];
      const currentChainId = await web3.eth.net.getId();
      if (currentChainId !== 97) {
        await web3.currentProvider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: Web3.utils.toHex(97) }],
        });
      }
      const contracts = new web3.eth.Contract(abiBusd, ContractaddressBUSD);
      console.log("setBUSD_PresaleApprove_NFTContractAddress", PresaleContractaddress);
      console.log("setBUSD_PresaleApprove_ContractaddressBUSD", ContractaddressBUSD);
      // console.log("setBUSD_PresaleApprovecall",ethers.MaxUint256);
      const approveNFT = await contracts.methods
        .approve(PresaleContractaddress, "100000000000000000000000000000000000")
        .send({ from: account });
      console.log("setBUSD_PresaleApprove", approveNFT);
    }
  } catch (error) {
    console.log("approveError", error);
  }
};