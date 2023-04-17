import Web3 from "web3";
import { abiEVCTokenStake } from "./ABI/EVCStake"

// RPC, Address & ABI
var RPCUrl = "https://data-seed-prebsc-2-s2.binance.org:8545";
var ContractaddressEVCToken = "0x63796C45Ff2EFA2EFCAA5fd0CA7B47b61DE75176";
const abiEVCToken = abiEVCTokenStake

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



// Flexible Staking

export const setStakeFlex = async (_amount) => {
  console.log("_amount", _amount);
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
    const contracts = new web3.eth.Contract(abiEVCToken, ContractaddressEVCToken);
    console.log(contracts);
    const amount = _amount;
    console.log("amountStakeFlex", amount);
    const _finalamount = web3.utils.toWei(_amount);
    console.log("_finalamountStakeFlex", _finalamount);
    const stakeAmount = await contracts.methods.stakeFlex(_finalamount).send({ from: account });
    console.log("setStakeFlex", stakeAmount);
  }
};

export const setUnstakeFlex = async () => {
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
    const contracts = new web3.eth.Contract(abiEVCToken, ContractaddressEVCToken);
    console.log(contracts);
    const unstakeAmount = await contracts.methods.unStakeFlex().send({ from: account });
    console.log("unstakeFlex", unstakeAmount);
  }
};

export const setClaimRewardFlex = async () => {
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
    const contracts = new web3.eth.Contract(abiEVCToken, ContractaddressEVCToken);
    console.log(contracts);
    const claimrewardFlex = await contracts.methods.claimRewardFlex().send({ from: account });
    console.log("claimrewardFlex", claimrewardFlex);
  }
};

export const getDepositInfoStakeFlex = async () => {
  console.log("getDepositInfoStakeFlex");
  let contracts = new web3.eth.Contract(abiEVCToken, ContractaddressEVCToken);
  const accounts = await window.ethereum.request({
    method: "eth_accounts",
  });
  const account = accounts[0];
  console.log("getDepositInfoStakeFlex_account", account);
  const response = await contracts.methods.getDepositInfoFlex(account).call();
  console.log("response", response);
  let res = response._stake;
  console.log("getDepositInfoStakeFlex_stake", res);
  let stakeFlexTotalDeposit = await web3.utils.fromWei(res, "ether");
  return stakeFlexTotalDeposit;
};

export const getDepositAtStakeFlex = async () => {
  console.log("getDepositAtStakeFlex");
  let contracts = new web3.eth.Contract(abiEVCToken, ContractaddressEVCToken);
  const response = await contracts.methods.getDepositAtFlex().call();
  console.log("getDepositAtStakeFlex_DepositAt", response);
  return response;
};

export const claimLockStakeFlex = async () => {
  console.log("claimLockStakeFlex");
  let contracts = new web3.eth.Contract(abiEVCToken, ContractaddressEVCToken);
  const response = await contracts.methods.claimLockFlex().call();
  console.log("claimLockStakeFlex", response);
  return response;
};



// Fix Staking

export const setStakeFix = async (_amount, _id) => {
  console.log("_amountFix", _amount);
  console.log("_idFix", _id);
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
    const contracts = new web3.eth.Contract(abiEVCToken, ContractaddressEVCToken);
    console.log(contracts);
    const amount = _amount;
    console.log("amountStakeFix", amount);
    const _amounttowei = web3.utils.toWei(_amount);
    console.log("_amounttoweiFix", _amounttowei);
    const finalamount = _amounttowei.split(",");
    console.log("finalamountStakeFix", finalamount);
    const id = _id.split(",");
    console.log("_idStakeFix", id);
    const stakeAmount = await contracts.methods.stakeFix(finalamount, id).send({ from: account });
    console.log("setStakeFix", stakeAmount);
  }
};

