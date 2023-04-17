import Web3 from "web3";
import { abiEVCNFT } from "./ABI/EVCNFT";
import { abiEVCNFTStake } from "./ABI/EVCNFTStake";
/* global BigInt */
// RPC, Address & ABI
var RPCUrl = "https://data-seed-prebsc-2-s2.binance.org:8545";
var ContractaddressEVCNft = "0xBeBbFEd61Cd77412AFCB9f6b8F861AB3fD168f11";
const abiEVCNft = abiEVCNFT;

// AddressNFTStake & ABINFTStake
var ContractaddressNftStake = "0x83fBB0D4AeAeb5B34f14E0793F3e985dd49A7196";
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

// NFT

export const setMintL1 = async () => {
  console.log("setMintL1")
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
    const contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
    console.log("contractssetMintL1", contracts);
    const to = account;
    console.log("_to", to);
    const evcNFTCost1 = await contracts.methods.cost1().call();

    let evcNFTcost1 = evcNFTCost1.toString();
    console.log("evcNFTcost1", evcNFTcost1)

    let evcCostPer = (evcNFTCost1 * 110) / 100;
    console.log("evcCostPer", evcCostPer);
    let evcCost1 = BigInt(evcCostPer);
    console.log("evcCost1", evcCost1);
    let evccost1 = evcCost1.toString();
    console.log("evccost1", evccost1)

    const mintNft = await contracts.methods
      .mint_Level1_NFT(evccost1, true)
      .send({ from: account });
    console.log("mintNft", mintNft);
  }
};

export const setMintL2 = async () => {
  console.log("setMintL2")
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
    const contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
    console.log(contracts);
    const to = account;
    console.log("_to", to);
    const evcNFTCost2 = await contracts.methods.cost2().call();
    let evcNFTcost2 = evcNFTCost2.toString();
    console.log("evcNFTcost2", evcNFTcost2)

    let evcCostPer = (evcNFTCost2 * 110) / 100;
    console.log("evcCostPer", evcCostPer);
    let evcCost2 = BigInt(evcCostPer);
    console.log("evcCost2", evcCost2);
    let evccost2 = evcCost2.toString();
    console.log("evccost2", evccost2)

    const mintNft = await contracts.methods
      .mint_Level2_NFT(evccost2, true)
      .send({ from: account });
    console.log("mintNft", mintNft);
  }
};

export const setMintL3 = async () => {
  console.log("setMintL3")
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
    const contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
    console.log(contracts);
    const to = account;
    console.log("_to", to);
    const evcNFTCost3 = await contracts.methods.cost3().call();
    let evcNFTcost3 = evcNFTCost3.toString();
    console.log("evcNFTcost3", evcNFTcost3)
    
    let evcCostPer = (evcNFTCost3 * 110) / 100;
    console.log("evcCostPer", evcCostPer);
    let evcCost3 = BigInt(evcCostPer);
    console.log("evcCost3", evcCost3);
    let evccost3 = evcCost3.toString();
    console.log("evccost3", evccost3)

    const mintNft = await contracts.methods
      .mint_Level3_NFT(evccost3, true)
      .send({ from: account });
    console.log("mintNft", mintNft);
  }
};

export const setMintL4 = async () => {
  console.log("setMintL4")
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
    const contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
    console.log(contracts);
    const to = account;
    console.log("_to", to);
    const evcNFTCost4 = await contracts.methods.cost4().call();
    let evcNFTcost4 = evcNFTCost4.toString();
    console.log("evcNFTcost4", evcNFTcost4)

    let evcCostPer = (evcNFTCost4 * 110) / 100;
    console.log("evcCostPer", evcCostPer);
    let evcCost4 = BigInt(evcCostPer);
    console.log("evcCost4", evcCost4);
    let evccost4 = evcCost4.toString();
    console.log("evccost4", evccost4)

    const mintNft = await contracts.methods
      .mint_Level4_NFT(evccost4, true)
      .send({ from: account });
    console.log("mintNft", mintNft);
  }
};

