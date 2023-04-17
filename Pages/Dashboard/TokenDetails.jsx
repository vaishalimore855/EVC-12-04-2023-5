import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import TokenChart from './Charts/TokenChart';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { ReactComponent as Icon1 } from '../../assets/img/dashboard/icons/tokend-icon-1.svg';
import { ReactComponent as Icon2 } from '../../assets/img/dashboard/icons/tokend-icon-2.svg';
import { ReactComponent as Icon3 } from '../../assets/img/dashboard/icons/tokend-icon-3.svg';
import { ReactComponent as Icon4 } from '../../assets/img/dashboard/icons/tokend-icon-4.svg';
import { ReactComponent as Icon5 } from '../../assets/img/dashboard/icons/tokend-icon-5.svg';
import { ReactComponent as Icon6 } from '../../assets/img/dashboard/icons/tokend-icon-6.svg';
import Icon7 from '../../assets/img/dashboard/icons/tokend-icon-7.png';
import Icon8 from '../../assets/img/dashboard/icons/tokend-icon-8.png';

import { ReactComponent as IconEx } from '../../assets/img/dashboard/icons/tokend-icon-ex.svg';
import { ReactComponent as IconCopy } from '../../assets/img/dashboard/icons/tokend-icon-copy.svg';


const TokenDetails = ({ title }) => {

    const newAddress = window.localStorage.getItem("connectedAccount");

    useEffect(() => {
        document.title = title ? title : 'EVC Avatars | Token Details';

        document.querySelector('.page-title').innerText = "Token Details";
    }, [])

    return (
        <> 
        
        <div className="dashboard-wrap">
            <Breadcrumb>
                <li className="breadcrumb-item">
                    <Link to="/">HOME</Link>
                </li>
                <Breadcrumb.Item active>Token Details</Breadcrumb.Item>
            </Breadcrumb>

            <div className="dash-content-area">
                <TokenChart />

                <div className="h1 font-gilroy fw-semibold mt-5 mb-4">General Stats</div>

                <div className="dash-global-wrap">
                    <div className="row g-4">
                        <div className="col-md-6 col-xxl-4">
                            <div className="dash-token-card">
                                <div className="icon-square icon-md">
                                    <Icon1 />
                                </div>
                                <div className="card-title">
                                    <div className="pre-title">Symbol</div>
                                    <div className="main-title">$ EVC</div>
                                </div>
                                <div className="card-tooltip">
                                    <OverlayTrigger
                                        placement={`top`}
                                        overlay={
                                            <Tooltip id={`tooltip-top`}>
                                                Tooltip on <strong>Top</strong>.
                                            </Tooltip>
                                        }
                                    >
                                        <div>
                                            <IconEx />
                                        </div>
                                    </OverlayTrigger>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xxl-4">
                            <div className="dash-token-card">
                                <div className="icon-square icon-md">
                                    <Icon2 />
                                </div>
                                <div className="card-title">
                                    <div className="pre-title">Total Supply</div>
                                    <div className="main-title">10,000,000</div>
                                </div>
                                <div className="card-tooltip">
                                    <OverlayTrigger
                                        placement={`top`}
                                        overlay={
                                            <Tooltip id={`tooltip-top`}>
                                                Tooltip on <strong>Top</strong>.
                                            </Tooltip>
                                        }
                                    >
                                        <div>
                                            <IconEx />
                                        </div>
                                    </OverlayTrigger>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xxl-4">
                            <div className="dash-token-card">
                                <div className="icon-square icon-md">
                                    <Icon3 />
                                </div>
                                <div className="card-title">
                                    <div className="pre-title">Circulating Supply</div>
                                    <div className="main-title">65,592,346</div>
                                </div>
                                <div className="card-tooltip">
                                    <OverlayTrigger
                                        placement={`top`}
                                        overlay={
                                            <Tooltip id={`tooltip-top`}>
                                                Tooltip on <strong>Top</strong>.
                                            </Tooltip>
                                        }
                                    >
                                        <div>
                                            <IconEx />
                                        </div>
                                    </OverlayTrigger>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xxl-4">
                            <div className="dash-token-card">
                                <div className="icon-square icon-md">
                                    <Icon4 />
                                </div>
                                <div className="card-title">
                                    <div className="pre-title">Total Staked</div>
                                    <div className="main-title">30,561,445</div>
                                </div>
                                <div className="card-tooltip">
                                    <OverlayTrigger
                                        placement={`top`}
                                        overlay={
                                            <Tooltip id={`tooltip-top`}>
                                                Tooltip on <strong>Top</strong>.
                                            </Tooltip>
                                        }
                                    >
                                        <div>
                                            <IconEx />
                                        </div>
                                    </OverlayTrigger>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xxl-4">
                            <div className="dash-token-card">
                                <div className="icon-square icon-md">
                                    <Icon5 />
                                </div>
                                <div className="card-title">
                                    <div className="pre-title">Total Farmed</div>
                                    <div className="main-title">000000</div>
                                </div>
                                <div className="card-tooltip">
                                    <OverlayTrigger
                                        placement={`top`}
                                        overlay={
                                            <Tooltip id={`tooltip-top`}>
                                                Tooltip on <strong>Top</strong>.
                                            </Tooltip>
                                        }
                                    >
                                        <div>
                                            <IconEx />
                                        </div>
                                    </OverlayTrigger>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xxl-4">
                            <div className="dash-token-card">
                                <div className="icon-square icon-md">
                                    <Icon6 />
                                </div>
                                <div className="card-title">
                                    <div className="pre-title">Total Vested</div>
                                    <div className="main-title">900,846,209</div>
                                </div>
                                <div className="card-tooltip">
                                    <OverlayTrigger
                                        placement={`top`}
                                        overlay={
                                            <Tooltip id={`tooltip-top`}>
                                                Tooltip on <strong>Top</strong>.
                                            </Tooltip>
                                        }
                                    >
                                        <div>
                                            <IconEx />
                                        </div>
                                    </OverlayTrigger>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row g-4 mt-4 pt-2">
                    <div className="col-lg-8">
                        <div className="dash-global-wrap h-100">
                            <div className="h1 font-gilroy fw-semibold mb-4">Buy EVC Tokens</div>
                            <div className="d-flex gap-3 align-items-center flex-wrap">
                                <div className="d-flex align-items-center g-3 py-2 px-4 bg-12 rounded-2">
                                    <div className="icon-square icon-sm">
                                        <img src={Icon7} alt="" className="img-fluid" />
                                    </div>
                                    <span>Pancake Swap</span>
                                </div>
                                <div className="d-flex align-items-center g-3 py-2 px-4 bg-12 rounded-2">
                                    <div className="icon-square icon-sm">
                                        <img src={Icon8} alt="" className="img-fluid" />
                                    </div>
                                    <span>KuCoin</span>
                                </div>
                                <div className="d-flex align-items-center g-3 py-2 ps-4 pe-3 bg-12 rounded-2 mw-100">
                                    <div className="overflow-hidden text-nowrap col-11 text-md mt-1 opacity-75">BSC Contract: 00B5E45C2725510B8a22a19805aofb96ddeb</div>
                                    <div className="icon-square icon-sm ms-auto cursor-pointer mb-1">
                                        <OverlayTrigger
                                            placement={`top`}
                                            overlay={
                                                <Tooltip id={`tooltip-top`}>
                                                    Copy
                                                </Tooltip>
                                            }
                                        >
                                            <div>
                                                <IconCopy />
                                            </div>
                                        </OverlayTrigger>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="dash-global-wrap">
                            <div className="h3 font-gilroy fw-semibold mb-4">Taxtion</div>
                            <div className="d-grid gap-2">
                                <button className="btn py-2 btn-success w-100">5% Buy</button>
                                <button className="btn py-2 btn-danger w-100">5% Sell</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default TokenDetails;