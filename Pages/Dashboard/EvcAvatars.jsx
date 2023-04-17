import React, { useState, useEffect } from "react";
import Web3 from "web3";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";

import busd from "../../assets/img/dashboard/icons/busd.png";

import Avatar1 from "../../assets/img/dashboard/img/avatar-1.png";
import Avatar2 from "../../assets/img/dashboard/img/avatar-2.png";
import Avatar3 from "../../assets/img/dashboard/img/avatar-3.png";
import Avatar4 from "../../assets/img/dashboard/img/avatar-4.png";
import Avatar5 from "../../assets/img/dashboard/img/avatar-5.png";
import Avatar6 from "../../assets/img/dashboard/img/avatar-6.png";
import Avatar7 from "../../assets/img/dashboard/img/avatar-7.png";
import Avatar8 from "../../assets/img/dashboard/img/avatar-8.png";

import level1 from "../Dashboard/Mint/Images/level1.png";
import level2 from "../Dashboard/Mint/Images/level2.png";
import level3 from "../Dashboard/Mint/Images/level3.png";
import level4 from "../Dashboard/Mint/Images/level4.png";
import level5 from "../Dashboard/Mint/Images/level5.png";
import level6 from "../Dashboard/Mint/Images/level6.png";
import level7 from "../Dashboard/Mint/Images/level7.png";
import level8 from "../Dashboard/Mint/Images/level8.png";

import {
  setMintL8,
  setMintL7,
  setMintL6,
  setMintL5,
  setMintL4,
  setMintL3,
  setMintL2,
  setMintL1,
} from "../../ContractAction/EVCNFTContractAction";
import {
  getHasToken1,
  getHasToken2,
  getHasToken3,
  getHasToken4,
  getHasToken5,
  getHasToken6,
  getHasToken7,
  getHasToken8,
} from "../../ContractAction/EVCNFTContractAction";

import { setBUSD_NFTApprove } from "../../ContractAction/BUSDContractAction";
import { abiBUSD } from "../../ContractAction/ABI/BUSD";

import BlankPage from "./BlankPage";

var ContractaddressBUSD = "0x3ed64D74A7191f404d53eddAC90cCb66Ee42e45C";
var ContractaddressEVCNft = "0xBeBbFEd61Cd77412AFCB9f6b8F861AB3fD168f11";

// const evc_avatars = [
//     {
//         thumb: level8,
//         title: "CryptoCap Tycoon",
//         evc_no: "#EVC 8",
//         price: "$55,000",
//         bv: "$50,000",
//     },
//     {
//         thumb: level7,
//         title: "Bitcoin Billionaire",
//         evc_no: "#EVC 7",
//         price: "$27,500",
//         bv: "$25,000"
//     },
//     {
//         thumb: level6,
//         title: "Blockchain Mogul",
//         evc_no: "#EVC 6",
//         price: "$11,000",
//         bv: "$10,000"
//     },
//     {
//         thumb: level5,
//         title: "Crypto King",
//         evc_no: "#EVC 5",
//         price: "$5,500",
//         bv: "$5,000"
//     },
//     {
//         thumb: level4,
//         title: "Crypto Investor",
//         evc_no: "#EVC 4",
//         price: "$2,750",
//         bv: "$2,5OO"
//     },
//     {
//         thumb: level3,
//         title: "Crypto Entrepreneur",
//         evc_no: "#EVC 3",
//         price: "$1,100",
//         bv: "$1,000"
//     },
//     {
// thumb: level2,
// title: "Crypto Enthusiast",
// evc_no: "#EVC 2",
// price: "$550",
// bv: "$500"
//     },
//     {
// thumb: level1,
// title: "Crypto Newbies",
// evc_no: "#EVC 1",
// price: "$110",
// bv: "$100"
//     },
// ]

