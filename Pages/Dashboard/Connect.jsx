// import React, { useState } from 'react';
// import { BsCheckLg } from 'react-icons/bs';
// // import { useState, useEffect } from 'react';
// // import Web3 from 'web3';
// import connect1 from '../../assets/img/dashboard/connect/connect-1.png';
// // import connect2 from '../../assets/img/dashboard/connect/connect-2.png';
// // import connect3 from '../../assets/img/dashboard/connect/connect-3.png';
// // import connect4 from '../../assets/img/dashboard/connect/connect-4.png';
// // import connect5 from '../../assets/img/dashboard/connect/connect-5.png';
// // import connect6 from '../../assets/img/dashboard/connect/connect-6.png';
// import { MdCancel } from "react-icons/md";
// import Web3Modal from "web3modal";
// import { ethers } from "ethers";
// import WalletConnect from "@walletconnect/web3-provider";

// const Connect = ({ onConnectMetamask, onConnect, setBox }) => {
//   const providerOptions = {
//     walletconnect: {
//       package: WalletConnect, // required
//       options: {
//         infuraId:'5a15aa3454c24ab482eefb35dc2a1f57'// required
//       }
//     },  
//   };


//  const web3Modal = new Web3Modal({
//     network: "rinkeby",
//     theme: "light", // optional, 'dark' / 'light',
//     cacheProvider: false, // optional
//     providerOptions, // required
//   });

//   const [connectedAccount, setConnectedAccount] = useState("");

//   const connectWeb3Wallet = async () => {
//     try {
//       const web3Provider = await web3Modal.connect();
//       const library = new ethers.providers.Web3Provider(web3Provider);
//       const web3Accounts = await library.listAccounts();
//       setConnectedAccount(web3Accounts[0]);
//       // setBox(false)
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const disconnectWeb3Modal = async () => {
//     await web3Modal.clearCachedProvider();
//     setConnectedAccount("");
//   };


//  return (
//      <div className="dash-connect">
//      <div className="connect-options d-flex flex-column gap-3 z-2 position-relative">
//         <button onClick={()=>setBox(false)} style={{ opacity: "0.6", position: "absolute", right: "0px", top: '1px' }} >
//           < MdCancel /> 
//           </button> 
//          <div className="text-center mb-1 fw-semibold fs-4">Connect a wallet</div> 
      
//          <a href="#" onClick={onConnect}>
//           <img src={connect1} alt="" className="img-fluid" />
//           <span>Metamask</span>
//         </a> 
//         {connectedAccount && <p>Connected to ${connectedAccount}</p>}
//         {!connectedAccount ? (
        
//         <button onClick={()=>{connectWeb3Wallet();setBox(false)}}>Connect Wallet</button>
//          ) : (
//          <button onClick={()=>disconnectWeb3Modal()}>Disconnect</button>
//          )}

        
//         {/* <a href="#" onClick={connectWeb3Wallet}>
//           <img src={connect5} alt="" className="img-fluid" />
//           <span>Wallet Connect</span>
//         </a>  */}
     
        

    
       
//          </div> 
    
//        </div>  
//   );

// }

// export default Connect