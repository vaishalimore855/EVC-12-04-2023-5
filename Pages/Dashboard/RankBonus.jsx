import React, { useEffect } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
// import ReactSpeedometer from "react-d3-speedometer";

import busd from '../../assets/img/dashboard/icons/busd.png';
import evcLogo from '../../assets/img/dashboard/icons/evc-logo.png';
import evcLogoLg from '../../assets/img/dashboard/icons/evc-logo-lg.png';




const RankBonus = ({ title }) => {

    const newAddress = window.localStorage.getItem("connectedAccount");

    useEffect(() => {
        document.title = title ? title : 'EVC Avatars | Rank Bonus';

        document.querySelector('.page-title').innerText = "Rank Bonus";
    }, [])

    return (
        <>
        
        <div className="dashboard-wrap">
            <Breadcrumb>
                <li className="breadcrumb-item">
                    <Link to="/">HOME</Link>
                </li>
                <Breadcrumb.Item active>Rank Bonus</Breadcrumb.Item>
            </Breadcrumb>

            <div className="dash-content-area">
                <div className="h1 font-gilroy fw-semibold mt-3 mb-4 pb-3">Affiliate Rank Bonus</div>

                <div className="dash-global-wrap">
                    <div className="row g-4 justify-content-center">
                        <div className="col-md-6 col-xl-4">
                            <div className="dash-card d-flex flex-column bg-19 h-100">
                                <p className="mb-5 mt-0">EVC 2 BONUS</p>
                                <div className="d-flex gap-3 flex-wrap justify-content-between align-items-center mt-auto">
                                    <div className="d-flex flex-column gap-2">
                                        <div className="d-flex align-items-center gap-2">
                                            <img src={busd} alt="" className="img-fluid" />
                                            <span className="text-md opacity-75">BUSD</span>
                                        </div>
                                        <div className="fs-4 font-gilroy font-semibold">800</div>
                                    </div>
                                    <a href="#" className="btn btn-primary btn-wide">CLAIM</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4">
                            <div className="dash-card d-flex flex-column bg-19 h-100">
                                <p className="mb-5 mt-0">EVC 2 BONUS</p>
                                <div className="d-flex gap-3 flex-wrap justify-content-between align-items-center mt-auto">
                                    <div className="d-flex flex-column gap-2">
                                        <div className="d-flex align-items-center gap-2">
                                            <img src={evcLogo} alt="" className="img-fluid" />
                                            <span className="text-md opacity-75">EVC Token</span>
                                        </div>
                                        <div className="fs-4 font-gilroy font-semibold">20000</div>
                                    </div>
                                    <a href="#" className="btn btn-primary btn-wide">CLAIM</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4">
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

                <div className="row g-4 mt-5 pt-1 mb-4 pb-3">
                    <div className="col-md-6 col-xl-4">
                        <div className="dash-global-wrap">
                            <div className="mb-3 line-effect text-muted">Total Commission Earned in</div>
                            <div className="mb-2 pb-1 text-muted">Level 1 & 2 (BUSD)</div>
                            <div className="d-flex align-items-center gap-2">
                                <div className="col-1 p-2 pe-0">
                                    <img src={busd} alt="" className="img-fluid w-100" />
                                </div>
                                <span className="font-gilroy h3 mb-0">700</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4">
                        <div className="dash-global-wrap">
                            <div className="mb-3 line-effect text-muted">Total Commission Earned in</div>
                            <div className="mb-2 pb-1 text-muted">Rank Bonus (BUSD)</div>
                            <div className="d-flex align-items-center gap-2">
                                <div className="col-1 p-2 pe-0">
                                    <img src={busd} alt="" className="img-fluid w-100" />
                                </div>
                                <span className="font-gilroy h3 mb-0">1200</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4">
                        <div className="dash-global-wrap">
                            <div className="mb-3 line-effect text-muted">Total Commission Earned in</div>
                            <div className="mb-2 pb-1 text-muted">Rank Bonus (EVC)</div>
                            <div className="d-flex align-items-center gap-2">
                                <div className="col-1 p-2 pe-0">
                                    <img src={evcLogoLg} alt="" className="img-fluid w-100" />
                                </div>
                                <span className="font-gilroy h3 mb-0">1200</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h4 fw-semibold mt-3 mb-4">Rank Bonus Can Be Claimed 100% Every Monday</div>

                <div className="rank-bonus-area">
                    <div className="highlight mb-4 text-center">EVC Token can be claimed daily</div> <br />
                    <div>If not claimed daily, 3% ADDS up daily for next day so after 33.33 days 100% coin can be withdrawn.</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default RankBonus;