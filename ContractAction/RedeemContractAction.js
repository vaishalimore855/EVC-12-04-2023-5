import Web3 from "web3";
import { abiRedeem } from "./ABI/Redeem";
import { abiPreSale } from "./ABI/PreSale";

// RPC, Address & ABI
var RPCUrl = "https://data-seed-prebsc-1-s1.binance.org:8545";
var ContractaddressRedeem = "0xf7ce5744EdabfD2f7E07026a44250A7F0d0095E2";
const abiredeem = abiRedeem;

// AddressPreSale & ABIPreSale
var PresaleContractAddress = "0x33BaA373110d36CDf562D4cDA4C153d02d2A45D6"
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



// Redeem

export const setPresaleApprove = async () => {
    console.log("setPresaleApprovecall");
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
            const contracts = new web3.eth.Contract(abiPresale, PresaleContractAddress);
            console.log("setPresaleApprove-PresaleContractAddress", PresaleContractAddress);
            console.log("setPresaleApprove-ContractaddressRedeem", ContractaddressRedeem);
            // console.log("SetPresaleApprovecall",ethers.MaxUint256);
            const txid = await contracts.methods
                .approve(ContractaddressRedeem, "100000000000000000000000000000000000")
                .send({ from: account });
            console.log(txid);
        }
    } catch (error) {
        console.log("approveError", error);
    }
};

export const setSwapPREEVCForEVC = async () => {
    console.log("setSwapPREEVCForEVC")
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
        const contracts = new web3.eth.Contract(abiredeem, ContractaddressRedeem);
        console.log("CONTRACTS", contracts);
        const txid = await contracts.methods.swappreEVCForEVC().send({ from: account });
        console.log(txid);
    }
};