export const getStakedIdsFixStake = async () => {
  console.log("getStakedIdsFixStake");
  let contracts = new web3.eth.Contract(abiEVCToken, ContractaddressEVCToken);
  const accounts = await window.ethereum.request({
    method: "eth_accounts",
  });
  const account = accounts[0];
  console.log("getStakedIdsFixStake_account", account);
  const response = await contracts.methods.getStakedIdsFix(account).call();
  const resCopy = [...response].sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  console.log("getStakedIdsFixStake", resCopy);
  return resCopy;
};

export const getUserStakedFix = async () => {
  const stakeDetail = []
  console.log("getUserStakedFix");
  let contracts = new web3.eth.Contract(abiEVCToken, ContractaddressEVCToken);
  const accounts = await window.ethereum.request({
    method: "eth_accounts",
  });
  const account = accounts[0];
  console.log("getUserStakedFix_account", account);
  const ids = await getStakedIdsFixStake();
  console.log("getIDS", ids);
  for (var i = 0; i < ids.length; i++) {
    const response = await contracts.methods.userStakedFix(account, ids[i]).call();
    stakeDetail.push(response)
  }
  console.log("getUserStakedFixnoloop_res", stakeDetail);
  // const response = await contracts.methods.userStakedFix(account, ids[0]).call();
  return stakeDetail;
};

export const setUnstakeFix = async (_id) => {
  console.log("_idStakedFix", _id);
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
    const contracts = new web3.eth.Contract(abiEVCToken, ContractaddressEVCToken);
    console.log(contracts);
    const id = _id.split(",")
    console.log("_idStakedFix", id);
    const unstakeAmount = await contracts.methods.unstakeFix(id).send({ from: account });
    console.log("setUntakeFix", unstakeAmount);
  }
};

export const setClaimRewardFix = async (_id) => {
  console.log("_idClaimFix", _id);
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
    const contracts = new web3.eth.Contract(abiEVCToken, ContractaddressEVCToken);
    console.log(contracts);
    const id = _id.split(",")
    console.log("_idClaimFix", id);
    const unstakeAmount = await contracts.methods.claimRewardFix(id).send({ from: account });
    console.log("setClaimRewardFix", unstakeAmount);
  }
};

export const getStakeTimeFix = async () => {
  console.log("getStakeTimeFix");
  let contracts = new web3.eth.Contract(abiEVCToken, ContractaddressEVCToken);
  const accounts = await window.ethereum.request({
    method: "eth_accounts",
  });
  const account = accounts[0];
  console.log("getStakeTimeFix_account", account);
  const ids = await getStakedIdsFixStake();
  const stakeTime = []
  console.log("getIDS", ids);
  for (var i = 0; i < ids.length; i++) {
    const response = await contracts.methods.userStakedFix(account, ids[i]).call();
    stakeTime.push(response.stakeTime)
  }
  console.log("stakeDetailresponse", stakeTime);
  let res = stakeTime;
  console.log("getStakeTimeFix_stakeTime", res);
  let stakeTimeFix = res;
  console.log("stakeTimeFix", stakeTimeFix);
  return stakeTimeFix;
};

// Both Flex & Fix

export const getBalanceEVC = async () => {
  console.log("getBalanceEVC");
  let contracts = new web3.eth.Contract(abiEVCToken, ContractaddressEVCToken);
  const accounts = await window.ethereum.request({
    method: "eth_accounts",
  });
  const account = accounts[0];
  console.log("getBalanceEVC_account", account);
  const response = await contracts.methods.balanceOf(account).call();
  console.log("getBalanceEVC", response);
  let balanceOfEvc = await web3.utils.fromWei(response, "ether");
  let balanceOfEVC = parseFloat(balanceOfEvc).toFixed(4);
  return balanceOfEVC;
};

export const getAvailableBalanceEVC = async () => {
  console.log("getAvailableBalanceEVC");
  let contracts = new web3.eth.Contract(abiEVCToken, ContractaddressEVCToken);
  // const accounts = await window.ethereum.request({
  //   method: "eth_accounts",
  // });
  // const account = accounts[0];
  // console.log("getBalanceEVC_account", account);
  // const currentOwner = await contracts.methods.owner().call();
  // console.log("currentOwner", currentOwner);
  const response = await contracts.methods.balanceOf(ContractaddressEVCToken).call();
  console.log("getAvailableBalanceEVC", response);
  let BalanceOfEVCflex = await web3.utils.fromWei(response, "ether");
  let BalanceOfEVCFlex = parseFloat(BalanceOfEVCflex).toFixed(2);
  return BalanceOfEVCFlex;
};



