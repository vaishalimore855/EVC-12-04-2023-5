import React, { useState, useEffect } from "react";
import Web3 from "web3";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import stakingIcon1 from "../../assets/img/dashboard/icons/staking-icon-1.svg"; //
import stakingIcon2 from "../../assets/img/dashboard/icons/staking-icon-2.svg"; //
import stakingIcon3 from "../../assets/img/dashboard/icons/staking-icon-3.svg"; //
import presaleIcon2 from "../../assets/img/dashboard/icons/presale-icon-2.svg";
import { BiTimer } from "react-icons/bi";

import { ReactComponent as IconEx } from "../../assets/img/dashboard/icons/staking-icon-ex.svg"; //

import { SetFlexStake } from "../../ContractAction/EVCStakeContractAction"; //
import { getBalanceOfPreSale } from "../../ContractAction/PreSaleContractAction"; //
import { getBalanceEVC } from "../../ContractAction/EVCStakeContractAction";

import {
  setPresaleApprove,
  setSwapPREEVCForEVC,
} from "../../ContractAction/RedeemContractAction"; 

import { abiPreSale } from "../../ContractAction/ABI/PreSale";



var PresaleContractAddress = "0x33BaA373110d36CDf562D4cDA4C153d02d2A45D6";
var ContractaddressRedeem = "0xf7ce5744EdabfD2f7E07026a44250A7F0d0095E2";

const abiPresale = abiPreSale;