const evc_avatars = [
  {
    thumb: level1,
    title: "Crypto Newbies",
    evc_no: "#EVC 1",
    price: "$110",
    bv: "$100",
  },
  {
    thumb: level2,
    title: "Crypto Enthusiast",
    evc_no: "#EVC 2",
    price: "$550",
    bv: "$500",
  },
  {
    thumb: level3,
    title: "Crypto Entrepreneur",
    evc_no: "#EVC 3",
    price: "$1,100",
    bv: "$1,000",
  },
  {
    thumb: level4,
    title: "Crypto Investor",
    evc_no: "#EVC 4",
    price: "$2,750",
    bv: "$2,5OO",
  },
  {
    thumb: level5,
    title: "Crypto King",
    evc_no: "#EVC 5",
    price: "$5,500",
    bv: "$5,000",
  },
  {
    thumb: level6,
    title: "Blockchain Mogul",
    evc_no: "#EVC 6",
    price: "$11,000",
    bv: "$10,000",
  },
  {
    thumb: level7,
    title: "Bitcoin Billionaire",
    evc_no: "#EVC 7",
    price: "$27,500",
    bv: "$25,000",
  },
  {
    thumb: level8,
    title: "CryptoCap Tycoon",
    evc_no: "#EVC 8",
    price: "$55,000",
    bv: "$50,000",
  },
];

const getNtf = async (value) => {
  alert(value);
  switch (value) {
    case "#EVC 8":
      return await setMintL8();
      break;
    case "#EVC 7":
      return await setMintL7();
      break;
    case "#EVC 6":
      return await setMintL6();
      break;
    case "#EVC 5":
      return await setMintL5();
      break;
    case "#EVC 4":
      return await setMintL4();
      break;
    case "#EVC 3":
      return await setMintL3();
      break;
    case "#EVC 2":
      return await setMintL2();
      break;
    case "#EVC 1":
      return await setMintL1();
      break;
    default:
    // code block
  }
};

