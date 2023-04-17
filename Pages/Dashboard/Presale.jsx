import React, { useState, useEffect } from 'react';
import Web3 from "web3";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import stakingIcon1 from '../../assets/img/dashboard/icons/staking-icon-1.svg'; //
import stakingIcon2 from '../../assets/img/dashboard/icons/staking-icon-2.svg'; //
import stakingIcon3 from '../../assets/img/dashboard/icons/staking-icon-3.svg'; //
import presaleIcon2 from '../../assets/img/dashboard/icons/presale-icon-2.svg';
import { BiTimer } from "react-icons/bi";

import { ReactComponent as IconEx } from '../../assets/img/dashboard/icons/staking-icon-ex.svg'; //

import { SetFlexStake } from '../../ContractAction/EVCStakeContractAction'; //  
import { getEVCPresaleDuration, getBalanceOfPreSale, setBuyPreEVC, getUserPreEvctotal, getPreEvcTotalSupply } from '../../ContractAction/PreSaleContractAction' //
import Sidebar from './Globals/Sidebar';

import { setBUSD_PresaleApprove } from '../../ContractAction/BUSDContractAction';
import { abiBUSD } from '../../ContractAction/ABI/BUSD';


var ContractaddressBUSD = "0x3ed64D74A7191f404d53eddAC90cCb66Ee42e45C";
var ContractaddressPresale = "0x33BaA373110d36CDf562D4cDA4C153d02d2A45D6";


