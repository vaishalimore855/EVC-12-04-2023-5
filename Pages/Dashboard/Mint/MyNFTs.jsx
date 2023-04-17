import React, { useState, useEffect } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Route, Routes } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Button } from "@mui/material";
import level1 from "../Mint/Images/level1.png";
import level2 from "../Mint/Images/level2.png";
import level3 from "../Mint/Images/level3.png";
import level4 from "../Mint/Images/level4.png";
import level5 from "../Mint/Images/level5.png";
import level6 from "../Mint/Images/level6.png";
import level7 from "../Mint/Images/level7.png";
import level8 from "../Mint/Images/level8.png";
import { Link } from "react-router-dom";
import { ethers } from "ethers";
import { styled } from "@mui/material/styles";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Input,
  Progress,
  Stack,
  Text,
} from "@chakra-ui/react";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import StakeNft from "./StakeNft";
import { getWalletOfOwner } from "../../../ContractAction/EVCNFTContractAction";
import {
  getTokensOfStaker,
  setClaimReward,
  getUnClaimableReward,
  getCurrentAPYOfPlan,
  getNextClaimTime,
} from "../../../ContractAction/EVCNFTStakeContractAction";
import {
  getTotalSupplyL1,
  getTotalSupplyL2,
  getTotalSupplyL3,
  getTotalSupplyL4,
  getTotalSupplyL5,
  getTotalSupplyL6,
  getTotalSupplyL7,
  getTotalSupplyL8,
  getLevelNFT1,
  getLevelNFT2,
  getLevelNFT3,
  getLevelNFT4,
  getLevelNFT5,
  getLevelNFT6,
  getLevelNFT7,
  getLevelNFT8,
} from "../../../ContractAction/EVCNFTContractAction";

import {
  setMintL1,
  setMintL2,
  setMintL3,
  setMintL4,
  setMintL5,
  setMintL6,
  setMintL7,
  setMintL8,
} from "../../../ContractAction/EVCNFTContractAction";

import {
  setStakeNFT,
  setWithdrawNFT,
} from "../../../ContractAction/EVCNFTStakeContractAction";
import {
  getIsApprovedForAll,
  setNFTApprovalForAll,
} from "../../../ContractAction/EVCNFTContractAction";

