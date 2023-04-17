import React, { useEffect } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";

import profilePic from "../../assets/img/dashboard/img/avatar-1.png";
import busd from "../../assets/img/dashboard/icons/busd.png";
import dashCardIcon1 from "../../assets/img/dashboard/icons/dash-card-icon-1.png";
import dashCardIcon2 from "../../assets/img/dashboard/icons/dash-card-icon-2.png";
import dashIcon1 from "../../assets/img/dashboard/icons/dash-icon-1.svg";
import dashIcon2 from "../../assets/img/dashboard/icons/dash-icon-2.svg";
import dashIcon3 from "../../assets/img/dashboard/icons/dash-icon-3.svg";
import dashIcon4 from "../../assets/img/dashboard/icons/dash-icon-4.svg";
import DashChart from "./Charts/OverviewChart";
const Dashboard = ({ title }) => {
  const newAddress = window.localStorage.getItem("connectedAccount");

  useEffect(() => {
    document.title = title ? title : "EVC Avatars | Dashboard";

    document.querySelector(".page-title").innerText = "NFT MINTING REWARDS";
  }, []);

  return (
    <>
      <div className="dashboard-wrap">
        <Breadcrumb>
          <li className="breadcrumb-item">
            <Link to="/">HOME</Link>
          </li>
          <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
        </Breadcrumb>

        <div className="dash-content-area">
          <div className="row">
            <div className="col-lg-12 col-xl-12 col-xxxl-3">
              <div className="row">
                <div className="col-xxxl-12 col-xl-4 col-md-6">
                  <div className="card-evc style-2 d-flex flex-column mb-4">
                    <div className="evc-avatar">
                      <img
                        src={profilePic}
                        alt=""
                        className="img-fluid w-100"
                      />
                    </div>
                    <div className="evc-info p-3 pb-0 h-100 d-flex flex-column justify-content-between">
                      <div className="d-flex gap-2 flex-wrap justify-content-between mb-4">
                        <a href="#" className="evc-title">
                          CryptoCap Tycoon
                        </a>
                        <div className="evc-no">#EVC 5</div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className="evc-price">
                          <div className="evc-price-title">PRICE</div>
                          <div className="evc-price-amount">
                            <img src={busd} alt="" className="img-fluid" />
                            $55,000
                          </div>
                        </div>
                        <div className="evc-bv">
                          <div className="evc-bv-title">BV</div>
                          <div className="evc-bv-amount">
                            <img src={busd} alt="" className="img-fluid" />
                            $50,000
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxxl-12 col-xl-8 col-md-6">
                  <div className="d-flex h-100 w-100">
                    <div className="evc-rank mt-xxxl-2 w-100">
                      <div className="evc-rank-top">RANK- EVC 5</div>
                      <div className="evc-rank-list">
                        <Link to="/dashboard/main/#">
                          <span className="rank">1</span>
                          <div className="dp d-flex align-items-center">
                            <div className="icon-square icon-circle overflow-hidden">
                              <img src="" alt="" />
                            </div>
                            <div className="username">@uirahman92</div>
                          </div>
                          <div className="point">8560</div>
                        </Link>
                        <Link to="/dashboard/main/#">
                          <span className="rank">1</span>
                          <div className="dp d-flex align-items-center">
                            <div className="icon-square icon-circle overflow-hidden">
                              <img src="" alt="" />
                            </div>
                            <div className="username">@uirahman92</div>
                          </div>
                          <div className="point">8560</div>
                        </Link>
                        <Link to="/dashboard/main/#">
                          <span className="rank">1</span>
                          <div className="dp d-flex align-items-center">
                            <div className="icon-square icon-circle overflow-hidden">
                              <img src="" alt="" />
                            </div>
                            <div className="username">@uirahman92</div>
                          </div>
                          <div className="point">8560</div>
                        </Link>
                        <Link to="/dashboard/main/#">
                          <span className="rank">1</span>
                          <div className="dp d-flex align-items-center">
                            <div className="icon-square icon-circle overflow-hidden">
                              <img src="" alt="" />
                            </div>
                            <div className="username">@uirahman92</div>
                          </div>
                          <div className="point">8560</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-xl-12 col-xxxl-9">
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="dash-card">
                    <div className="icon-square icon-md mb-3">
                      <img src={dashIcon1} alt="" className="img-fluid" />
                    </div>
                    <p>Total EVC Minted</p>
                    <div className="d-flex flex-wrap align-items-center gap-2 dash-card-amount">
                      <div>
                        <img src={dashCardIcon1} alt="" className="img-fluid" />
                      </div>
                      <div>40,000 ($4000)</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="dash-card">
                    <div className="icon-square icon-md mb-3">
                      <img src={dashIcon2} alt="" className="img-fluid" />
                    </div>
                    <p>Personal EVC Staked Amount</p>
                    <div className="d-flex flex-wrap align-items-center gap-2 dash-card-amount">
                      <div>
                        <img src={dashCardIcon1} alt="" className="img-fluid" />
                      </div>
                      <div>1000</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="dash-card">
                    <div className="icon-square icon-md mb-3">
                      <img src={dashIcon3} alt="" className="img-fluid" />
                    </div>
                    <p>Total Commission Earned</p>
                    <div className="d-flex flex-wrap align-items-center gap-2 dash-card-amount">
                      <div>
                        <img src={dashCardIcon2} alt="" className="img-fluid" />
                      </div>
                      <div>10,000</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="dash-card">
                    <div className="icon-square icon-md mb-3">
                      <img src={dashIcon4} alt="" className="img-fluid" />
                    </div>
                    <p>Personal Farming Amount</p>
                    <div className="d-flex flex-wrap align-items-center gap-2 dash-card-amount">
                      <div>$ 8,000</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <div className="dash-global-wrap pb-2">
                  <DashChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