const EvcAvatars = ({ title }) => {
  const newAddress = window.localStorage.getItem("connectedAccount");

  const [approveBUSDValue, setApproveBUSDValue] = useState();
  const [hasToken1, setHasToken1] = useState();
  const [hasToken2, setHasToken2] = useState();
  const [hasToken3, setHasToken3] = useState();
  const [hasToken4, setHasToken4] = useState();
  const [hasToken5, setHasToken5] = useState();
  const [hasToken6, setHasToken6] = useState();
  const [hasToken7, setHasToken7] = useState();
  const [hasToken8, setHasToken8] = useState();
  console.log("hasToken11", hasToken1);
  console.log("hasToken12", hasToken2);
  console.log("hasToken13", hasToken3);
  console.log("hasToken14", hasToken4);
  console.log("hasToken15", hasToken5);
  console.log("hasToken16", hasToken6);
  console.log("hasToken17", hasToken7);
  console.log("hasToken18", hasToken8);
  const allowanceBUSD = async () => {
    try {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        //await window.ethereum.request({ method: "eth_requestAccounts" });
        // Get the selected account
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        const account = accounts[0];
        const contracts = new web3.eth.Contract(abiBUSD, ContractaddressBUSD);
        console.log("i'm here", contracts.methods);
        console.log("account", account);
        console.log("ContractaddressEVCNft", ContractaddressEVCNft);
        const allowance = await contracts.methods
          .allowance(account, ContractaddressEVCNft)
          .call();
        console.log("allowanceBUSD", allowance);
        setApproveBUSDValue(allowance);
      }
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    allowanceBUSD();
    // setBUSD_NFTApprove();
    const getData = async () => {
      let token1info = await getHasToken1();
      let token2info = await getHasToken2();
      let token3info = await getHasToken3();
      let token4info = await getHasToken4();
      let token5info = await getHasToken5();
      let token6info = await getHasToken6();
      let token7info = await getHasToken7();
      let token8info = await getHasToken8();
      setHasToken1(token1info);
      setHasToken2(token2info);
      setHasToken3(token3info);
      setHasToken4(token4info);
      setHasToken5(token5info);
      setHasToken6(token6info);
      setHasToken7(token7info);
      setHasToken8(token8info);
    };
    getData();
  }, []);

  useEffect(() => {
    document.title = title ? title : "EVC Avatars | Buy Evc Avatars";
    document.querySelector(".page-title").innerText = "Buy Evc Avatars";
  }, []);

  return (
    <>
      <div className="dashboard-wrap">
        <Breadcrumb>
          <li className="breadcrumb-item">
            <Link to="/">HOME</Link>
          </li>
          <Breadcrumb.Item active>Buy EVC Avatars</Breadcrumb.Item>
        </Breadcrumb>

        <div className="dash-content-area">
          <div className="text-center mb-5">
            <div className="h4">EVC AVATARS</div>
            <p className="text-secondary mb-0">
              To buy NFT and Mint, Connect your Wallet.
            </p>
          </div>
          <div className="w-100">
            <div className="row justify-content-center g-32">
              {/* Level_1 */}
              <div className="col-sm-6 col-xl-4 col-xxl-3">
                <div className="card-evc h-100 d-flex flex-column">
                  <div className="evc-avatar">
                    <img
                      src={evc_avatars[0].thumb}
                      alt=""
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="evc-info p-3 px-0 px-xs-3 pb-0 h-100 d-flex flex-column justify-content-between">
                    <div className="d-flex gap-2 flex-wrap justify-content-between mb-2">
                      <a href="#" className="evc-title">
                        {evc_avatars[0].title}
                      </a>
                      <div className="evc-no">{evc_avatars[0].evc_no}</div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="evc-price">
                        <div className="evc-price-title">PRICE</div>
                        <div className="evc-price-amount">
                          <img src={busd} alt="" className="img-fluid" />
                          {evc_avatars[0].price}
                        </div>
                      </div>
                      <div className="evc-bv">
                        <div className="evc-bv-title">BV</div>
                        <div className="evc-bv-amount">
                          <img src={busd} alt="" className="img-fluid" />
                          {evc_avatars[0].bv}
                        </div>
                      </div>
                    </div>
                    {approveBUSDValue === "0" ? (
                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={() => setBUSD_NFTApprove()}
                        >
                          Approve
                        </button>
                      </div>
                    ) : hasToken1 === true ? (
                      <div className="d-grid gap-2">
                        <button className="btn btn-dark" type="button" disabled>
                          Buy
                        </button>
                      </div>
                    ) : (
                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={() => setMintL1()}
                        >
                          Buy
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* Level_2 */}
              <div className="col-sm-6 col-xl-4 col-xxl-3">
                <div className="card-evc h-100 d-flex flex-column">
                  <div className="evc-avatar">
                    <img
                      src={evc_avatars[1].thumb}
                      alt=""
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="evc-info p-3 px-0 px-xs-3 pb-0 h-100 d-flex flex-column justify-content-between">
                    <div className="d-flex gap-2 flex-wrap justify-content-between mb-2">
                      <a href="#" className="evc-title">
                        {evc_avatars[1].title}
                      </a>
                      <div className="evc-no">{evc_avatars[1].evc_no}</div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="evc-price">
                        <div className="evc-price-title">PRICE</div>
                        <div className="evc-price-amount">
                          <img src={busd} alt="" className="img-fluid" />
                          {evc_avatars[1].price}
                        </div>
                      </div>
                      <div className="evc-bv">
                        <div className="evc-bv-title">BV</div>
                        <div className="evc-bv-amount">
                          <img src={busd} alt="" className="img-fluid" />
                          {evc_avatars[1].bv}
                        </div>
                      </div>
                    </div>
                    {approveBUSDValue === "0" ? (
                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={() => setBUSD_NFTApprove()}
                        >
                          Approve
                        </button>
                      </div>
                    ) : hasToken2 === true ? (
                      <div className="d-grid gap-2">
                        <button className="btn btn-dark" type="button" disabled>
                          Buy
                        </button>
                      </div>
                    ) : (
                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={() => setMintL2()}
                        >
                          Buy
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* Level_3 */}
              <div className="col-sm-6 col-xl-4 col-xxl-3">
                <div className="card-evc h-100 d-flex flex-column">
                  <div className="evc-avatar">
                    <img
                      src={evc_avatars[2].thumb}
                      alt=""
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="evc-info p-3 px-0 px-xs-3 pb-0 h-100 d-flex flex-column justify-content-between">
                    <div className="d-flex gap-2 flex-wrap justify-content-between mb-2">
                      <a href="#" className="evc-title">
                        {evc_avatars[2].title}
                      </a>
                      <div className="evc-no">{evc_avatars[2].evc_no}</div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="evc-price">
                        <div className="evc-price-title">PRICE</div>
                        <div className="evc-price-amount">
                          <img src={busd} alt="" className="img-fluid" />
                          {evc_avatars[2].price}
                        </div>
                      </div>
                      <div className="evc-bv">
                        <div className="evc-bv-title">BV</div>
                        <div className="evc-bv-amount">
                          <img src={busd} alt="" className="img-fluid" />
                          {evc_avatars[2].bv}
                        </div>
                      </div>
                    </div>
                    {approveBUSDValue === "0" ? (
                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={() => setBUSD_NFTApprove()}
                        >
                          Approve
                        </button>
                      </div>
                    ) : hasToken3 === true ? (
                      <div className="d-grid gap-2">
                        <button className="btn btn-dark" type="button" disabled>
                          Buy
                        </button>
                      </div>
                    ) : (
                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={() => setMintL3()}
                        >
                          Buy
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* Level_4 */}
              <div className="col-sm-6 col-xl-4 col-xxl-3">
                <div className="card-evc h-100 d-flex flex-column">
                  <div className="evc-avatar">
                    <img
                      src={evc_avatars[3].thumb}
                      alt=""
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="evc-info p-3 px-0 px-xs-3 pb-0 h-100 d-flex flex-column justify-content-between">
                    <div className="d-flex gap-2 flex-wrap justify-content-between mb-2">
                      <a href="#" className="evc-title">
                        {evc_avatars[3].title}
                      </a>
                      <div className="evc-no">{evc_avatars[3].evc_no}</div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="evc-price">
                        <div className="evc-price-title">PRICE</div>
                        <div className="evc-price-amount">
                          <img src={busd} alt="" className="img-fluid" />
                          {evc_avatars[3].price}
                        </div>
                      </div>
                      <div className="evc-bv">
                        <div className="evc-bv-title">BV</div>
                        <div className="evc-bv-amount">
                          <img src={busd} alt="" className="img-fluid" />
                          {evc_avatars[3].bv}
                        </div>
                      </div>
                    </div>
                    {approveBUSDValue === "0" ? (
                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={() => setBUSD_NFTApprove()}
                        >
                          Approve
                        </button>
                      </div>
                    ) : hasToken4 === true ? (
                      <div className="d-grid gap-2">
                        <button className="btn btn-dark" type="button" disabled>
                          Buy
                        </button>
                      </div>
                    ) : (
                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={() => setMintL4()}
                        >
                          Buy
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* Level_5 */}
              <div className="col-sm-6 col-xl-4 col-xxl-3">
                <div className="card-evc h-100 d-flex flex-column">
                  <div className="evc-avatar">
                    <img
                      src={evc_avatars[4].thumb}
                      alt=""
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="evc-info p-3 px-0 px-xs-3 pb-0 h-100 d-flex flex-column justify-content-between">
                    <div className="d-flex gap-2 flex-wrap justify-content-between mb-2">
                      <a href="#" className="evc-title">
                        {evc_avatars[4].title}
                      </a>
                      <div className="evc-no">{evc_avatars[4].evc_no}</div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="evc-price">
                        <div className="evc-price-title">PRICE</div>
                        <div className="evc-price-amount">
                          <img src={busd} alt="" className="img-fluid" />
                          {evc_avatars[4].price}
                        </div>
                      </div>
                      <div className="evc-bv">
                        <div className="evc-bv-title">BV</div>
                        <div className="evc-bv-amount">
                          <img src={busd} alt="" className="img-fluid" />
                          {evc_avatars[4].bv}
                        </div>
                      </div>
                    </div>
                    {approveBUSDValue === "0" ? (
                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={() => setBUSD_NFTApprove()}
                        >
                          Approve
                        </button>
                      </div>
                    ) : hasToken5 === true ? (
                      <div className="d-grid gap-2">
                        <button className="btn btn-dark" type="button" disabled>
                          Buy
                        </button>
                      </div>
                    ) : (
                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={() => setMintL5()}
                        >
                          Buy
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* Level_6 */}
              <div className="col-sm-6 col-xl-4 col-xxl-3">
                <div className="card-evc h-100 d-flex flex-column">
                  <div className="evc-avatar">
                    <img
                      src={evc_avatars[5].thumb}
                      alt=""
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="evc-info p-3 px-0 px-xs-3 pb-0 h-100 d-flex flex-column justify-content-between">
                    <div className="d-flex gap-2 flex-wrap justify-content-between mb-2">
                      <a href="#" className="evc-title">
                        {evc_avatars[5].title}
                      </a>
                      <div className="evc-no">{evc_avatars[5].evc_no}</div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="evc-price">
                        <div className="evc-price-title">PRICE</div>
                        <div className="evc-price-amount">
                          <img src={busd} alt="" className="img-fluid" />
                          {evc_avatars[5].price}
                        </div>
                      </div>
                      <div className="evc-bv">
                        <div className="evc-bv-title">BV</div>
                        <div className="evc-bv-amount">
                          <img src={busd} alt="" className="img-fluid" />
                          {evc_avatars[5].bv}
                        </div>
                      </div>
                    </div>
                    {approveBUSDValue === "0" ? (
                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={() => setBUSD_NFTApprove()}
                        >
                          Approve
                        </button>
                      </div>
                    ) : hasToken6 === true ? (
                      <div className="d-grid gap-2">
                        <button className="btn btn-dark" type="button" disabled>
                          Buy
                        </button>
                      </div>
                    ) : (
                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={() => setMintL6()}
                        >
                          Buy
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* Level_7 */}
              <div className="col-sm-6 col-xl-4 col-xxl-3">
                <div className="card-evc h-100 d-flex flex-column">
                  <div className="evc-avatar">
                    <img
                      src={evc_avatars[6].thumb}
                      alt=""
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="evc-info p-3 px-0 px-xs-3 pb-0 h-100 d-flex flex-column justify-content-between">
                    <div className="d-flex gap-2 flex-wrap justify-content-between mb-2">
                      <a href="#" className="evc-title">
                        {evc_avatars[6].title}
                      </a>
                      <div className="evc-no">{evc_avatars[6].evc_no}</div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="evc-price">
                        <div className="evc-price-title">PRICE</div>
                        <div className="evc-price-amount">
                          <img src={busd} alt="" className="img-fluid" />
                          {evc_avatars[6].price}
                        </div>
                      </div>
                      <div className="evc-bv">
                        <div className="evc-bv-title">BV</div>
                        <div className="evc-bv-amount">
                          <img src={busd} alt="" className="img-fluid" />
                          {evc_avatars[6].bv}
                        </div>
                      </div>
                    </div>
                    {approveBUSDValue === "0" ? (
                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={() => setBUSD_NFTApprove()}
                        >
                          Approve
                        </button>
                      </div>
                    ) : hasToken7 === true ? (
                      <div className="d-grid gap-2">
                        <button className="btn btn-dark" type="button" disabled>
                          Buy
                        </button>
                      </div>
                    ) : (
                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={() => setMintL7()}
                        >
                          Buy
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* Level_8 */}
              <div className="col-sm-6 col-xl-4 col-xxl-3">
                <div className="card-evc h-100 d-flex flex-column">
                  <div className="evc-avatar">
                    <img
                      src={evc_avatars[7].thumb}
                      alt=""
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="evc-info p-3 px-0 px-xs-3 pb-0 h-100 d-flex flex-column justify-content-between">
                    <div className="d-flex gap-2 flex-wrap justify-content-between mb-2">
                      <a href="#" className="evc-title">
                        {evc_avatars[7].title}
                      </a>
                      <div className="evc-no">{evc_avatars[7].evc_no}</div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="evc-price">
                        <div className="evc-price-title">PRICE</div>
                        <div className="evc-price-amount">
                          <img src={busd} alt="" className="img-fluid" />
                          {evc_avatars[7].price}
                        </div>
                      </div>
                      <div className="evc-bv">
                        <div className="evc-bv-title">BV</div>
                        <div className="evc-bv-amount">
                          <img src={busd} alt="" className="img-fluid" />
                          {evc_avatars[7].bv}
                        </div>
                      </div>
                    </div>
                    {approveBUSDValue === "0" ? (
                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={() => setBUSD_NFTApprove()}
                        >
                          Approve
                        </button>
                      </div>
                    ) : hasToken8 === true ? (
                      <div className="d-grid gap-2">
                        <button className="btn btn-dark" type="button" disabled>
                          Buy
                        </button>
                      </div>
                    ) : (
                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={() => setMintL8()}
                        >
                          Buy
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EvcAvatars;
