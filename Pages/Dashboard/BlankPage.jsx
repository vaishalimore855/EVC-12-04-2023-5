// export default BlankPage;
import React, { useState } from 'react';
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import WalletConnect from "@walletconnect/web3-provider";
import { Navigate } from 'react-router-dom';

// import { Link } from 'react-router-dom';

const BlankPage = () => {

  const providerOptions = {
    walletconnect: {
      package: WalletConnect, // required
      options: {
        infuraId: '5a15aa3454c24ab482eefb35dc2a1f57'// required
      }
    },
  };
  const web3Modal = new Web3Modal({
    network: "rinkeby",
    theme: "light", // optional, 'dark' / 'light',
    cacheProvider: false, // optional
    providerOptions, // required
  });

  const [connectedAccount, setConnectedAccount] = useState("");
  const newAddress = window.localStorage.getItem("connectedAccount");
  const [isConnected, setIsConnected] = useState(false);
  //   const refresh = () => window.location.reload(true)

  const connectWeb3Wallet = async () => {
    try {
      const web3Provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(web3Provider);
      const web3Accounts = await library.listAccounts();
      { web3Accounts && setIsConnected(true) }
      window.localStorage.setItem("connectedAccount", web3Accounts);
      setConnectedAccount(web3Accounts);
    } catch (error) {
      console.log(error);
    }
  };
  const refreshPage = () => window.location.reload();
  //   const disconnectWeb3Modal = () => {
  //     web3Modal.clearCachedProvider();
  //     window.localStorage.removeItem("connectedAccount");
  //     setConnectedAccount(false);
  // };
  //   if(isConnected){
  //     return  <Navigate to="/dashboard/"/>
  //   }

  return (
    <>
      <div className="d-none d-xl-block " style={{ position: "absolute", top: "35%", left: "40%", background: "gray", height: "300px" }}>

        <h2 style={{
          marginTop: "3%"
        }}>Connect Wallet to get started...</h2>
        <button className="btn btn-primary" onClick={() => { connectWeb3Wallet(); }}>
          {/* {newAddress
                  ? `${newAddress.substring(0, 4)}...${newAddress.substring(38)}`
                   : "Connect Wallet"} */}ConnectButton
        </button>
      </div>
      {/* 
            {newAddress ? (
                <div className="app-wrapper">
                    <Link
                        className="btn btn-primary  ms-1"
                        style={{ marginleft: 20 }}
                        onClick={(e) =>{disconnectWeb3Modal(e); refresh()}}
                        // onClick={(e) =>{disconnectWeb3Modal(e)}}
                    >
                        Log Out
                    </Link>
                </div>
                
            ) : null} */}

    </>
  );


}

export default BlankPage;