var rewardobj = {};
var claimTimeobj = {};
//* Mint Page
function MintNew({ title }) {
  //* Stake
  const [walletOwner, SetWalletOwner] = useState();
  console.log("walletOwner...................", walletOwner);

  //* Unstake
  const [stakeOfOwnerNFTIDs, setStakeOfOwnerNFTIDs] = useState();
  console.log("stakeOfOwnerNFTIDs......................", stakeOfOwnerNFTIDs);

  const imgUrl =
    "https://ipfs.io/ipfs/QmcY6KsSeq1PEEpqnNV1q1tLx5NwfWEUS6qgrZ4FtVoijD/";

  const [isApproved, setApproved] = useState();
  console.log("isApproved", isApproved);

  const [stakeNFT, setstakeNFT] = useState();

  const [reward, setReward] = useState();
  console.log("reward", reward);

  const [apy, setApy] = useState();

  const newAddress = window.localStorage.getItem("connectedAccount");

  useEffect(() => {
    document.title = title ? title : "EVC Avatars | Mint";
    document.querySelector(".page-title").innerText = "Mint";
  }, []);
  const [totalSupplyL1, setTotalSupplyL1] = useState();
  const [totalSupplyL2, setTotalSupplyL2] = useState();
  const [totalSupplyL3, setTotalSupplyL3] = useState();
  const [totalSupplyL4, setTotalSupplyL4] = useState();
  const [totalSupplyL5, setTotalSupplyL5] = useState();
  const [totalSupplyL6, setTotalSupplyL6] = useState();
  const [totalSupplyL7, setTotalSupplyL7] = useState();
  const [totalSupplyL8, setTotalSupplyL8] = useState();

  const [levelNFT1, setLevelNFT1] = useState();
  const [levelNFT2, setLevelNFT2] = useState();
  const [levelNFT3, setLevelNFT3] = useState();
  const [levelNFT4, setLevelNFT4] = useState();
  const [levelNFT5, setLevelNFT5] = useState();
  const [levelNFT6, setLevelNFT6] = useState();
  const [levelNFT7, setLevelNFT7] = useState();
  const [levelNFT8, setLevelNFT8] = useState();

  useEffect(() => {
    //* Get Total Supply Data
    const getTotalSupplyData = async () => {
      getTotalSupplyL1();
      const TotalSupplyL1 = await getTotalSupplyL1();
      setTotalSupplyL1(TotalSupplyL1);

      getTotalSupplyL2();
      const TotalSupplyL2 = await getTotalSupplyL2();
      setTotalSupplyL2(TotalSupplyL2);

      getTotalSupplyL3();
      const TotalSupplyL3 = await getTotalSupplyL3();
      setTotalSupplyL3(TotalSupplyL3);

      getTotalSupplyL4();
      const TotalSupplyL4 = await getTotalSupplyL4();
      setTotalSupplyL4(TotalSupplyL4);

      getTotalSupplyL5();
      const TotalSupplyL5 = await getTotalSupplyL5();
      setTotalSupplyL5(TotalSupplyL5);

      getTotalSupplyL6();
      const TotalSupplyL6 = await getTotalSupplyL6();
      setTotalSupplyL6(TotalSupplyL6);

      getTotalSupplyL7();
      const TotalSupplyL7 = await getTotalSupplyL7();
      setTotalSupplyL7(TotalSupplyL7);

      getTotalSupplyL8();
      const TotalSupplyL8 = await getTotalSupplyL8();
      setTotalSupplyL8(TotalSupplyL8);
    };
    getTotalSupplyData();
  }, []);
  useEffect(() => {
    //* Get NFT Staking Data
    const getNFTStakingData = async () => {
      const WalletOfOwner = await getWalletOfOwner();
      const StakeOfOwnerNFTIDs = await getTokensOfStaker();
      const approved = await getIsApprovedForAll();
      const claimReward = await getUnClaimableReward(1);
      const apyInfo = await getCurrentAPYOfPlan();
      SetWalletOwner(WalletOfOwner);
      setStakeOfOwnerNFTIDs(StakeOfOwnerNFTIDs);
      setApproved(approved);
      setReward(claimReward);
      setApy(apyInfo);
    };
    getNFTStakingData();
  }, []);

  useEffect(() => {
    //* Get Level Data
    const getLevelData = async () => {
      getLevelNFT1();
      const LevelNFT1 = await getLevelNFT1();
      setLevelNFT1(LevelNFT1);

      getLevelNFT2();
      const LevelNFT2 = await getLevelNFT2();
      setLevelNFT2(LevelNFT2);

      getLevelNFT3();
      const LevelNFT3 = await getLevelNFT3();
      setLevelNFT3(LevelNFT3);

      getLevelNFT4();
      const LevelNFT4 = await getLevelNFT4();
      setLevelNFT4(LevelNFT4);

      getLevelNFT5();
      const LevelNFT5 = await getLevelNFT5();
      setLevelNFT5(LevelNFT5);

      getLevelNFT6();
      const LevelNFT6 = await getLevelNFT6();
      setLevelNFT6(LevelNFT6);

      getLevelNFT7();
      const LevelNFT7 = await getLevelNFT7();
      setLevelNFT7(LevelNFT7);

      getLevelNFT8();
      const LevelNFT8 = await getLevelNFT8();
      setLevelNFT8(LevelNFT8);
    };
    getLevelData();
  }, []);

  // NextClaim Time
  const nextClaimTime = window.localStorage.getItem("nextClaim ");
  console.log("nextClaimTime", nextClaimTime);
 
  //Current Time
  const start = Date.now();
  let epoch = start / 1000;
  let myepoch = epoch.toFixed(0);
  console.log("epoch...", myepoch);

  useEffect(() => {
    const getReward = async () => {
      if (typeof stakeOfOwnerNFTIDs !== "undefined") {
        for (let i = 0; i < stakeOfOwnerNFTIDs.length; i++) {
          const rewardinfo = await getUnClaimableReward(stakeOfOwnerNFTIDs[i]);
          rewardobj[stakeOfOwnerNFTIDs[i]] = rewardinfo;
        }
      }
    };
    getReward();
    console.log("rewardobj", rewardobj);

    const getClaimTime = async () => {
      if (typeof stakeOfOwnerNFTIDs !== "undefined") {
        for (let i = 0; i < stakeOfOwnerNFTIDs.length; i++) {
          const timeInfo = await getNextClaimTime(stakeOfOwnerNFTIDs[i]);
          claimTimeobj[stakeOfOwnerNFTIDs[i]] = timeInfo;
        }
      }
    };
    getClaimTime();
    console.log("claimTimeobj", claimTimeobj);
  }, [stakeOfOwnerNFTIDs]);

  const [stake, setStake] = useState(false);

  const Click = () => {
    setStake(true);
  };

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
  }));

  const getApproved = async () => {
    setNFTApprovalForAll();
  };

  //   if (typeof stakeOfOwnerNFTIDs !== "undefined"){
  //     const getReward = async () => {
  //     for(let i = 0; i<stakeOfOwnerNFTIDs.length; i++){
  //       const  rewardinfo = await getUnClaimableReward(stakeOfOwnerNFTIDs[i])
  //       console.log("rewardssss", rewardinfo)
  //     }
  //   }
  //   getReward()
  // }

  return (
    <>
      <div>
        {stake ? (
          //* StakeNft Component
          <StakeNft />
        ) : (
          <div className="dashboard-wrap">
            <Breadcrumb>
              <li className="breadcrumb-item">
                <Link to="/">HOME</Link>
              </li>
              <Breadcrumb.Item active>My NFTs</Breadcrumb.Item>
            </Breadcrumb>
            <div className="dash-content-area">
              <div className="row">
                <div className="col">
                  <h2 style={{ fontWeight: "bold" }}>EVC NFT</h2>
                </div>
                {/* <div class="col" style={{ fontSize: "28px", marginLeft: "10%" }}>
                <Link to="/">My NFTs</Link>&nbsp;&nbsp;
                <Link onClick={() => Click()}>Staking</Link>
              </div> */}
                {/* View on Opensea Button */}
                {/* <div class="col">
                <Link
                  href="https://testnets.opensea.io/"
                  _hover={{ textDecoration: "none" }}
                  target="_blank"
                  style={{ marginLeft: "30%" }}
                >
                  <Button
                    height="45px"
                    w="50%"
                    style={{
                      backgroundColor: "#1a90ff",
                      color: "White",
                      fontWeight: "500",
                      borderRadius: 8,
                      border: "none",
                      fontSize: 18,
                      textTransform: "capitalize",
                    }}
                  >
                    View on Opensea
                  </Button>
                </Link>
              </div> */}
              </div>
            </div>

            <div className="dash-global-wrap" style={{ marginLeft: "12%" }}>
              <h3 style={{ marginLeft: "38%" }}>Stake</h3>
              <h5 style={{ marginLeft: "80%" }}>APY: {apy}%</h5>
              <div></div>
              <div className="row g-1">
                {walletOwner &&
                  walletOwner.map((data1, index) => (
                    <div className="col-md-5 col-xl-5" key={index}>
                      <div className="dash-card style-3 position-relative">
                        <h6 style={{ textAlign: "center" }}>
                          Level{" "}
                          {data1 >= 1 && data1 <= 10
                            ? "1"
                            : data1 >= 21 && data1 <= 30
                            ? "2"
                            : data1 >= 31 && data1 <= 40
                            ? "3"
                            : data1 >= 41 && data1 <= 50
                            ? "4"
                            : data1 >= 51 && data1 <= 60
                            ? "5"
                            : data1 >= 61 && data1 <= 70
                            ? "1"
                            : data1 >= 71 && data1 <= 80
                            ? "1"
                            : data1 >= 81 && data1 <= 90
                            ? "1"
                            : null}
                        </h6>
                        <hr></hr>
                        <div>
                          <img
                            src={`${imgUrl}${data1}.png`}
                            alt=""
                            className="img-fluid"
                            style={{
                              height: "360px",
                              width: "100%",
                              borderRadius: "10px",
                            }}
                          />
                          <br></br>
                          <br></br>
                          {/* <Button
                          style={{
                            width: "40%",
                            height: "40px",
                            marginLeft: "30%",
                            marginTop: "2%",
                          }}
                          variant="contained"
                          onClick={() => setStakeNFT(data1)}
                        >
                          Stake
                        </Button> */}
                          {isApproved === true ? (
                            //* Stake Button
                            <Button
                              style={{
                                width: "35%",
                                height: "40px",
                                marginLeft: "40%",
                                marginTop: "2%",
                              }}
                              onClick={() => setStakeNFT(data1)}
                              variant="contained"
                            >
                              Stake
                            </Button>
                          ) : (
                            //*  Approve Button
                            <Button
                              onClick={() => getApproved()}
                              variant="contained"
                              style={{
                                width: "35%",
                                height: "40px",
                                marginLeft: "40%",
                                marginTop: "2%",
                              }}
                            >
                              Approve
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <hr></hr>
              <h3 style={{ marginLeft: "38%" }}>Unstake</h3>
              {/* <button type="button" class="btn btn-primary" style={{ marginLeft: "35%" }} onClick={()=>setClaimReward()}>Claim Reward</button> */}
              <div className="row g-1">
                {stakeOfOwnerNFTIDs &&
                  stakeOfOwnerNFTIDs.map((data2, index) => (
                    <div className="col-md-5 col-xl-5" key={index}>
                      <div className="dash-card style-3 position-relative">
                        <h6 style={{ textAlign: "center" }}>
                          Level{" "}
                          {data2 >= 1 && data2 <= 10
                            ? "1"
                            : data2 >= 21 && data2 <= 30
                            ? "2"
                            : data2 >= 31 && data2 <= 40
                            ? "3"
                            : data2 >= 41 && data2 <= 50
                            ? "4"
                            : data2 >= 51 && data2 <= 60
                            ? "5"
                            : data2 >= 61 && data2 <= 70
                            ? "1"
                            : data2 >= 71 && data2 <= 80
                            ? "1"
                            : data2 >= 81 && data2 <= 90
                            ? "1"
                            : null}
                        </h6>
                        <hr></hr>
                        <div>
                          <img
                            src={`${imgUrl}${data2}.png`}
                            alt=""
                            className="img-fluid"
                            style={{
                              height: "360px",
                              width: "100%",
                              borderRadius: "10px",
                            }}
                          />
                          <br></br>
                          <br></br>
                          <div>
                            {/* Claimable Value: { rewardobj && console.log("hhhhhh",rewardobj)} */}
                            Claimable Value: {rewardobj && rewardobj[data2]}
                          </div>
                          <div className="d-grid gap-2 d-md-block">
                            <button
                              className="btn btn-primary"
                              type="button"
                              onClick={() => setWithdrawNFT(data2)}
                            >
                              Unstake
                            </button>
                            <button
                              className="btn btn-primary ms-4"
                              type="button"
                              onClick={() => {
                                claimTimeobj[data2] <= epoch
                                  ? setClaimReward(data2)
                                  : alert("wait till next claimable timing")
                              }}
                            >
                              Claim
                            </button>
                          </div>
                          {/* <Button
                          style={{
                            width: "40%",
                            height: "40px",
                            marginLeft: "30%",
                            marginTop: "2%",
                          }}
                          variant="contained"
                          onClick={() => setWithdrawNFT(data2)}
                        >
                          UnStake
                        </Button> */}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MintNew;