/////////////////////////////////////////////////////////////////////////////////////////////

// export const getUserBalance = async () => {
//     const currentProvider = detectCurrentProvider();
//     if (currentProvider) {
//         await currentProvider.request({ method: "eth_requestAccounts" });
//         const web3 = new Web3(currentProvider);
//         const userAccount = await web3.eth.getAccounts();
//         const account = userAccount[0];
//         console.log("account", account);
//         let ethBalanceInWei = await web3.eth.getBalance(account);
//         let ethBalance = await web3.utils.fromWei(
//             ethBalanceInWei.toString(),
//             "ether"
//         );
//         // (Web3: wei to ether)
//         let ethBal = parseFloat(ethBalance).toFixed(4);
//         console.log("accou balance", ethBal);
//         return ethBal;
//     }
//     return false;
// };

// export const getMaticBalance = async () => {
//     if (window.ethereum) {
//         await window.ethereum.request({ method: "eth_requestAccounts" });
//         // Get the selected account
//         const accounts = await window.ethereum.request({ method: "eth_accounts" });
//         const account = accounts[0];

//         const balance = await web3.eth.getBalance(account);
//         console.log("MATICbnb", balance);
//         let weiBalanceBNB = await web3.utils.fromWei(balance, "ether");
//         console.log("weiBalanceBNB", weiBalanceBNB);
//         return weiBalanceBNB;
//     }
//     return false;
// };

// export const getMaticContractBalance = async () => {
//     let GrayContract = new web3.eth.Contract(abiEVCToken, ContractaddressEVCToken);
//     const response = await GrayContract.methods.getContractBalance().call();
//     let weiBalance = await web3.utils.fromWei(response, "ether");
//     return weiBalance;
// };

// export const getMaticDepositLimit = async () => {
//     let GrayContract = new web3.eth.Contract(abiEVCToken, ContractaddressEVCToken);
//     const response = await GrayContract.methods.depositLimit().call();
//     let weiDepositLimit = await web3.utils.fromWei(response, "ether");
//     return weiDepositLimit;
// };

// //trpti =============================================
// // export const SetMaticDeposite = async (value) => {

// //   if(window.ethereum){
// //     const web3 = new Web3(window.ethereum);
// //     await window.ethereum.request({ method: 'eth_requestAccounts' });
// //     // Get the selected account
// //     const accounts = await window.ethereum.request({ method: 'eth_accounts' });
// //     const account = accounts[0];
// //     // const provider = new ethers.BrowserProvider(window.ethereum);
// //     // Get the signer (account owner)
// //     // const signer = provider.getSigner();
// //     // Create a new contract instance using the signer
// //     const contracts = new web3.eth.Contract(abiEVCToken, ContractaddressEVCToken);
// //     console.log(contracts);
// //       const amount = value;
// //         console.log(amount);
// //       const _finalamount = web3.utils.toWei(amount);
// //       console.log(_finalamount);
// //       const txid = await contracts.methods.deposit(_finalamount).send({from :account,value:_finalamount});
// //           console.log(txid);
// //   }

// //   }
// //

// export const SetMaticDeposite = async (value) => {
//     if (window.ethereum) {
//         const web3 = new Web3(window.ethereum);
//         await window.ethereum.request({ method: "eth_requestAccounts" });
//         // Get the selected account
//         const accounts = await window.ethereum.request({ method: "eth_accounts" });
//         const account = accounts[0];
//         // const provider = new ethers.BrowserProvider(window.ethereum);
//         // Get the signer (account owner)
//         // const signer = provider.getSigner();
//         // Create a new contract instance using the signer

//         const currentChainId = await web3.eth.net.getId();
//         if (currentChainId !== 80001) {
//             await web3.currentProvider.request({
//                 method: "wallet_switchEthereumChain",
//                 params: [{ chainId: Web3.utils.toHex(80001) }],
//             });
//         }

