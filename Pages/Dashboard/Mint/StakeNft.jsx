import React, { useState, useEffect } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { ethers } from "ethers";
import { useAccount } from "wagmi";
import Mint from "./MintNft";
import { getTokensOfStaker, setClaimReward, setStakeNFT, setWithdrawNFT, getUnClaimableReward, } from "../../../ContractAction/EVCNFTStakeContractAction";
import { getBalanceEVC } from "../../../ContractAction/EVCStakeContractAction";
import { getWalletOfOwner, getIsApprovedForAll, setNFTApprovalForAll, } from "../../../ContractAction/EVCNFTContractAction";
import TextField from "@mui/material/TextField";
import { Box, Card, CardBody, CardHeader, Flex, Grid, Text, Stack, HStack, } from "@chakra-ui/react";

const Staking = ({ title }) => {

  const [mint, setMint] = useState(false);
  const [walletOwner, SetWalletOwner] = useState();
  const [stakeOfOwnerNFTIDs, setStakeOfOwnerNFTIDs] = useState();
  const [balanceEVC, setBalanceEVC] = useState();
  const [stakeNFT, setStakeNFT] = useState();
  const [unstakeNFT, setUnstakeNFT] = useState();
  const [claimableReward, setClaimableReward] = useState();
  const [isApproved, setApproved] = useState();
  console.log("isApproved", isApproved);

  const Click = () => {
    setMint(true);
  };

  useEffect(() => {
    getUnClaimableReward()

    const getNFTStakingData = async () => {

      const WalletOfOwner = await getWalletOfOwner();
      const StakeOfOwnerNFTIDs = await getTokensOfStaker();
      const BalanceEVC = await getBalanceEVC();
      const ClaimableNFTReward = await getUnClaimableReward();
      const approved = await getIsApprovedForAll();

      SetWalletOwner(WalletOfOwner);
      setStakeOfOwnerNFTIDs(StakeOfOwnerNFTIDs);
      setBalanceEVC(BalanceEVC);
      setClaimableReward(ClaimableNFTReward);
      setApproved(approved);
    };
    getNFTStakingData();
  }, []);

  const getApproved = async () => {
    setNFTApprovalForAll();
  };

  return (
    <>
      {mint ? (
        <Mint />
      ) : (
        <div className="dashboard-wrap">
          <Breadcrumb>
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <Breadcrumb.Item active>Stake</Breadcrumb.Item>
          </Breadcrumb>

          <div className="dash-content-area">
            <div className="h1 font-gilroy fw-semibold mt-3 mb-4 pb-3">
              EVC NFT
              <span style={{ marginLeft: "40%", fontSize: 30 }}>
                <Link onClick={() => Click()}>Mint </Link>
                <Link to="#">Staking</Link>&nbsp;&nbsp;
              </span>
            </div>
            <div className="dash-global-wrap ">
              <h2 style={{ marginLeft: "40%" }}>Your tokens</h2>
              <div className="row g-1">
                <div className="col-md-6 col-xl-6">
                  <div className="dash-card style-3 position-relative">
                    <div
                      style={{
                        border: "1px solid gray",
                        borderRadius: "5px",
                        padding: "10px",
                      }}
                    >
                      <h5 style={{ margin: "20px 130px", color: "#A5B6C3" }}>
                        Claimable Rewards
                      </h5>
                      <br></br>
                      <h2 style={{ margin: "10px 150px", fontWeight: "bold" }}>
                        {claimableReward} EVC
                      </h2>

                      <h3 style={{ marginLeft: 160, fontWeight: "bold" }}></h3>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-xl-6">
                  <div className="dash-card style-4 position-relative">
                    <div
                      style={{
                        border: "1px solid gray",
                        borderRadius: "5px",
                        padding: "10px",
                      }}
                    >
                      <h5
                        style={{
                          margin: "20px 130px",
                          marginLeft: 130,
                          color: "#A5B6C3",
                        }}
                      >
                        Current Balance
                      </h5>
                      <br></br>
                      <h2 style={{ margin: "10px 150px", fontWeight: "bold" }}>
                        {balanceEVC} EVC
                      </h2>

                      <h3 style={{ marginLeft: 160, fontWeight: "bold" }}>

                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                variant="contained"
                style={{ marginLeft: "35%", width: "30%", height: "50px" }}
                onClick={() => setClaimReward()}
              >
                Claim Rewards
              </Button>
              <h2 style={{ marginTop: "2%", marginLeft: "40%" }}>Your NFTs</h2>
              <div className="row g-1" style={{ marginTop: "1%" }}>
                <div className="col-md-6 col-xl-6">
                  <div className="dash-card style-4 position-relative">
                    <div
                      style={{
                        border: "1px solid gray",
                        borderRadius: "10px",
                        padding: "10px",
                      }}
                    >
                      <h2
                        style={{
                          marginLeft: 20,
                          marginTop: 10,
                          fontWeight: "bold",
                        }}
                      >
                        Your Staked NFTs
                      </h2>
                      <p
                        style={{
                          fontSize: "16px",
                          marginLeft: 20,
                          fontWeight: 200,
                        }}
                      >
                        {stakeOfOwnerNFTIDs === 0 ? "You don't have any NFT EVC NFT" : stakeOfOwnerNFTIDs}
                      </p>

                      {/* <h3 style={{ marginLeft: 160, fontWeight: "bold" }}></h3> */}
                    </div>
                  </div>
                  {isApproved === true ? (
                    <input
                      type="text"
                      value={stakeNFT}
                      onChange={(e) => setStakeNFT(e.target.value)}
                    />
                  ) : null}
                  {isApproved === true ? (
                    <Button
                      onClick={() => setStakeNFT(stakeNFT)}
                      variant="contained"
                    >
                      Stake
                    </Button>
                  ) : (
                    <Button
                      onClick={() => getApproved()}
                      variant="contained"
                    >
                      Approve
                    </Button>
                  )}
                </div>

                <div className="col-md-6 col-xl-6">
                  <div className="dash-card style-4 position-relative">
                    <div
                      style={{
                        border: "1px solid gray",
                        borderRadius: "5px",
                        padding: "10px",
                      }}
                    >
                      <h2
                        style={{
                          marginLeft: 20,
                          marginTop: 10,
                          fontWeight: "bold",
                        }}
                      >
                        Your Unstaked NFTs
                      </h2>
                      <p
                        style={{
                          fontSize: "16px",
                          marginLeft: 20,
                          fontWeight: 200,
                        }}
                      >
                        {walletOwner === 0 ? "You don't have any NFT EVC NFT" : walletOwner}
                      </p>

                      {/* <h3 style={{ marginLeft: 160, fontWeight: "bold" }}></h3> */}
                    </div>
                  </div>
                  <input
                    type="text"
                    style={{
                      backgroundColor: "black",
                      color: "gray",
                      marginLeft: "7%",
                      width: "20%",
                      height: "40px",
                      borderRadius: "10px",
                      border: "1px solid gray",
                    }}
                    value={unstakeNFT}
                    onChange={(e) => setUnstakeNFT(e.target.value)}
                  />

                  <Button
                    onClick={() => setWithdrawNFT(unstakeNFT)}
                    variant="contained"
                    style={{
                      marginTop: "2%",
                      marginLeft: "7%",
                      width: "20%",
                      height: "40px",
                      borderRadius: "6px",
                      border: "none",
                    }}
                  >
                    Unstake
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );

};

export default Staking;


// import React, { useState, useEffect } from "react";
// import Breadcrumb from "react-bootstrap/Breadcrumb";
// import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// import Tooltip from "react-bootstrap/Tooltip";
// import Tab from "react-bootstrap/Tab";
// import Tabs from "react-bootstrap/Tabs";
// import { Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { Button } from "@mui/material";
// import { ethers } from "ethers";
// import { useAccount } from "wagmi";
// import Mint from "./MintNft";

// // import {
// //   getTokensOfStaker,
// //   setClaimReward,
// //   setStakeNFT,
// //   setWithdrawNFT,
// //   getTotalClaimableNFTReward,
// // } from "../../../ContractAction/EVCNFTStakeContractAction";
// // import { getBalanceEVC } from "../../../ContractAction/EVCStakeContractAction";
// // import { getWalletOfOwner } from "../../../ContractAction/EVCNFTContractAction";
// import TextField from "@mui/material/TextField";
// import {
//   Box,
//   Card,
//   CardBody,
//   CardHeader,
//   Flex,
//   Grid,
//   Text,
//   Stack,
//   HStack,
// } from "@chakra-ui/react";

// const NftStaking = ({ title }) => {
//   const [mint, setMint] = useState(false);

//   const Click = () => {
//     console.log("................................");
//     setMint(true);
//   };

//   // const [walletOwner, SetWalletOwner] = useState();
//   // useEffect(async () => {
//   //   getWalletOfOwner();
//   //   const WalletOfOwner = await getWalletOfOwner();
//   //   SetWalletOwner(WalletOfOwner);
//   // });

//   // const [stakeOfOwnerNFTIDs, setStakeOfOwnerNFTIDs] = useState();
//   // useEffect(async () => {
//   //   getTokensOfStaker();
//   //   const StakeOfOwnerNFTIDs = await getTokensOfStaker();
//   //   setStakeOfOwnerNFTIDs(StakeOfOwnerNFTIDs);
//   // });

//   // const [balanceEVC, setBalanceEVC] = useState();
//   // useEffect(async () => {
//   //   getBalanceEVC();
//   //   const BalanceEVC = await getBalanceEVC();
//   //   setBalanceEVC(BalanceEVC);
//   // });

//   // const [stakeNFT, setStakeNFT] = useState();
//   // useEffect(async () => {
//   //   setStakeNFT();
//   //   const StakeNft = await setStakeNFT();
//   //   setStakeNFT(StakeNft);
//   // });

//   // const [unstakeNFT, setUnstakeNFT] = useState();
//   // useEffect(async () => {
//   //   setWithdrawNFT();
//   //   const UnstakeNft = await setWithdrawNFT();
//   //   setUnstakeNFT(UnstakeNft);
//   // });

//   // const [totalClaimable, setTotalClaimable] = useState();
//   // useEffect(async () => {
//   //   getTotalClaimableNFTReward();
//   //   const TotalClaimable = await getTotalClaimableNFTReward();
//   //   setTotalClaimable(TotalClaimable);
//   // });

//   return (
//     <>
//       {mint ? (
//         <Mint />
//       ) : (
//         <div className="dashboard-wrap">
//           <Breadcrumb>
//             <li className="breadcrumb-item">
//               <Link to="/">Home</Link>
//             </li>
//             <Breadcrumb.Item active>Stake</Breadcrumb.Item>
//           </Breadcrumb>

//           <div className="dash-content-area">
//             <div className="h1 font-gilroy fw-semibold mt-3 mb-4 pb-3">
//               EVC NFT
//               <span style={{ marginLeft: "28%", fontSize: 30 }}>
//                 <Link onClick={() => Click()}>Mint</Link>&nbsp;&nbsp;
//                 <Link to="#">Staking</Link>
//               </span>
//               <span style={{ marginLeft: "10%" }}>
//                 <Link
//                   href="https://testnets.opensea.io/assets/bsc-testnet/0xBeBbFEd61Cd77412AFCB9f6b8F861AB3fD168f11/1"
//                   _hover={{ textDecoration: "none" }}
//                   target="_blank"
//                 >
//                   <Button
//                     height="40px"
//                     w="18%"
//                     style={{
//                       backgroundColor: "#1a90ff",
//                       color: "White",
//                       fontWeight: "500",
//                       borderRadius: 8,
//                       border: "none",
//                       fontSize: 20,
//                       textTransform: "capitalize"
//                     }}
//                   >
//                     View on Opensea
//                   </Button>
//                 </Link>
//               </span>
//             </div>
//             <div className="dash-global-wrap ">
//               <h2 style={{ marginLeft: "40%" }}>Your tokens</h2>
//               <div className="row g-1">
//                 <div className="col-md-6 col-xl-6">
//                   <div className="dash-card style-3 position-relative">
//                     <div
//                       style={{
//                         border: "1px solid gray",
//                         borderRadius: "5px",
//                         padding: "10px",
//                       }}
//                     >
//                       <h5 style={{ margin: "20px 130px", color: "#A5B6C3" }}>
//                         Claimable Rewards
//                       </h5>
//                       <br></br>
//                       <h2 style={{ margin: "10px 150px", fontWeight: "bold" }}>0 EVC</h2>
//                       {/* {totalClaimable} */}
//                       <h3 style={{ marginLeft: 160, fontWeight: "bold" }}></h3>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="col-md-6 col-xl-6">
//                   <div className="dash-card style-4 position-relative">
//                     <div
//                       style={{
//                         border: "1px solid gray",
//                         borderRadius: "5px",
//                         padding: "10px",
//                       }}
//                     >
//                       <h5 style={{ margin: "20px 130px", marginLeft: 130, color: "#A5B6C3" }}>
//                         Current Balance
//                       </h5>
//                       <br></br>
//                       <h2 style={{ margin: "10px 150px", fontWeight: "bold" }}>0 EVC</h2>
//                       {/* {totalClaimable} */}

//                       <h3 style={{ marginLeft: 160, fontWeight: "bold" }}>
//                         {/* {balanceEVC} EVC */}
//                       </h3>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <Button
//                 variant="contained"
//                 style={{ marginLeft: "35%", width: "30%", height: "50px" }}
//               // onClick={setClaimReward()}
//               >
//                 Claim Rewards
//               </Button>
//               <h2 style={{ marginTop: "2%", marginLeft: "40%" }}>Your NFTs</h2>
//               <div className="row g-1" style={{ marginTop: "1%" }}>
//                 <div className="col-md-6 col-xl-6">
//                   <div className="dash-card style-4 position-relative">
//                     <div
//                       style={{
//                         border: "1px solid gray",
//                         borderRadius: "10px",
//                         padding: "10px",
//                       }}
//                     >
//                       <h2
//                         style={{
//                           marginLeft: 20,
//                           marginTop: 10,
//                           fontWeight: "bold",
//                         }}
//                       >
//                         Your Staked NFTs
//                       </h2>
//                       <p
//                         style={{
//                           fontSize: "16px",
//                           marginLeft: 20,
//                           fontWeight: 200,
//                         }}
//                       >
//                         You don't have any NFT
//                         {/* {stakeOfOwnerNFTIDs} EVC NFT */}
//                       </p>
//                       <br></br>

//                       <h3 style={{ marginLeft: 160, fontWeight: "bold" }}>
//                       </h3>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="col-md-6 col-xl-6">
//                   <div className="dash-card style-4 position-relative">
//                     <div
//                       style={{
//                         border: "1px solid gray",
//                         borderRadius: "5px",
//                         padding: "10px",
//                       }}
//                     >
//                       <h2
//                         style={{
//                           marginLeft: 20,
//                           marginTop: 10,
//                           fontWeight: "bold",
//                         }}
//                       >
//                         Your Unstaked NFTs
//                       </h2>
//                       <p
//                         style={{
//                           fontSize: "16px",
//                           marginLeft: 20,
//                           fontWeight: 200,
//                         }}
//                       >
//                         You don't have any NFT
//                         {/* {walletOwner} EVC NFT */}
//                       </p>
//                       <br></br>

//                       <h3 style={{ marginLeft: 160, fontWeight: "bold" }}>

//                       </h3>
//                     </div>
//                   </div>
//                 </div>

//                 <input
//                   style={{ backgroundColor: "black", color: "gray", marginLeft: "27%", width: "20%", height: "40px", borderRadius: "10px", border: "1px solid gray" }}
//                   type="text"
//                 // value={stakeNFT}
//                 />
//                 <input
//                   type="text"
//                   style={{ backgroundColor: "black", color: "gray", marginLeft: "7%", width: "20%", height: "40px", borderRadius: "10px", border: "1px solid gray" }}
//                 //  value={unstakeNFT}
//                 />

//                 <Button
//                   // onClick={() =>  setStakeNFT(stakeNFT) }
//                   variant="contained"
//                   style={{ marginTop: "2%", marginLeft: "27%", width: "20%", height: "40px", borderRadius: "6px", border: "none" }}
//                 >Stake</Button>
//                 <Button
//                   // onClick={() =>  setUnstakeNFT(unstakeNFT) }
//                   variant="contained"
//                   style={{ marginTop: "2%", marginLeft: "7%", width: "20%", height: "40px", borderRadius: "6px", border: "none" }}
//                 >Unstake</Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default NftStaking;