export const setMintL5 = async () => {
  console.log("setMintL5")
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
    const contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
    console.log(contracts);
    const to = account;
    console.log("_to", to);
    const evcNFTCost5 = await contracts.methods.cost5().call();
    let evcNFTcost5 = evcNFTCost5.toString();
    console.log("evcNFTcost5", evcNFTcost5)

    let evcCostPer = (evcNFTCost5 * 110) / 100;
    console.log("evcCostPer", evcCostPer);
    let evcCost5 = BigInt(evcCostPer);
    console.log("evcCost5", evcCost5);
    let evccost5 = evcCost5.toString();
    console.log("evccost5", evccost5)

    const mintNft = await contracts.methods
      .mint_Level5_NFT(evccost5, true)
      .send({ from: account });
    console.log("mintNft", mintNft);
  }
};

export const setMintL6 = async () => {
  console.log("setMintL6")
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
    const contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
    console.log(contracts);
    const to = account;
    console.log("_to", to);
    const evcNFTCost6 = await contracts.methods.cost6().call();
    let evcNFTcost6 = evcNFTCost6.toString();
    console.log("evcNFTcost6", evcNFTcost6)

    let evcCostPer = (evcNFTCost6 * 110) / 100;
    console.log("evcCostPer", evcCostPer);
    let evcCost6 = BigInt(evcCostPer);
    console.log("evcCost6", evcCost6);
    let evccost6 = evcCost6.toString();
    console.log("evccost6", evccost6)

    const mintNft = await contracts.methods
      .mint_Level6_NFT(evccost6, true)
      .send({ from: account });
    console.log("mintNft", mintNft);
  }
};

export const setMintL7 = async () => {
  console.log("setMintL7")
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
    const contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
    console.log(contracts);
    const to = account;
    console.log("_to", to);
    const evcNFTCost7 = await contracts.methods.cost7().call();
    let evcNFTcost7 = evcNFTCost7.toString();
      console.log("evcNFTcost7", evcNFTcost7)

    let evcCostPer = BigInt(evcNFTCost7) + BigInt((evcNFTCost7 * 0.1));
    console.log("evcCostPer", evcCostPer);
    let evcCost7 = BigInt(evcCostPer);
    console.log("evcCost7", evcCost7);
    let evccost7 = evcCost7.toString();
    console.log("evccost7", evccost7)

    const mintNft = await contracts.methods
      .mint_Level7_NFT(evccost7, true)
      .send({ from: account });
    console.log("mintNft", mintNft);
  }
};

export const setMintL8 = async () => {
  console.log("setMintL8")
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
    const contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
    console.log(contracts);
    const to = account;
    console.log("_to", to);
    const evcNFTCost8 = await contracts.methods.cost8().call();
    let evcNFTcost8 = evcNFTCost8.toString();
    console.log("evcNFTcost8", evcNFTcost8)

    let evcCostPer = BigInt(evcNFTCost8) + BigInt((evcNFTCost8 * 0.1));
    console.log("evcCostPer", evcCostPer);
    let evcCost8 = BigInt(evcCostPer);
    console.log("evcCost8", evcCost8);
    let evccost8 = evcCost8.toString();
    console.log("evccost8", evccost8)

    const mintNft = await contracts.methods
      .mint_Level8_NFT(evccost8, true)
      .send({ from: account });
    console.log("mintNft", mintNft);
  }
};

export const setNFTApprove = async (_id) => {
  console.log("setNFTApprove");
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
      const contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
      const approveNFT = await contracts.methods
        .approve(ContractaddressNftStake, _id)
        .send({ from: account });
      console.log("setNFTApprove", approveNFT);
    }
  } catch (error) {
    console.log("approveError", error);
  }
};

export const setNFTApprovalForAll = async () => {
  console.log("setNFTApprovalForAll");
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
      const contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
      const approveForAll = await contracts.methods.setApprovalForAll(ContractaddressNftStake, true).send({ from: account });
      console.log("setNFTApprovalForAll", approveForAll);
    }
  } catch (error) {
    console.log("approveError", error);
  }
};

export const getIsApprovedForAll = async () => {
  console.log("getIsApprovedForAll");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const accounts = await window.ethereum.request({
    method: "eth_accounts",
  });
  const account = accounts[0];
  console.log("getIsApprovedForAll_account", account);
  const evcIsApprovedForAll = await contracts.methods.isApprovedForAll(account, ContractaddressNftStake).call();
  console.log("evcIsApprovedForAll", evcIsApprovedForAll);
  return evcIsApprovedForAll;
};