//         const contracts = new web3.eth.Contract(abiEVCToken, ContractaddressEVCToken);
//         console.log(contracts);
//         const amount = value;
//         console.log(amount);
//         const _finalamount = web3.utils.toWei(amount);
//         console.log(_finalamount);
//         const txid = await contracts.methods
//             .deposit(_finalamount)
//             .send({ from: account, value: _finalamount });
//         console.log(txid);
//     }
// };

// // export const SetDeposite = async (value) => {
// //     console.log("Truptis code execute");
// //     try {
// //         const amount = value;
// //         const famount = Number(amount);
// //         const _finalamount = web3.utils.toWei(famount.toString(), "ether");
// //         let gasmax = 2000000;
// //         let GrayContract = new web3.eth.Contract(abiEVCToken, ContractaddressEVCToken);

// //         const currentProvider = detectCurrentProvider();
// //         await currentProvider.request({ method: "eth_requestAccounts" });
// //         const Metaweb3 = new Web3(currentProvider);
// //         const userAccount = await Metaweb3.eth.getAccounts();
// //         const account = userAccount[0];
// //         let Gas = await GrayContract.methods
// //             .deposits(_finalamount)
// //             .estimateGas({ from: account, gas: gasmax });
// //         console.log("Gas", Gas);

// //         Gas = Gas == gasmax ? gasmax : Gas;
// //         let GasPrice = await web3.eth.getGasPrice();
// //         let newgas = parseInt(GasPrice) * 100;
// //         const hexString = "0x" + newgas.toString(16);

// //         // let _privatekey = "f50af11727613440590a52ee2062b7c54d936006ec9f42c08238cb0baf99f4a7"
// //         let methodEncodeAbi = await GrayContract.methods
// //             .deposit(_finalamount)
// //             .encodeABI();

// //         const transactionParameters = {
// //             from: account,
// //             to: ContractaddressEVCToken,
// //             data: methodEncodeAbi,
// //             value: _finalamount,
// //             gas: "100000",
// //             chainId: "80001",
// //         };

// //         // txHash is a hex string
// //         // As with any RPC call, it may throw an error
// //         const txHash = await currentProvider.request({
// //             method: "eth_sendTransaction",
// //             params: [transactionParameters],
// //         });
// //         return txHash;
// //     } catch (error) {
// //         console.log("truptierror", error);
// //         toast.error(error);
// //         return error;
// //     }
// // };
//=================================
// // export const claimRewards = async () => {
// //     try {
// //         let gasmax = 2000000;
// //         let GrayContract = new web3.eth.Contract(abiEVCToken, ContractaddressEVCToken);

// //         const currentProvider = detectCurrentProvider();
// //         await currentProvider.request({ method: "eth_requestAccounts" });
// //         const Metaweb3 = new Web3(currentProvider);
// //         const userAccount = await Metaweb3.eth.getAccounts();
// //         const account = userAccount[0];
// //         let Gas = await GrayContract.methods
// //             .claimRewards()
// //             .estimateGas({ from: account, gas: gasmax });
// //         console.log("Gas", Gas);

// //         Gas = Gas == gasmax ? gasmax : Gas;
// //         let GasPrice = await web3.eth.getGasPrice();
// //         let newgas = parseInt(GasPrice) * 100;
// //         const hexString = "0x" + newgas.toString(16);
// //         let methodEncodeAbi = await GrayContract.methods.claimRewards().encodeABI();
// //         const transactionParameters = {
// //             from: account,
// //             to: ContractaddressEVCToken,
// //             data: methodEncodeAbi,
// //             gas: "100000",
// //             chainId: "80001",
// //         };

// //         // txHash is a hex string
// //         // As with any RPC call, it may throw an error
// //         const txHash = await currentProvider.request({
// //             method: "eth_sendTransaction",
// //             params: [transactionParameters],
// //         });
// //         return txHash;
// //     } catch (error) {
// //         console.log("truptierror", error);
// //         toast.error(error);
// //         return error;
// //     }
// // };

