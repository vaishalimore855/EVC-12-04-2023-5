import React, { useState, useEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { ReactComponent as Sidebar1 } from "../../../assets/img/dashboard/icons/sidebar-1.svg";
import { ReactComponent as Sidebar2 } from "../../../assets/img/dashboard/icons/sidebar-2.svg";
import { ReactComponent as Sidebar3 } from "../../../assets/img/dashboard/icons/sidebar-3.svg";
import { ReactComponent as Sidebar4 } from "../../../assets/img/dashboard/icons/sidebar-4.svg";
import { ReactComponent as Sidebar5 } from "../../../assets/img/dashboard/icons/sidebar-5.svg";
import { ReactComponent as Sidebar6 } from "../../../assets/img/dashboard/icons/sidebar-6.svg";
import { ReactComponent as Sidebar7 } from "../../../assets/img/dashboard/icons/sidebar-7.svg";
import { ReactComponent as Sidebar8 } from "../../../assets/img/dashboard/icons/sidebar-8.svg";
import { ReactComponent as Sidebar9 } from "../../../assets/img/dashboard/icons/sidebar-9.svg";
import { ReactComponent as Sidebar10 } from "../../../assets/img/dashboard/icons/sidebar-10.svg";
import { ReactComponent as Sidebar11 } from "../../../assets/img/dashboard/icons/sidebar-11.svg";
import { NavLink, Navigate } from "react-router-dom";
import { ReactComponent as EvcIcon } from "../../../assets/img/dashboard/icons/evc-icon.svg";
import {
  FaUserCircle,
  FaTwitter,
  FaPaperPlane,
  FaDiscord,
  FaFacebookF,
  FaTiktok,
  FaInstagram,
} from "react-icons/fa";
import { getBalanceOfPreSale } from "../../../ContractAction/PreSaleContractAction";
const Sidebar = ({ sideToggle, setSideToggle, presaleBalanceOf }) => {
  // const refresh = () => window.location.reload(true)
  const [preevc, setPreev] = useState();

  useEffect(() => {
    const getData = async () => {
      let Preevc = await getBalanceOfPreSale();
      setPreev(Preevc);
    };
    getData();
  }, []);
  const newAddress = window.localStorage.getItem("connectedAccount");

  if (newAddress === null) {
    return <Navigate to="/" />;
  }
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setSideToggle(false);
      }}
    >
      <div
        className={`d-flex flex-column cbd-sidebar${sideToggle ? " show" : ""}`}
      >
        <div className="d-flex d-sm-none gap-3 flex-column mb-2 p-3 border-bottom">
          <div className="d-flex align-items-center gap-3 d-sm-none">
            <div className="cursor-pointer icon-square icon-circle icon-user p-2">
              <FaUserCircle />
            </div>
            <div>
              <div className="text-uppercase text-sm opacity-75">HOLDER</div>
              <div>18,751</div>
            </div>
          </div>
          <div className="d-flex align-items-center gap-3 d-sm-none">
            <div className="cursor-pointer icon-square icon-circle bg-gradient">
              <EvcIcon />
            </div>
            <div>
              <div className="text-uppercase text-sm opacity-75">EVC TOKEN</div>
              <div>8,967,00</div>
            </div>
          </div>
        </div>

        <ul className="sidebar-list">
          <li
            onClick={() => {
              setSideToggle(false);
            }}
          >
            <NavLink
              to="/dashboard/evc-avatars"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              <div className="icon">
                <Sidebar1 />
              </div>
              <span>Buy EVC Avatars</span>
            </NavLink>
          </li>
          <li
            onClick={() => {
              setSideToggle(false);
            }}
          >
            <NavLink
              to="/dashboard/mynfts"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              <div className="icon">
                <Sidebar4 />
              </div>
              <span>My NFTs</span>
            </NavLink>
          </li>
          <li
            onClick={() => {
              setSideToggle(false);
            }}
          >
            <NavLink
              to="/dashboard/staking"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              <div className="icon">
                <Sidebar4 />
              </div>
              <span>Staking</span>
            </NavLink>
          </li>
          <li
            onClick={() => {
              setSideToggle(false);
            }}
          >
            <NavLink
              to="/dashboard/main"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              <div className="icon">
                <Sidebar2 />
              </div>
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li
            onClick={() => {
              setSideToggle(false);
            }}
          >
            <NavLink
              to="/dashboard/token-details"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              <div className="icon">
                <Sidebar3 />
              </div>
              <span>Token Details</span>
            </NavLink>
          </li>

          {/* <li onClick={() => { setSideToggle(false) }}>
                        <NavLink to="/dashboard/mint" className={({ isActive }) => isActive ? 'active' : undefined}>
                            <div className="icon"><Sidebar4 /></div>
                            <span>Mint</span>
                        </NavLink>
                    </li> */}

          {/* <li onClick={() => { setSideToggle(false) }}>
                        <NavLink to="/dashboard/stake" className={({ isActive }) => isActive ? 'active' : undefined}>
                            <div className="icon"><Sidebar4 /></div>
                            <span>Stake</span>
                        </NavLink>
                    </li> */}
          {preevc > 0 && (
            <li
              onClick={() => {
                setSideToggle(false);
              }}
            >
              <NavLink
                to="/dashboard/Presale"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                <div className="icon">
                  <Sidebar11 />
                </div>
                <span>Presale</span>
              </NavLink>
            </li>
          )}
          {preevc > 0 && (
            <li
              onClick={() => {
                setSideToggle(false);
              }}
            >
              <NavLink
                to="/dashboard/Redeem"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                <div className="icon">
                  <Sidebar10 />
                </div>
                <span>Redeem</span>
              </NavLink>
            </li>
          )}
          <li
            onClick={() => {
              setSideToggle(false);
            }}
          >
            <NavLink
              to="/dashboard/farming"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              <div className="icon">
                <Sidebar5 />
              </div>
              <span>Farming</span>
            </NavLink>
          </li>
          <li
            onClick={() => {
              setSideToggle(false);
            }}
          >
            <NavLink
              to="/dashboard/rank-bonus"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              <div className="icon">
                <Sidebar6 />
              </div>
              <span>Rank Bonus</span>
            </NavLink>
          </li>
          <li
            onClick={() => {
              setSideToggle(false);
            }}
          >
            <NavLink
              to="/dashboard/buy-burn"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              <div className="icon">
                <Sidebar7 />
              </div>
              <span>Buy & Burn</span>
            </NavLink>
          </li>
          <li
            onClick={() => {
              setSideToggle(false);
            }}
          >
            <NavLink
              to="/dashboard/nft-miner-rewards"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              <div className="icon">
                <Sidebar8 />
              </div>
              <span>NFT Miner Rewards</span>
            </NavLink>
          </li>
          <li
            onClick={() => {
              setSideToggle(false);
            }}
          >
            <NavLink
              to="/dashboard/referralLink"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              <div className="icon">
                <Sidebar8 />
              </div>
              <span>Referral Link</span>
            </NavLink>
          </li>
          {presaleBalanceOf > 0 && (
            <li
              onClick={() => {
                setSideToggle(false);
              }}
            >
              <NavLink
                to="/dashboard/vesting"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                <div className="icon">
                  <Sidebar9 />
                </div>
                <span>Vesting</span>
              </NavLink>
            </li>
          )}
        </ul>

        <div className="border-top border-dark pt-4 mx-3 mt-auto mb-5">
          <div className="h6 mb-3">FOLLOW US</div>
          <ul className="d-flex list-unstyled m-0 p-0">
            <li>
              <a
                href="#"
                className="icon-square icon-sm icon-social rounded p-2 me-1"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="icon-square icon-sm icon-social rounded p-2 me-1"
              >
                <FaPaperPlane />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="icon-square icon-sm icon-social rounded p-2 me-1"
              >
                <FaDiscord />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="icon-square icon-sm icon-social rounded p-2 me-1"
              >
                <FaFacebookF style={{ height: "14px" }} />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="icon-square icon-sm icon-social rounded p-2 me-1"
              >
                <FaTiktok />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="icon-square icon-sm icon-social rounded p-2 me-1"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default Sidebar;