export const getNFTBalanceOf = async () => {
  console.log("getNFTBalanceOf");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const accounts = await window.ethereum.request({
    method: "eth_accounts",
  });
  const account = accounts[0];
  console.log("getNFTBalanceOf_account", account);
  const evcNFTBalance = await contracts.methods.balanceOf(account).call();
  console.log("evcNFTBalanceOf", evcNFTBalance);
  return evcNFTBalance;
};

export const getWalletOfOwner = async () => {
  console.log("getWalletOfOwner");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const accounts = await window.ethereum.request({
    method: "eth_accounts",
  });
  const account = accounts[0];
  console.log("getWalletOfOwner_account", account);
  const evcWalletOfOwner = await contracts.methods
    .walletOfOwner(account)
    .call();

  const evcWalletofowner = [...evcWalletOfOwner].sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  console.log("getStakedIdsFixStake", evcWalletofowner);

  console.log("evcWalletofowner", evcWalletofowner);
  return evcWalletofowner;
};

export const getOwnerOf = async (_id) => {
  console.log("getOwnerOf");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const evcOwnerOfNFT = await contracts.methods.ownerOf(_id).call();
  console.log("evcOwnerOfNFT", evcOwnerOfNFT);
  return evcOwnerOfNFT;
};

export const getTokenURI = async (_id) => {
  console.log("getTokenURI");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const evcTokenURI = await contracts.methods.tokenURI(_id).call();
  console.log("evcTokenURI", evcTokenURI);
  return evcTokenURI;
};

export const getTotalSupply = async () => {
  console.log("getTotalSupply");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const evcNFTTotalSupply = await contracts.methods.totalSupply().call();
  console.log("evcNFTTotalSupply", evcNFTTotalSupply);
  return evcNFTTotalSupply;
};

export const getHasToken1 = async () => {
  console.log("getHasToken1");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const accounts = await window.ethereum.request({
    method: "eth_accounts",
  });
  const account = accounts[0];
  console.log("getHasToken1_account", account);
  const evcHasToken1 = await contracts.methods._hasToken1(account).call();
  console.log("evcHasToken1", evcHasToken1);
  return evcHasToken1;
};

export const getHasToken2 = async () => {
  console.log("getHasToken2");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const accounts = await window.ethereum.request({
    method: "eth_accounts",
  });
  const account = accounts[0];
  console.log("getHasToken2_account", account);
  const evcHasToken2 = await contracts.methods._hasToken2(account).call();
  console.log("evcHasToken2", evcHasToken2);
  return evcHasToken2;
};

export const getHasToken3 = async () => {
  console.log("getHasToken3");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const accounts = await window.ethereum.request({
    method: "eth_accounts",
  });
  const account = accounts[0];
  console.log("getHasToken3_account", account);
  const evcHasToken3 = await contracts.methods._hasToken3(account).call();
  console.log("evcHasToken3", evcHasToken3);
  return evcHasToken3;
};

export const getHasToken4 = async () => {
  console.log("getHasToken4");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const accounts = await window.ethereum.request({
    method: "eth_accounts",
  });
  const account = accounts[0];
  console.log("getHasToken4_account", account);
  const evcHasToken4 = await contracts.methods._hasToken4(account).call();
  console.log("evcHasToken4", evcHasToken4);
  return evcHasToken4;
};

export const getHasToken5 = async () => {
  console.log("getHasToken5");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const accounts = await window.ethereum.request({
    method: "eth_accounts",
  });
  const account = accounts[0];
  console.log("getHasToken5_account", account);
  const evcHasToken5 = await contracts.methods._hasToken5(account).call();
  console.log("evcHasToken5", evcHasToken5);
  return evcHasToken5;
};

export const getHasToken6 = async () => {
  console.log("getHasToken6");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const accounts = await window.ethereum.request({
    method: "eth_accounts",
  });
  const account = accounts[0];
  console.log("getHasToken6_account", account);
  const evcHasToken6 = await contracts.methods._hasToken6(account).call();
  console.log("evcHasToken6", evcHasToken6);
  return evcHasToken6;
};

