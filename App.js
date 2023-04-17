import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

// STYLES
import './assets/scss/styles.scss';

// PAGES
import HomePage from './Pages/Home';
import ErrorPage from './Pages/Error';
import Dashboard from './Pages/Dashboard';
import Connect from './Pages/Dashboard/Connect';
import Navbar from './Pages/Dashboard/Globals/Navbar';
import Sidebar from './Pages/Dashboard/Globals/Sidebar';
import EvcAvatars from './Pages/Dashboard/EvcAvatars';
import TokenDetails from './Pages/Dashboard/TokenDetails';
import Staking from './Pages/Dashboard/Staking';
import Farming from './Pages/Dashboard/Farming';
import RankBonus from './Pages/Dashboard/RankBonus';
import BuyBurn from './Pages/Dashboard/BuyBurn';
import NftMinerRewards from './Pages/Dashboard/NftMinerRewards';
import Vesting from './Pages/Dashboard/Vesting';
import Presale from './Pages/Dashboard/Presale';
import Redeem from './Pages/Dashboard/Redeem';
import Error from './Pages/Dashboard/Globals/Error';
import About from './Pages/Home/About';
import Tockenomics from './Pages/Home/Tockenomics';
import How from './Pages/Home/How';
import Mint from './Pages/Dashboard/Mint/MintNft';
import MintNew from './Pages/Dashboard/Mint/MyNFTs';
import ReferralLink from './Pages/Dashboard/ReferralLink';
// import Staking from './Pages/Dashboard/Mint/Staking';


function App() {

  const [sideToggle, setSideToggle] = useState(false);
  //* Sponsor/Reference Address
  const queryString = window.location.search;
  console.log("queryString ", queryString);
  const parameters = new URLSearchParams(queryString);
  console.log("parameters ", parameters);
  const value = parameters.get("ref");
  console.log("value", value);
  window.localStorage.setItem("sponsorAddress", value);
  const DashNavbar = (item) => {
    return (
      <>
        <Navbar sideToggle={sideToggle} setSideToggle={setSideToggle} />
        <Sidebar sideToggle={sideToggle} setSideToggle={setSideToggle} />
        {item}
      </>
    );
  };


  return (
    <>
      <span id="home"></span>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Connect" element={<Connect />} />
        <Route path="/Tockenomics" element={<Tockenomics />} />
        <Route path="/How" element={<How />} />
        <Route path="/dashboard">
          <Route index element={DashNavbar(<EvcAvatars />)} />
          <Route path="main" element={DashNavbar(<Dashboard />)} />
          <Route path="evc-avatars" element={DashNavbar(<EvcAvatars />)} />
          <Route path="token-details" element={DashNavbar(<TokenDetails />)} />
          <Route path="staking" element={DashNavbar(<Staking />)} />
          <Route path="mint" element={DashNavbar(<Mint />)} />
          {/* <Route path="staking" element={DashNavbar(<Staking />)} /> */}
          <Route path="mynfts" element={DashNavbar(<MintNew />)} />
          <Route path="presale" element={DashNavbar(<Presale />)} />
          <Route path="redeem" element={DashNavbar(<Redeem />)} />
          <Route path="farming" element={DashNavbar(<Farming />)} />
          <Route path="rank-bonus" element={DashNavbar(<RankBonus />)} />
          <Route path="buy-burn" element={DashNavbar(<BuyBurn />)} />
          <Route path="nft-miner-rewards" element={DashNavbar(<NftMinerRewards />)} />
          <Route path="referralLink" element={DashNavbar(<ReferralLink />)} />
          <Route path="vesting" element={DashNavbar(<Vesting />)} />
          <Route path="connect" element={<Connect />} />
          <Route path="*" element={DashNavbar(<Error />)} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;