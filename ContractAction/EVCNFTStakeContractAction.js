
import Web3 from "web3";
import { abiEVCNFTStake } from "./ABI/EVCNFTStake"

// RPC, Address & ABI
var RPCUrl = "https://data-seed-prebsc-2-s2.binance.org:8545";
var ContractaddressEVCNftStake = "0x83fBB0D4AeAeb5B34f14E0793F3e985dd49A7196";
const abiEVCNftStake = abiEVCNFTStake;

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



// NFT Stake

export const setStakeNFT = async (_id) => {
    console.log("_idStakeNFT", _id);
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
        const contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
        console.log(contracts);
        const planId = 1;
        console.log("planId", planId);
        const id = _id.split(",")
        console.log("_idStakeNFT", id);
        const nftStake = await contracts.methods.stakeNFT(planId, id).send({ from: account });
        console.log("nftStake", nftStake);
    }
};

export const setWithdrawNFT = async (_id) => {
    console.log("_idNFTUnStake", _id);
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
        const contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
        console.log(contracts);
        const id = _id.split(",")
        console.log("_idWithdrawNFT", id);
        const nftUnStake = await contracts.methods.withdrawNFT(id).send({ from: account });
        console.log("nftUnStake", nftUnStake);
    }
};

export const setClaimReward = async (_id) => {
    console.log("_NFTidClaim", _id);
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
        const contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
        console.log(contracts);
        const id = _id.split(",");
        console.log("_NFTidClaim", id);
        const idClaimValue = await contracts.methods.claimReward(id).send({ from: account });

        if (idClaimValue) {
            if (window.confirm("Successfully Claim")) {
                window.location.reload();
            }
        }
        console.log("setClaimNFTReward", idClaimValue);
    }
};

export const getTokensOfStaker = async () => {
    console.log("getTokensOfStaker");
    let contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
    const accounts = await window.ethereum.request({
        method: "eth_accounts",
    });
    const account = accounts[0];
    console.log("gettokensOfStakerNFTIDs_account", account);
    const tokensOfStakerNFTIDs = await contracts.methods.tokensOfStaker(account).call();
    console.log("tokensOfStakerNFTIDs", tokensOfStakerNFTIDs);
    return tokensOfStakerNFTIDs;
};

export const getUnClaimableReward = async (_id) => {
    console.log("_NFTidClaim", _id);
    const contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
    console.log(contracts);
    // const id = _id.split(",")
    // console.log("_NFTidClaim", id);
    const idUnClaimValue = await contracts.methods.getUnClaimedReward(_id).call();
    console.log("getUnClaimedReward", idUnClaimValue);
    let claimableNFTreward = await web3.utils.fromWei(idUnClaimValue, "ether");
    let UnClaimedReward = parseFloat(claimableNFTreward).toFixed(4);
    console.log("UnClaimedReward", UnClaimedReward);
    return UnClaimedReward;
};

export const getNextClaimTime = async (_id) => {
    console.log("_NFTidNextClaim", _id);
    const contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
    console.log(contracts);
    const accounts = await window.ethereum.request({
        method: "eth_accounts",
    });
    const account = accounts[0];
    console.log("getNFTNextClaim_account", account);
    // const id =( _id.split(",")).toString();
    // console.log("_NFTidNextClaim", id);
    const nextClaim = await contracts.methods.nextClaimTime(account, _id).call();
    console.log("NextClaim111", nextClaim);
    const ClaimTime = window.localStorage.setItem("nextClaim ", nextClaim);
    console.log("ClaimTime", ClaimTime)
    return nextClaim;
};

export const getCurrentAPYOfPlan = async (_id) => {
    console.log("_NFTidClaim", _id);
    const contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
    const planId = 1;
    console.log("planId", planId);
    const CurrentAPY = await contracts.methods.getCurrentAPY(planId).call();
    console.log("CurrentAPY", CurrentAPY);
    const CurrentApyPerc = CurrentAPY / 100;
    console.log("CurrentApyPerc", CurrentApyPerc);
    return CurrentApyPerc;
};

// export const setClaimNFTReward = async () => {
//     if (window.ethereum) {
//         const web3 = new Web3(window.ethereum);
//         await window.ethereum.request({ method: "eth_requestAccounts" });
//         // Get the selected account
//         const accounts = await window.ethereum.request({ method: "eth_accounts" });
//         const account = accounts[0];
//         const currentChainId = await web3.eth.net.getId();
//         if (currentChainId !== 97) {
//             await web3.currentProvider.request({
//                 method: "wallet_switchEthereumChain",
//                 params: [{ chainId: Web3.utils.toHex(97) }],
//             });
//         }
//         const contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
//         console.log(contracts);
//         const claimNFTReward = await contracts.methods.claim().send({ from: account });
//         console.log("claimNFTReward", claimNFTReward);
//     }
// };

export const getStakeBalancesNFTs = async () => {
    console.log("getStakeBalancesNFTs");
    let contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
    const accounts = await window.ethereum.request({
        method: "eth_accounts",
    });
    const account = accounts[0];
    console.log("getStakeBalancesNFTs_account", account);
    const stakeBalancesNFTs = await contracts.methods.stakeBalances(account).call();
    console.log("stakeBalancesNFTs", stakeBalancesNFTs);
    return stakeBalancesNFTs;
};

// export const getTotalClaimableNFTReward = async () => {
//     console.log("getTotalClaimableNFTReward");
//     let contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
//     const accounts = await window.ethereum.request({
//         method: "eth_accounts",
//     });
//     const account = accounts[0];
//     console.log("getTotalClaimableNFTReward_account", account);
//     const totalClaimableReward = await contracts.methods.getTotalClaimable(account).call();
//     let totalClaimableNFTreward = await web3.utils.fromWei(totalClaimableReward, "ether");
//     let totalClaimableNFTReward = parseFloat(totalClaimableNFTreward).toFixed(4);
//     console.log("totalClaimableNFTReward", totalClaimableNFTReward);
//     return totalClaimableNFTReward;
// };

export const getFinalWithdraw = async (_id) => {
    console.log("_NFTidFinalWithdraw", _id);
    const contracts = new web3.eth.Contract(abiEVCNftStake, ContractaddressEVCNftStake);
    console.log(contracts);
    const accounts = await window.ethereum.request({
        method: "eth_accounts",
    });
    const account = accounts[0];
    console.log("getNFTFinalWithdraw_account", account);
    const id = _id.split(",")
    console.log("_NFTidFinalWithdraw", id);
    const nextClaim = await contracts.methods.final_ID_withdraw(account, id).call();
    console.log("getFinalWithdraw", nextClaim);
    return nextClaim;
};