export const getHasToken7 = async () => {
  console.log("getHasToken7");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const accounts = await window.ethereum.request({
    method: "eth_accounts",
  });
  const account = accounts[0];
  console.log("getHasToken7_account", account);
  const evcHasToken7 = await contracts.methods._hasToken7(account).call();
  console.log("evcHasToken7", evcHasToken7);
  return evcHasToken7;
};

export const getHasToken8 = async () => {
  console.log("getHasToken8");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const accounts = await window.ethereum.request({
    method: "eth_accounts",
  });
  const account = accounts[0];
  console.log("getHasToken8_account", account);
  const evcHasToken8 = await contracts.methods._hasToken8(account).call();
  console.log("evcHasToken8", evcHasToken8);
  return evcHasToken8;
};

export const getNFTCost1 = async () => {
  console.log("getNFTCost1");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const evcCost1 = await contracts.methods.cost1().call();
  const evcNFTCost1 = await web3.utils.fromWei(evcCost1, "ether");
  console.log("getNFTCost1", evcNFTCost1);
  return evcNFTCost1;
};

export const getNFTCost2 = async () => {
  console.log("getNFTCost2");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const evcCost2 = await contracts.methods.cost2().call();
  const evcNFTCost2 = await web3.utils.fromWei(evcCost2, "ether");
  console.log("getNFTCost2", evcNFTCost2);
  return evcNFTCost2;
};

export const getNFTCost3 = async () => {
  console.log("getNFTCost3");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const evcCost3 = await contracts.methods.cost3().call();
  const evcNFTCost3 = await web3.utils.fromWei(evcCost3, "ether");
  console.log("getNFTCost3", evcNFTCost3);
  return evcNFTCost3;
};

export const getNFTCost4 = async () => {
  console.log("getNFTCost4");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const evcCost4 = await contracts.methods.cost4().call();
  const evcNFTCost4 = await web3.utils.fromWei(evcCost4, "ether");
  console.log("getNFTCost4", evcNFTCost4);
  return evcNFTCost4;
};

export const getNFTCost5 = async () => {
  console.log("getNFTCost5");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const evcCost5 = await contracts.methods.cost5().call();
  const evcNFTCost5 = await web3.utils.fromWei(evcCost5, "ether");
  console.log("getNFTCost5", evcNFTCost5);
  return evcNFTCost5;
};

export const getNFTCost6 = async () => {
  console.log("getNFTCost6");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const evcCost6 = await contracts.methods.cost6().call();
  const evcNFTCost6 = await web3.utils.fromWei(evcCost6, "ether");
  console.log("getNFTCost6", evcNFTCost6);
  return evcNFTCost6;
};

export const getNFTCost7 = async () => {
  console.log("getNFTCost7");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const evcCost7 = await contracts.methods.cost7().call();
  const evcNFTCost7 = await web3.utils.fromWei(evcCost7, "ether");
  console.log("getNFTCost7", evcNFTCost7);
  return evcNFTCost7;
};

export const getNFTCost8 = async () => {
  console.log("getNFTCost8");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const evcCost8 = await contracts.methods.cost8().call();
  const evcNFTCost8 = await web3.utils.fromWei(evcCost8, "ether");
  console.log("getNFTCost8", evcNFTCost8);
  return evcNFTCost8;
};

export const getTotalSupplyL1 = async () => {
  console.log("getTotalSupplyL1");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const evcNFTTotalSupplyL1 = await contracts.methods.totalSupplyOf_L1_NFT().call();
  console.log("getTotalSupplyL1", evcNFTTotalSupplyL1);
  return evcNFTTotalSupplyL1;
};

export const getTotalSupplyL2 = async () => {
  console.log("getTotalSupplyL2");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const evcNFTTotalSupplyL2 = await contracts.methods.totalSupplyOf_L2_NFT().call();
  console.log("getTotalSupplyL2", evcNFTTotalSupplyL2);
  return evcNFTTotalSupplyL2;
};