const Redeem = ({ title }) => {

  const newAddress = window.localStorage.getItem("connectedAccount");

  const [evcPresaleDuration, setEvcPresaleDuration] = useState();
  const [EVCBalanceOf, setEVCBalanceOf] = useState();
  const [presaleBalanceOf, setPresaleBalanceOf] = useState();

  const [swappreEVCForEVC, setSwapPreEVCForEVC] = useState();
  const [approvePresaleValue, setApprovePresaleValue] = useState();

  const approvePresale = async () => {
    try {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        //await window.ethereum.request({ method: "eth_requestAccounts" });
        // Get the selected account
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        const account = accounts[0];
        const contracts = new web3.eth.Contract(
          abiPresale,
          PresaleContractAddress
        );
        console.log("i'm here", contracts.methods);
        console.log("account", account);
        console.log("ContractaddressRedeem", ContractaddressRedeem);
        const allowance = await contracts.methods.allowance(account, ContractaddressRedeem).call();
        console.log("allowancePresale", allowance);
        setApprovePresaleValue(allowance);
      }
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    approvePresale();
    // SetBUSDApprove();
    // setPresaleApprove()
    // setSwapPreEVCForEVC()

    document.title = title ? title : "EVC Avatars | Redeem";
    document.querySelector(".page-title").innerText = "Redeem";

    // const getPresaleDurationInfo = async () => {
    //     let duration = await getEVCPresaleDuration();
    //     setEvcPresaleDuration(duration)
    // }
    // getPresaleDurationInfo()

    // const getPresaleBalanceOf = async () => {
    //     let presalebalance = await getBalanceOfPreSale();
    //     setPresaleBalanceOf(presalebalance)
    // }
    // getPresaleBalanceOf()

    // const swappreevcforevc = async () => {
    //     let swappreEvcforEvc = await setSwapPreEVCForEVC();
    //     setPresaleBalanceOf(swappreEvcforEvc)
    // }
    // swappreevcforevc()

    const getEVCBalanceOf = async () => {
      let evcbalance = await getBalanceEVC();
      setEVCBalanceOf(evcbalance);
    };
    getEVCBalanceOf();

    const getPresaleBalanceOf = async () => {
      let presalebalance = await getBalanceOfPreSale();
      setPresaleBalanceOf(presalebalance);
    };
    getPresaleBalanceOf();
  }, []);

  return (
    <>
  
    <div className="dashboard-wrap">
      <Breadcrumb>
        <li className="breadcrumb-item">
          <Link to="/">HOME</Link>
        </li>
        <Breadcrumb.Item active>Redeem</Breadcrumb.Item>
      </Breadcrumb>

      <div className="dash-content-area">
        <div className="h1 font-gilroy fw-semibold mt-3 mb-4 pb-3">Redeem</div>
        <div className="dash-global-wrap">
          <div className="row g-4">
            <div className="col-md-6 col-xl-4">
              <div className="dash-card style-2 position-relative">
                <div className="icon-square icon-md mb-3">
                  <img src={stakingIcon1} alt="" className="img-fluid" />
                </div>
                <p>EVC Token In Your Wallet</p>
                <div className="d-flex align-items-center gap-2 dash-card-amount">
                  <div>$ {EVCBalanceOf} EVC</div>
                </div>
                <div className="position-absolute top-0 end-0 m-4">
                  <OverlayTrigger
                    placement={`top`}
                    overlay={<Tooltip>Token In Your Wallet</Tooltip>}
                  >
                    <div className="d-inline-flex">
                      <IconEx />
                    </div>
                  </OverlayTrigger>
                </div>
              </div>
            </div>
            {/* <div className="col-md-6 col-xl-4">
                            <div className="dash-card style-2 position-relative">
                                <div className="icon-square icon-md mb-3">
                                    <img src={presaleIcon2} alt="" className="img-fluid" />
                                </div>
                                <p>Presale Duration</p>
                                <div className="d-flex align-items-center gap-2 dash-card-amount">
                                    <div> Days</div>
                                </div>
                                <div className="position-absolute top-0 end-0 m-4">
                                    <OverlayTrigger
                                        placement={`top`}
                                        overlay={<Tooltip>Locked in staking</Tooltip>}
                                    >
                                        <div className="d-inline-flex">
                                            <IconEx />
                                        </div>
                                    </OverlayTrigger>
                                </div>
                            </div>
                        </div> */}
            <div className="col-md-6 col-xl-4">
              <div className="dash-card style-2 position-relative">
                <div className="icon-square icon-md mb-3">
                  <img src={stakingIcon3} alt="" className="img-fluid" />
                </div>
                <p>PREEVC Available For Swap</p>
                <div className="d-flex align-items-center gap-2 dash-card-amount">
                  <div>$ {presaleBalanceOf} PREEVC</div>
                </div>
                <div className="position-absolute top-0 end-0 m-4">
                  <OverlayTrigger
                    placement={`top`}
                    overlay={<Tooltip>Available For Swap</Tooltip>}
                  >
                    <div className="d-inline-flex">
                      <IconEx />
                    </div>
                  </OverlayTrigger>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="h5 font-gilroy fw-semibold mt-5 mb-3 pb-3">
              REDEEM
            </div>
            {approvePresaleValue == 0 ? (
              <div className="dash-global-wrap">
                <div className="h5 font-gilroy fw-semibold mt-4 mb-3">
                  Approve Wallet to Get Started
                </div>
                <div>
                  <br></br>
                  <button
                    className="btn btn-primary w-100 fw-semibold"
                    onClick={() => setPresaleApprove()}
                  >
                    Approve
                  </button>
                </div>
              </div>
            ) : (
              <div className="dash-global-wrap">
                <div className="h5 font-gilroy fw-semibold mt-4 mb-3">
                  PreEVC For EVC
                </div>
                <div>
                  {/* <div className="staking-from-wrap">
                                            <input type="text" className="from-control"
                                                value={swappreEVCForEVC}
                                                onChange={(e) => setSwapPreEVCForEVC(e.target.value)}
                                                placeholder="1.000000" />
                                            <button>MAX</button>
                                        </div> */}
                  <div>
                    <br></br>
                    <button
                      onClick={() => setSwapPREEVCForEVC()}
                      className="btn btn-primary w-100 fw-semibold"
                    >
                      Swap PreEVC For EVC
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* // <div className="staking-from-wrap">
                                //     <input type="text" className="from-control"
                                //         value={buypreEVC}
                                //         onChange={(e) => setBuypreEVC(e.target.value)}
                                //         placeholder="1.000000" />
                                //     <button>MAX</button>
                                // </div>
                                // <div>
                                //     <br></br>
                                //     <button className="btn btn-primary w-100 fw-semibold">Buy PREEVC</button>
                                // </div> */}

          {/* <div className="col-lg-6">
                        <div className="d-flex flex-column h-100">
                            <div className="h5 font-gilroy fw-semibold mt-5 mb-3 pb-3">My Deposit</div>
                            <div className="dash-global-wrap d-flex flex-column h-100">
                                <div className="d-flex align-items-center justify-content-between text-uppercase staking-deposit-title mb-4">
                                    <span>Amount</span>
                                    <span>Unlock  date</span>
                                    <span>Action</span>
                                </div>
                                <div className="flex-shrink-0 h-100">
                                    <div className="staking-deposit">No Deposit Yet</div>
                                </div>
                            </div>
                        </div>
                    </div> */}
        </div>
      </div>
    </div>
    </>
  );
};

export default Redeem;