// export const getMaticContribution = async () => {
//     let GrayContract = new web3.eth.Contract(abiEVCToken, ContractaddressEVCToken);
//     const response = await GrayContract.methods.getTotalDeposits().call();
//     let weiTotalDeposit = await web3.utils.fromWei(response, "ether");
//     return weiTotalDeposit;
// };

// export const getMaticInvestor = async () => {
//     let GrayContract = new web3.eth.Contract(abiEVCToken, ContractaddressEVCToken);
//     const investors = await GrayContract.methods.totalInvestors().call();
//     return investors;
// };

// export const getMaticClaimable = async () => {
//     let GrayContract = new web3.eth.Contract(abiEVCToken, ContractaddressEVCToken);
//     await window.ethereum.request({ method: "eth_requestAccounts" });
//     // Get the selected account
//     const accounts = await window.ethereum.request({ method: "eth_accounts" });
//     const account = accounts[0];

//     const response = await GrayContract.methods
//         .getUserAllUnclaimedRewards(account)
//         .call();
//     let weiClaimable = await web3.utils.fromWei(response, "ether");
//     return weiClaimable;
// };

// export const getMaticRewardsToDeposit = async (value) => {
//     let GrayContract = new web3.eth.Contract(abiEVCToken, ContractaddressEVCToken);

//     //
//     await window.ethereum.request({ method: "eth_requestAccounts" });
//     // Get the selected account
//     const accounts = await window.ethereum.request({ method: "eth_accounts" });
//     const account = accounts[0];
//     let _depositIds = await GrayContract.methods.getUserDeposits(account).call();
//     console.log("_depositIds", _depositIds);
//     _depositIds = value;
//     const response = await GrayContract.methods
//         .getUnclaimedRewardsForDeposit(_depositIds)
//         .call();
//     console.log("getMaticRewardsToDeposit", response);
//     //

//     // const response = await GrayContract.methods
//     //   .getUnclaimedRewardsForDeposit()
//     //   .call();
//     let weiRewardsToDeposit = await web3.utils.fromWei(response, "ether");
//     return weiRewardsToDeposit;
// };

// export const getMaticTotalRewardPaid = async () => {
//     let GrayContract = new web3.eth.Contract(abiEVCToken, ContractaddressEVCToken);
//     const response = await GrayContract.methods.getTotalRewardsPaid().call();
//     let weiTotalRewardPaid = await web3.utils.fromWei(response, "ether");
//     return weiTotalRewardPaid;
// };

// export const SetMATICClaim = async () => {
//     if (window.ethereum) {
//         const web3 = new Web3(window.ethereum);
//         await window.ethereum.request({ method: "eth_requestAccounts" });
//         // Get the selected account
//         const accounts = await window.ethereum.request({ method: "eth_accounts" });
//         const account = accounts[0];

//         const currentChainId = await web3.eth.net.getId();
//         if (currentChainId !== 80001) {
//             await web3.currentProvider.request({
//                 method: "wallet_switchEthereumChain",
//                 params: [{ chainId: Web3.utils.toHex(80001) }],
//             });
//         }

//         const contracts = new web3.eth.Contract(abiEVCToken, ContractaddressEVCToken);
//         console.log(contracts);
//         const txid = await contracts.methods.claimRewards().send({ from: account });
//         console.log(txid);
//     }
// };

// export const getMaticUserDeposits = async () => {
//     console.log("MaticUserDepositsres");
//     let GrayContract = new web3.eth.Contract(abiEVCToken, ContractaddressEVCToken);

//     const accounts = await window.ethereum.request({
//         method: "eth_accounts",
//     });
//     const account = accounts[0];
//     console.log("getUserDeposits", account);
//     const response = await GrayContract.methods.userInfos(account).call();
//     console.log("response", response);
//     let res = response.totalDeposited;
//     console.log("MaticUserDepositsres", res);

//     let weiTotalDeposit = await web3.utils.fromWei(res, "ether");
//     return weiTotalDeposit;
// };