export const getTotalSupplyL3 = async () => {
  console.log("getTotalSupplyL3");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const evcNFTTotalSupplyL3 = await contracts.methods.totalSupplyOf_L3_NFT().call();
  console.log("getTotalSupplyL3", evcNFTTotalSupplyL3);
  return evcNFTTotalSupplyL3;
};

export const getTotalSupplyL4 = async () => {
  console.log("getTotalSupplyL4");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const evcNFTTotalSupplyL4 = await contracts.methods.totalSupplyOf_L4_NFT().call();
  console.log("getTotalSupplyL4", evcNFTTotalSupplyL4);
  return evcNFTTotalSupplyL4;
};

export const getTotalSupplyL5 = async () => {
  console.log("getTotalSupplyL5");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const evcNFTTotalSupplyL5 = await contracts.methods.totalSupplyOf_L5_NFT().call();
  console.log("getTotalSupplyL5", evcNFTTotalSupplyL5);
  return evcNFTTotalSupplyL5;
};

export const getTotalSupplyL6 = async () => {
  console.log("getTotalSupplyL6");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const evcNFTTotalSupplyL6 = await contracts.methods.totalSupplyOf_L6_NFT().call();
  console.log("getTotalSupplyL6", evcNFTTotalSupplyL6);
  return evcNFTTotalSupplyL6;
};

export const getTotalSupplyL7 = async () => {
  console.log("getTotalSupplyL7");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const evcNFTTotalSupplyL7 = await contracts.methods.totalSupplyOf_L7_NFT().call();
  console.log("getTotalSupplyL7", evcNFTTotalSupplyL7);
  return evcNFTTotalSupplyL7;
};

export const getTotalSupplyL8 = async () => {
  console.log("getTotalSupplyL8");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const evcNFTTotalSupplyL8 = await contracts.methods.totalSupplyOf_L8_NFT().call();
  console.log("getTotalSupplyL8", evcNFTTotalSupplyL8);
  return evcNFTTotalSupplyL8;
};

export const getLevelNFT1 = async () => {
  console.log("getLevelNFT1");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const evcLevelNFT1 = await contracts.methods.LEVEL1_NFT().call();
  console.log("getevcLevelNFT1", evcLevelNFT1);
  return evcLevelNFT1;
};

export const getLevelNFT2 = async () => {
  console.log("getLevelNFT2");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const evcLevelNFT2 = await contracts.methods.LEVEL2_NFT().call();
  console.log("getevcLevelNFT2", evcLevelNFT2);
  return evcLevelNFT2;
};

export const getLevelNFT3 = async () => {
  console.log("getLevelNFT3");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const evcLevelNFT3 = await contracts.methods.LEVEL3_NFT().call();
  console.log("getevcLevelNFT3", evcLevelNFT3);
  return evcLevelNFT3;
};

export const getLevelNFT4 = async () => {
  console.log("getLevelNFT4");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const evcLevelNFT4 = await contracts.methods.LEVEL4_NFT().call();
  console.log("getevcLevelNFT4", evcLevelNFT4);
  return evcLevelNFT4;
};

export const getLevelNFT5 = async () => {
  console.log("getLevelNFT5");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const evcLevelNFT5 = await contracts.methods.LEVEL5_NFT().call();
  console.log("getevcLevelNFT5", evcLevelNFT5);
  return evcLevelNFT5;
};

export const getLevelNFT6 = async () => {
  console.log("getLevelNFT6");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const evcLevelNFT6 = await contracts.methods.LEVEL6_NFT().call();
  console.log("getevcLevelNFT6", evcLevelNFT6);
  return evcLevelNFT6;
};

export const getLevelNFT7 = async () => {
  console.log("getLevelNFT7");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const evcLevelNFT7 = await contracts.methods.LEVEL7_NFT().call();
  console.log("getevcLevelNFT7", evcLevelNFT7);
  return evcLevelNFT7;
};

export const getLevelNFT8 = async () => {
  console.log("getLevelNFT8");
  let contracts = new web3.eth.Contract(abiEVCNft, ContractaddressEVCNft);
  const evcLevelNFT8 = await contracts.methods.LEVEL8_NFT().call();
  console.log("getevcLevelNFT8", evcLevelNFT8);
  return evcLevelNFT8;
};