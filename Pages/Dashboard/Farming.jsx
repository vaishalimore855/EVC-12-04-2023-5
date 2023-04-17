import React, { useEffect } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { AiOutlinePlus } from "react-icons/ai";

import stakingIcon1 from '../../assets/img/dashboard/icons/staking-icon-1.svg';
import dashIcon4 from '../../assets/img/dashboard/icons/dash-icon-4.svg';
import stakingIcon3 from '../../assets/img/dashboard/icons/staking-icon-3.svg';



import bnbLogo from '../../assets/img/dashboard/icons/bnb-logo.png';
import evcLogo from '../../assets/img/dashboard/icons/evc-logo.png';
import bnbLogoLg from '../../assets/img/dashboard/icons/bnb-logo-lg.png';
import evcLogoLg from '../../assets/img/dashboard/icons/evc-logo-lg.png';
import exchange from '../../assets/img/dashboard/icons/exchange.png';

import { ReactComponent as Checkmark } from '../../assets/img/dashboard/icons/checkmark.svg';

import { ReactComponent as IconEx } from '../../assets/img/dashboard/icons/staking-icon-ex.svg';
import { ReactComponent as IconExFill } from '../../assets/img/dashboard/icons/tokend-icon-ex.svg';




const Farming = ({ title }) => {

    const newAddress = window.localStorage.getItem("connectedAccount");

    useEffect(() => {
        document.title = title ? title : 'EVC Avatars | Farming';

        document.querySelector('.page-title').innerText = "Farming";
    }, [])

    return (
        <> 
        
        <div className="dashboard-wrap">
            <Breadcrumb>
                <li className="breadcrumb-item">
                    <Link to="/">HOME</Link>
                </li>
                <Breadcrumb.Item active>Farming</Breadcrumb.Item>
            </Breadcrumb>

            <div className="dash-content-area">
                <div className="h1 font-gilroy fw-semibold mt-3 mb-4 pb-3">Farm your EVC - BNB LP Tokens</div>

                <div className="row g-4">
                    <div className="col-md-6 col-xl-4">
                        <div className="dash-card style-3 d-flex align-items-center position-relative gap-3">
                            <div className="icon-square icon-md p-3">
                                <img src={stakingIcon1} alt="" className="img-fluid" />
                            </div>
                            <div>
                                <div className="d-flex align-items-center font-gilroy h3">
                                    <div>EVC/BNB</div>
                                </div>
                                <p className="m-0">Token In Your Wallet</p>
                            </div>
                            <div className="ms-auto">
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
                        <div className="dash-card style-3 d-flex align-items-center position-relative gap-3">
                            <div className="icon-square icon-md p-3">
                                <img src={dashIcon4} alt="" className="img-fluid" />
                            </div>
                            <div>
                                <div className="d-flex align-items-center font-gilroy h3">
                                    <div>EVC/BNB</div>
                                </div>
                                <p className="m-0">Locked in Farming</p>
                            </div>
                            <div className="ms-auto">
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
                        <div className="dash-card style-3 d-flex align-items-center position-relative gap-3">
                            <div className="icon-square icon-md p-3">
                                <img src={stakingIcon3} alt="" className="img-fluid" />
                            </div>
                            <div>
                                <div className="d-flex align-items-center font-gilroy h3">
                                    <div>EVC/BNB</div>
                                </div>
                                <p className="m-0">Available for Transfer</p>
                            </div>
                            <div className="ms-auto">
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
                </div>

                <div className="row">
                    <div className="col-xl-5 col-xxxl-4">
                        <div className="d-flex flex-column h-100">
                            <div className="h5 font-gilroy fw-semibold mt-5 mb-3 pb-3">Farm</div>
                            <div className="dash-global-wrap h-100">
                                <div className="h6 font-gilroy fw-semibold mb-3 pb-3">Add liquidity & Stake</div>
                                <Tabs
                                    defaultActiveKey="evc"
                                    className="staking-tabs"
                                    fill
                                >
                                    <Tab eventKey="evc" title="EVC & BNB">
                                        <form action="" className="mt-4">
                                            <div className="text-md mt-4 mb-2 d-flex align-items-center justify-content-between opacity-75">
                                                <span>Balance: 2.17</span>
                                                <span>Max</span>
                                            </div>

                                            <div className="staking-from-wrap">
                                                <div className="flex-shrink-0">
                                                    <img src={bnbLogo} alt="" className="img-fluid mb-1" />
                                                </div>
                                                <span>BNB</span>
                                                <input type="text" className="from-control text-end py-1" placeholder="000" />
                                            </div>
                                            <div className="py-4 d-flex justify-content-center cursor-pointer">
                                                <div className="icon-square icon-circle icon-outline p-2">
                                                    <AiOutlinePlus />
                                                </div>
                                            </div>

                                            <div className="text-md mb-2 d-flex align-items-center justify-content-between opacity-75">
                                                <span>Balance: 0.00</span>
                                                <span>Max</span>
                                            </div>
                                            <div className="staking-from-wrap mb-4">
                                                <div className="flex-shrink-0">
                                                    <img src={evcLogo} alt="" className="img-fluid mb-1" />
                                                </div>
                                                <span>EVC</span>
                                                <input type="text" className="from-control text-end py-1" placeholder="000" />
                                            </div>

                                            <div className="d-flex align-items-center gap-2 mb-4">
                                                <IconExFill />
                                                <p className="opacity-75 text-md mb-0">LP tokens will be automatically staked on the farming contact </p>
                                            </div>

                                            <div className="d-flex gap-3">
                                                <button className="btn w-100 fw-semibold link-light d-flex align-items-center justify-content-center gap-2 text-md">
                                                    <Checkmark /> <div className="mt-1">Unlock</div>
                                                </button>
                                                <button className="btn btn-primary w-100 fw-semibold text-md">Add liquidity & Stake</button>
                                            </div>
                                        </form>
                                    </Tab>
                                    <Tab eventKey="bnb" title="BNB">
                                        <form action="" className="mt-4">
                                            <div className="text-md mt-4 mb-2 d-flex align-items-center justify-content-between opacity-75">
                                                <span>Balance: 2.17</span>
                                                <span>Max</span>
                                            </div>

                                            <div className="staking-from-wrap">
                                                <div className="flex-shrink-0">
                                                    <img src={bnbLogo} alt="" className="img-fluid mb-1" />
                                                </div>
                                                <span>BNB</span>
                                                <input type="text" className="from-control text-end py-1" placeholder="000" />
                                            </div>
                                            <div className="py-4 d-flex justify-content-center cursor-pointer">
                                                <div className="icon-square icon-circle icon-outline p-2">
                                                    <AiOutlinePlus />
                                                </div>
                                            </div>

                                            <div className="text-md mb-2 d-flex align-items-center justify-content-between opacity-75">
                                                <span>Balance: 0.00</span>
                                                <span>Max</span>
                                            </div>
                                            <div className="staking-from-wrap mb-4">
                                                <div className="flex-shrink-0">
                                                    <img src={evcLogo} alt="" className="img-fluid mb-1" />
                                                </div>
                                                <span>EVC</span>
                                                <input type="text" className="from-control text-end py-1" placeholder="000" />
                                            </div>

                                            <div className="d-flex align-items-center gap-2 mb-4">
                                                <IconExFill />
                                                <p className="opacity-75 text-md mb-0">LP tokens will be automatically staked on the farming contact </p>
                                            </div>

                                            <div className="d-flex gap-3">
                                                <button className="btn w-100 fw-semibold link-light d-flex align-items-center justify-content-center gap-2 text-md">
                                                    <Checkmark /> <div className="mt-1">Unlock</div>
                                                </button>
                                                <button className="btn btn-primary w-100 fw-semibold text-md">Add liquidity & Stake</button>
                                            </div>
                                        </form>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-xxxl-8">
                        <div className="d-flex flex-column h-100">
                            <div className="row mb-4">
                                <div className="col-lg-6">
                                    <div className="h5 font-gilroy fw-semibold mt-5 mb-3 pb-3">My Deposit</div>
                                    <div className="dash-global-wrap">
                                        <div className="d-flex flex-column gap-4 h-100">
                                            <div className="p-3 rounded-2 text-center bg-15">0 EVC</div>
                                            <button className="btn btn-primary">CLAIM</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="h5 font-gilroy fw-semibold mt-5 mb-3 pb-3">Withdraw</div>
                                    <div className="dash-global-wrap">
                                        <div className="d-flex flex-column gap-4 h-100">
                                            <div className="staking-from-wrap">
                                                <input type="text" className="from-control py-1" placeholder="1" />
                                                <button className="btn-sm">MAX</button>
                                            </div>
                                            <button className="btn btn-primary">REMOVE LIQUDITY</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="dash-global-wrap">
                                        <div className="d-flex align-items-center gap-4 mb-4 pb-2">
                                            <div>
                                                <img src={exchange} alt="" className="img-fluid" />
                                            </div>
                                            <div>
                                                <p className="opacity-75 mt-2 mb-2">Total liquidity</p>
                                                <div className="font-gilroy h4 fw-semibold">$1,152,814.52</div>
                                            </div>
                                            <div className='ms-auto'>
                                                <OverlayTrigger
                                                    placement={`top`}
                                                    overlay={
                                                        <Tooltip id={`tooltip-top`}>
                                                            Tooltip on <strong>Top</strong>.
                                                        </Tooltip>
                                                    }
                                                >
                                                    <div>
                                                        <IconExFill style={{ height: '16px', width: '16px' }} />
                                                    </div>
                                                </OverlayTrigger>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="mb-0">Total Tokens Locked</p>

                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item bg-transparent py-4 d-flex align-items-center">
                                                    <div>
                                                        <img src={bnbLogoLg} alt="" className="img-fluid me-2" />
                                                        <span>BNB</span>
                                                    </div>
                                                    <div className="ms-auto">2,335.51</div>
                                                </li>
                                                <li className="list-group-item bg-transparent py-4 d-flex align-items-center">
                                                    <div>
                                                        <img src={evcLogoLg} alt="" className="img-fluid me-2" />
                                                        <span>EVC</span>
                                                    </div>
                                                    <div className="ms-auto">19,676,786.06</div>
                                                </li>
                                            </ul>
                                        </div>
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

export default Farming;