// // set Matic withdraw
// export const SetMaticWithdraw = async () => {
//     console.log("SetMaticWithdraw");

//     if (window.ethereum) {
//         const web3 = new Web3(window.ethereum);
//         await window.ethereum.request({ method: "eth_requestAccounts" });
//         // Get the selected account
//         const accounts = await window.ethereum.request({ method: "eth_accounts" });
//         const account = accounts[0];
//         const currentChainId = await web3.eth.net.getId();
//         if (currentChainId !== 80001) {
//             await web3.currentProvider.request({
//                 method: "wallet_switchEthereumChain",
//                 params: [{ chainId: Web3.utils.toHex(80001) }],
//             });
//         }

//         const contracts = new web3.eth.Contract(abiEVCToken, ContractaddressEVCToken);
//         console.log(contracts);
//         let GrayContract = new web3.eth.Contract(abiEVCToken, ContractaddressEVCToken);
//         const response = await GrayContract.methods.getUserDeposits(account).call();
//         console.log("responseWithdrawId", response);
//         // let res = response.totalDeposited;
//         // console.log("res",res);
//         const amount = response;
//         console.log("SetMaticWithdraw", amount);
//         // const _finalamount = web3.utils.toWei(amount);
//         // console.log("SetMaticWithdraw", _finalamount);
//         const txid = await contracts.methods
//             .withdraw(amount)
//             .send({ from: account });
//         console.log(txid);
//     }
// };

// export const getMaticepochReturns1 = async () => {
//     try {
//         if (window.ethereum) {
//             // const web3 = new Web3(window.ethereum);
//             await window.ethereum.request({ method: "eth_requestAccounts" });
//             // Get the selected account
//             const accounts = await window.ethereum.request({
//                 method: "eth_accounts",
//             });
//             const account = accounts[0];
//             const contracts = new web3.eth.Contract(abiEVCToken, ContractaddressEVCToken);
//             console.log(contracts);
//             const timestmp = "1677061653";
//             const getMaticEpochR = await contracts.methods
//                 .epochReturns(timestmp)
//                 .call();
//             console.log("getMaticepochReturns", getMaticEpochR);
//         }
//     } catch (err) {
//         console.log(err);
//     }
// };

// //epoc return & latest epoch
// export const getMaticepochReturns = async (value) => {
//     let GrayContract = new web3.eth.Contract(abiEVCToken, ContractaddressEVCToken);
//     const timestmp = value;
//     const response = await GrayContract.methods.epochReturns(timestmp).call();
//     console.log("getMaticepochReturns", response);
//     return response;
// };

// export const getMaticLatestepoch = async () => {
//     let GrayContract = new web3.eth.Contract(abiEVCToken, ContractaddressEVCToken);
//     const response = await GrayContract.methods.latestInitializedEpoch().call();
//     console.log("getMaticLatestepoch", response);
//     return response;
// };

// export const getMaticcurrentepoch = async () => {
//     let GrayContract = new web3.eth.Contract(abiEVCToken, ContractaddressEVCToken);
//     const response = await GrayContract.methods.getCurrentEpoch().call();
//     console.log("getMaticcurrentepoch", response);
//     return response;
// };

// export const getMaticTotalReturnForPeriod = async () => {
//     let GrayContract = new web3.eth.Contract(abiEVCToken, ContractaddressEVCToken);

//     const currentEpoch = await GrayContract.methods.getCurrentEpoch().call();
//     const [todaysReturn, totalUserDeposit] = await Promise.all([
//         GrayContract.methods.epochReturns(currentEpoch).call(),
//         getMaticUserDeposits(),
//     ]);

//     return {
//         oneHourReward: parseFloat(
//             (todaysReturn / 10000 / 24) * totalUserDeposit
//         ).toFixed(2),
//         oneDayReward: parseFloat((todaysReturn / 10000) * totalUserDeposit).toFixed(
//             2
//         ),
//         oneWeekReward: parseFloat(
//             (todaysReturn / 10000) * 7 * totalUserDeposit
//         ).toFixed(2),
//     };
// };