const Presale = ({ title }) => {

    const newAddress = window.localStorage.getItem("connectedAccount");

    const [evcPresaleDuration, setEvcPresaleDuration] = useState();
    const [presaleBalanceOf, setPresaleBalanceOf] = useState();
    const [preEcvtotal, setPreEcvtotal] = useState();
    const [preEvcMaxSupply, setPreEvcMaxSupply] = useState();
    const [buypreEVC, setBuypreEVC] = useState();


    const [approveBUSDValue, setApproveBUSDValue] = useState();
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
                const contracts = new web3.eth.Contract(
                    abiBUSD,
                    ContractaddressBUSD
                );
                console.log("i'm here", contracts.methods);
                console.log("account", account);
                console.log("ContractaddressPresale", ContractaddressPresale);
                const allowance = await contracts.methods.allowance(account, ContractaddressPresale).call();
                console.log("allowanceBUSD", allowance);
                setApproveBUSDValue(allowance);
            }
        } catch (error) {
            return error;
        }
    };

    console.log("approveBUSDValue", approveBUSDValue)

    const maxValue = (e) => {
        setBuypreEVC("1000")
    }


    useEffect(() => {



        document.title = title ? title : 'EVC Avatars | Presale';
        document.querySelector('.page-title').innerText = "Presale";

        allowanceBUSD();
        // setBUSD_PresaleApprove();

        // const buypreevc = async () => {
        //     let buypreevc = await setBuyPreEVC();
        //     setBuypreEVC(buypreevc)
        // }
        // buypreevc()

        const getPresaleDurationInfo = async () => {
            let duration = await getEVCPresaleDuration();
            setEvcPresaleDuration(duration)
        }
        getPresaleDurationInfo()


        const getPresaleBalanceOf = async () => {
            let presalebalance = await getBalanceOfPreSale();
            setPresaleBalanceOf(presalebalance)
        }
        getPresaleBalanceOf()

        const getPreEVCTotal = async () => {
            let preevctotal = await getUserPreEvctotal();
            setPreEcvtotal(preevctotal)
        }
        getPreEVCTotal();

        const getPreEVCTotalSupply = async () => {
            let preevctotalsupply = await getPreEvcTotalSupply();
            setPreEvcMaxSupply(preevctotalsupply)
        }
        getPreEVCTotalSupply();

    }, [])

    return (
        <>
        
        <div className="dashboard-wrap">
            <Breadcrumb>
                <li className="breadcrumb-item">
                    <Link to="/">HOME</Link>
                </li>
                <Breadcrumb.Item active>Presale</Breadcrumb.Item>
            </Breadcrumb>

            <div className="dash-content-area">
                <div className="h1 font-gilroy fw-semibold mt-3 mb-4 pb-3">Buy PREEVC Tokens</div>
                <div className="dash-global-wrap">
                    <div className="row g-4">
                        <div className="col-md-6 col-xl-4">
                            <div className="dash-card style-2 position-relative">
                                <div className="icon-square icon-md mb-3">
                                    <img src={stakingIcon1} alt="" className="img-fluid" />
                                </div>
                                <p>Token In Your Wallet</p>
                                <div className="d-flex align-items-center gap-2 dash-card-amount">
                                    <div>$ {presaleBalanceOf} PREEVC</div>
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
                        <div className="col-md-6 col-xl-4">
                            <div className="dash-card style-2 position-relative">
                                <div className="icon-square icon-md mb-3">
                                    <img src={presaleIcon2} alt="" className="img-fluid" />
                                </div>
                                <p>Presale Duration</p>
                                <div className="d-flex align-items-center gap-2 dash-card-amount">
                                    <div> {Math.round(evcPresaleDuration / 86400)} Days</div>
                                </div>
                                <div className="position-absolute top-0 end-0 m-4">
                                    <OverlayTrigger
                                        placement={`top`}
                                        overlay={<Tooltip>Duration of Presale</Tooltip>}
                                    >
                                        <div className="d-inline-flex">
                                            <IconEx />
                                        </div>
                                    </OverlayTrigger>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4">
                            <div className="dash-card style-2 position-relative">
                                <div className="icon-square icon-md mb-3">
                                    <img src={stakingIcon3} alt="" className="img-fluid" />
                                </div>
                                <p>Available For Transfer</p>
                                <div className="d-flex align-items-center gap-2 dash-card-amount">
                                    <div>$ {presaleBalanceOf} PREEVC</div>
                                </div>
                                <div className="position-absolute top-0 end-0 m-4">
                                    <OverlayTrigger
                                        placement={`top`}
                                        overlay={<Tooltip>Available For Transfer</Tooltip>}
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
                        <div className="h5 font-gilroy fw-semibold mt-5 mb-3 pb-3">PREEVC</div>
                        {approveBUSDValue == 0 ? (
                            <div className="dash-global-wrap">
                            <button className="btn btn-primary w-100 fw-semibold"
                                onClick={() => setBUSD_PresaleApprove()}
                            >Approve</button>
                            </div>) : (
                            <div className="dash-global-wrap">
                                <div className="h5 font-gilroy fw-semibold mt-4 mb-3">Amount</div>
                                <div className="staking-from-wrap">
                                    <input type="number" className="from-control" placeholder="1.000000"
                                        value={buypreEVC} onChange={(e) => setBuypreEVC(e.target.value)} />
                                    <button onClick={maxValue}>MAX</button>
                                </div>

                                <br></br>
                                <button className="btn btn-primary w-100 fw-semibold"
                                    onClick={() => setBuyPreEVC(buypreEVC)}
                                >Buy PREEVC</button>
                                <Sidebar presaleBalanceOf={presaleBalanceOf} />
                                {/* <Tabs
                                defaultActiveKey="stake"
                                id="fill-tab-example"
                                className="staking-tabs"
                                fill
                            >
                                <Tab eventKey="stake" title="Stake">
                                    <form action="">
                                        <div className="h5 font-gilroy fw-semibold mt-4 mb-3">Amount</div>
                                        <div className="staking-from-wrap">
                                            <input type="text" className="from-control" placeholder="1.000000" />
                                            <button>MAX</button>
                                        </div>
                                        <div className="h5 font-gilroy fw-semibold mt-4 mb-3">Choose Period (Months)</div>
                                        <div className="d-flex gap-3">
                                            <div className="staking-form-check">
                                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                                <label className="form-check-label" htmlFor="exampleRadios1">
                                                    06
                                                </label>
                                            </div>
                                            <div className="staking-form-check">
                                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                                <label className="form-check-label" htmlFor="exampleRadios2">
                                                    12
                                                </label>
                                            </div>
                                            <div className="staking-form-check">
                                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
                                                <label className="form-check-label" htmlFor="exampleRadios3">
                                                    24
                                                </label>
                                            </div>
                                        </div>
                                        <div className="h5 text-secondary font-gilroy mt-4 mb-5 d-flex justify-content-between">
                                            <span>APR (30%)</span>
                                            <span>10000 EVC</span>
                                        </div>
                                        <button className="btn btn-primary w-100 fw-semibold">STAKE NOW</button>
                                    </form>
                                </Tab>
                                <Tab eventKey="f-stake" title="Flexible Stake">
                                    <form action="">
                                        <div className="h5 font-gilroy fw-semibold mt-4 mb-3">Amount</div>
                                        <div className="staking-from-wrap">
                                            <input type="text" className="from-control" placeholder="1.000000" />
                                            <button>MAX</button>
                                        </div>
                                        <div className="h5 text-secondary font-gilroy my-4 d-flex justify-content-between">
                                            <span>APR (12%)</span>
                                            <span>10000 EVC</span>
                                        </div>

                                        <div className="mb-5">
                                            <div className="text-md">Note:</div>
                                            <div className="text-md">Unstake anytime with 7 days unstaking period.</div>
                                        </div>
                                        <button className="btn btn-primary w-100 fw-semibold">STAKE NOW</button>
                                    </form>
                                </Tab>
                                <Tab eventKey="unstake" title="Unstake">
                                    <form action="">
                                        <div className="h5 font-gilroy fw-semibold mt-4 mb-3">Amount</div>
                                        <div className="staking-from-wrap">
                                            <input type="text" className="from-control" placeholder="1.000000" />
                                            <button>MAX</button>
                                        </div>
                                        <div className="h5 font-gilroy fw-semibold mt-4 mb-3">Choose Period (Months)</div>
                                        <div className="d-flex gap-3">
                                            <div className="staking-form-check">
                                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios7" value="option7" />
                                                <label className="form-check-label" htmlFor="exampleRadios7">
                                                    06
                                                </label>
                                            </div>
                                            <div className="staking-form-check">
                                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios8" value="option8" />
                                                <label className="form-check-label" htmlFor="exampleRadios8">
                                                    12
                                                </label>
                                            </div>
                                            <div className="staking-form-check">
                                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios9" value="option9" />
                                                <label className="form-check-label" htmlFor="exampleRadios9">
                                                    24
                                                </label>
                                            </div>
                                        </div>
                                        <div className="h5 text-secondary font-gilroy mt-4 mb-5 d-flex justify-content-between">
                                            <span>APR (30%)</span>
                                            <span>10000 EVC</span>
                                        </div>
                                        <button className="btn btn-primary w-100 fw-semibold">STAKE NOW</button>
                                    </form>
                                </Tab>
                            </Tabs> */}
                            </div>)}
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex flex-column h-100">
                            <div className="h5 font-gilroy fw-semibold mt-5 mb-3 pb-3">PREEVC Details</div>
                            <div className="dash-global-wrap d-flex flex-column h-100">
                                <div className="d-flex align-items-center justify-content-between text-uppercase staking-deposit-title mb-4">
                                    <div style={{ textAlign: "center" }}>
                                        <div>My PreEVC Total</div><br></br>
                                        <div>{preEcvtotal}</div>
                                    </div>
                                    <div style={{ textAlign: "center" }}>
                                        <div>MAX SUPPLY</div><br></br>
                                        <div>{preEvcMaxSupply}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default Presale;