import React, { useEffect } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

// import ReactSpeedometer from "react-d3-speedometer";

import { ReactComponent as IconEx } from '../../assets/img/dashboard/icons/tokend-icon-ex.svg';

import evcLogo from '../../assets/img/dashboard/icons/evc-logo.png';
import EvcChart from './Charts/EvcChart';




const NftMinerRewards = ({ title }) => {

    const newAddress = window.localStorage.getItem("connectedAccount");

    useEffect(() => {
        document.title = title ? title : 'EVC Avatars | Nft Rewards';

        document.querySelector('.page-title').innerText = "Nft Rewards";
    }, [])

    return (
        <>
        
        <div className="dashboard-wrap">
            <Breadcrumb>
                <li className="breadcrumb-item">
                    <Link to="/">HOME</Link>
                </li>
                <Breadcrumb.Item active>Nft Rewards</Breadcrumb.Item>
            </Breadcrumb>

            <div className="dash-content-area">
                <div className="h4 font-gilroy fw-semibold mt-3 mb-4 pb-3">Miner Rewards</div>
                <div className="dash-global-wrap mb-4">
                    <p className="fw-semibold mb-0 font-gilroy text-secondary">Connect your wallet so to see account's details</p>
                </div>

                <div className="row g-4">
                    <div className="col-xl-8 col-xxl-9 col-xxxl-10">
                        <div className="dash-global-wrap">
                            <div className="row g-4">
                                <div className="col-xxl-8 col-xxxl-9 order-2 order-xxl-1">
                                    <div className="row g-4">
                                        <div className="col-md-6 col-xxxl-3">
                                            <div className="d-flex">
                                                <p className='mb-3 text-secondary'>Your Miners</p>
                                                <div className="ms-auto">
                                                    <OverlayTrigger
                                                        placement={`top`}
                                                        overlay={
                                                            <Tooltip id={`tooltip-top`}>
                                                                Your Miners
                                                            </Tooltip>
                                                        }
                                                    >
                                                        <div className="d-inline-flex">
                                                            <IconEx />
                                                        </div>
                                                    </OverlayTrigger>
                                                </div>
                                            </div>
                                            <div className="d-flex gap-3">
                                                <div>
                                                    <img src={evcLogo} alt="" className="img-fluid" />
                                                </div>
                                                <span className="fw-semibold">194 / 196</span>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xxxl-3">
                                            <div className="d-flex">
                                                <p className='mb-3 text-secondary'>Rewards Per Block</p>
                                                <div className="ms-auto">
                                                    <OverlayTrigger
                                                        placement={`top`}
                                                        overlay={
                                                            <Tooltip id={`tooltip-top`}>
                                                                Rewards Per Block
                                                            </Tooltip>
                                                        }
                                                    >
                                                        <div className="d-inline-flex">
                                                            <IconEx />
                                                        </div>
                                                    </OverlayTrigger>
                                                </div>
                                            </div>
                                            <div className="d-flex gap-3">
                                                <div>
                                                    <img src={evcLogo} alt="" className="img-fluid" />
                                                </div>
                                                <span className="fw-semibold">194,000.00</span>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xxxl-3">
                                            <div className="d-flex">
                                                <p className='mb-3 text-secondary'>Total claimed</p>
                                                <div className="ms-auto">
                                                    <OverlayTrigger
                                                        placement={`top`}
                                                        overlay={
                                                            <Tooltip id={`tooltip-top`}>
                                                                Total claimed
                                                            </Tooltip>
                                                        }
                                                    >
                                                        <div className="d-inline-flex">
                                                            <IconEx />
                                                        </div>
                                                    </OverlayTrigger>
                                                </div>
                                            </div>
                                            <div className="d-flex gap-3">
                                                <div>
                                                    <img src={evcLogo} alt="" className="img-fluid" />
                                                </div>
                                                <span className="fw-semibold">115,085.79</span>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xxxl-3">
                                            <div className="d-flex">
                                                <p className='mb-3 text-secondary'>Total Pending Rewards</p>
                                                <div className="ms-auto">
                                                    <OverlayTrigger
                                                        placement={`top`}
                                                        overlay={
                                                            <Tooltip id={`tooltip-top`}>
                                                                Total Pending Rewards
                                                            </Tooltip>
                                                        }
                                                    >
                                                        <div className="d-inline-flex">
                                                            <IconEx />
                                                        </div>
                                                    </OverlayTrigger>
                                                </div>
                                            </div>
                                            <div className="d-flex gap-3">
                                                <div>
                                                    <img src={evcLogo} alt="" className="img-fluid" />
                                                </div>
                                                <span className="fw-semibold">320.28</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-top pb-4 mt-4"></div>
                                    <div className="row g-4">
                                        <div className="col-md-6 col-xxxl-3">
                                            <div className="d-flex flex-column">
                                                <p className='mb-3 text-secondary'>Daily Rewards</p>
                                                <div className="h5">543.99</div>
                                                <div className="text-14">14.42$</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xxxl-3">
                                            <div className="d-flex flex-column">
                                                <p className='mb-3 text-secondary'>Weekly Rewards</p>
                                                <div className="h5">3,807.94</div>
                                                <div className="text-14">100.93$</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xxxl-3">
                                            <div className="d-flex flex-column">
                                                <p className='mb-3 text-secondary'>Monthly Rewards</p>
                                                <div className="h5">16,319.99</div>
                                                <div className="text-14">432.56$</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xxxl-3">
                                            <div className="d-flex flex-column">
                                                <p className='mb-3 text-secondary'>Yearly Rewards</p>
                                                <div className="h5">198,556.83</div>
                                                <div className="text-14">5,63.76$</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-4 col-xxxl-3 order-1 order-xxl-2">
                                    <div className="d-flex flex-column align-items-center justify-content-center h-100">
                                        <div style={{ height: '130px', width: '210px' }}>
                                            {/* <ReactSpeedometer
                                                fluidWidth={true}
                                                maxValue={100}
                                                value={75}
                                                ringWidth={10}
                                                customSegmentStops={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
                                                needleColor="#F54E4E"
                                                needleHeightRatio={0.5}
                                                segmentColors={[
                                                    "#306FFF",
                                                    "#306FFF",
                                                    "#306FFF",
                                                    "#306FFF",
                                                    "#306FFF",
                                                    "#FFFFFF1F",
                                                    "#FFFFFF1F",
                                                    "#FFFFFF1F",
                                                    "#FFFFFF1F",
                                                    "#FFFFFF1F"
                                                ]}
                                                needleTransitionDuration={3000}
                                                needleTransition="easeElastic"
                                                currentValueText="${value}"
                                            /> */}
                                        </div>
                                        <div className="text-center opacity-75 mt-1 mb-2">Total</div>
                                        <Link to="/dashboard" className="btn btn-primary btn-sm fs-6">Claim</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-xxl-3 col-xxxl-2">
                        <div className="dash-global-wrap h-100">
                            <p>EVC Calculator</p>
                            <div className="text-md mt-4 mb-2 d-flex align-items-center justify-content-between opacity-75">
                                <span>EVC price:</span>
                            </div>
                            <div className="staking-from-wrap">
                                <input type="text" className="from-control py-1" placeholder="000" />
                            </div>
                            <div className="text-md mt-4 mb-2 d-flex align-items-center justify-content-between opacity-75">
                                <span>ROI:</span>
                            </div>
                            <div className="h5">0%</div>
                        </div>
                    </div>
                </div>

                <div className="mt-4 pt-2">
                    <div className="dash-global-wrap">
                        <EvcChart />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default NftMinerRewards;