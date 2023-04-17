import React, { useState, useEffect } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Route, Routes } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import level1 from "../Mint/Images/level1.png";
import level2 from "../Mint/Images/level2.png";
import level3 from "../Mint/Images/level3.png";
import level4 from "../Mint/Images/level4.png";
import level5 from "../Mint/Images/level5.png";
import level6 from "../Mint/Images/level6.png";
import level7 from "../Mint/Images/level7.png";
import level8 from "../Mint/Images/level8.png";
import { ethers } from "ethers";
import { styled } from "@mui/material/styles";
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Grid, Heading, HStack, Image, Link, Input, Progress, Stack, Text, } from "@chakra-ui/react";
// import Box from "@mui/material/Box";
import CircularProgress, { circularProgressClasses, } from "@mui/material/CircularProgress";
import LinearProgress, { linearProgressClasses, } from "@mui/material/LinearProgress";
import Staking from "./StakeNft";
import {
  getTotalSupplyL1, getTotalSupplyL2, getTotalSupplyL3, getTotalSupplyL4, getTotalSupplyL5, getTotalSupplyL6, getTotalSupplyL7, getTotalSupplyL8,
  getLevelNFT1, getLevelNFT2, getLevelNFT3, getLevelNFT4, getLevelNFT5, getLevelNFT6, getLevelNFT7, getLevelNFT8,
} from "../../../ContractAction/EVCNFTContractAction";
import { setMintL1, setMintL2, setMintL3, setMintL4, setMintL5, setMintL6, setMintL7, setMintL8, } from "../../../ContractAction/EVCNFTContractAction";

function Mint({ title }) {

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
    }
    getTotalSupplyData()
  }, []);

  useEffect(() => {
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
    }
    getLevelData()
  }, []);

  const [data, setData] = useState({});
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

  return (
    <>
      {stake ? (
        <Staking />
      ) : (
        <div className="dashboard-wrap">
          <Breadcrumb>
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <Breadcrumb.Item active>Mint</Breadcrumb.Item>
          </Breadcrumb>

          <div className="dash-content-area">
            <div className="h1 font-gilroy fw-semibold mt-3 mb-4 pb-3">
              EVC NFT
              <span style={{ marginLeft: "40%", fontSize: 30 }}>
                <Link to="#">Mint</Link>&nbsp;&nbsp;
                <span onClick={() => Click()}>Staking</span>
              </span>
            </div>
            <div className="dash-global-wrap">
              <div className="row g-1">
                <div className="col-md-6 col-xl-6">
                  <div className="dash-card style-3 position-relative">
                    Level 1 <hr></hr>
                    <div>
                      <img
                        src={level1}
                        alt=""
                        className="img-fluid"
                        style={{ height: "320px", width: "100%" }}
                      />
                      <Stack order={{ base: "1", md: "2" }} spacing="25px">
                        <Box>
                          <Flex justify="space-between" fontSize="17px">
                            <Text>
                              <span>Total minted</span>
                              <span
                                style={{
                                  color: "white",
                                  fontWeight: "bold",
                                  marginLeft: 300,
                                }}
                              >
                                {((totalSupplyL1 / levelNFT1) * 100).toFixed(0)}
                                %
                              </span>{" "}
                              ({totalSupplyL1}/{levelNFT1})
                            </Text>
                          </Flex>
                          <Box>
                            <BorderLinearProgress
                              variant="determinate"
                              value={100}
                            />
                          </Box>
                          <Card bg="secondary.700" color="white">
                            <CardHeader
                              fontSize="18px"
                              display="flex"
                              justifyContent="space-between"
                              alignItems="center"
                              flexWrap="wrap"
                              gap="15px"
                            >
                              <Text>
                                Price:{" "}
                                <span style={{ fontWeight: "bold" }}>
                                  0.05 BNB
                                </span>
                                <span style={{ marginLeft: "280px" }}>
                                  Level 1
                                </span>
                              </Text>
                              <HStack maxW="320px"></HStack>
                            </CardHeader>

                            <CardBody>
                              <Button
                                height="40px"
                                w="100%"
                                colorScheme="pink"
                                style={{
                                  backgroundColor: "#1a90ff",
                                  color: "White",
                                  fontWeight: "bold",
                                  borderRadius: 8,
                                  border: "none",
                                }}
                                onClick={() => setMintL1()}
                              >
                                Mint1
                              </Button>
                            </CardBody>
                          </Card>
                        </Box>
                      </Stack>
                    </div>
                  </div>
                </div>

                {/* Level2 */}

                <div className="col-md-6 col-xl-6">
                  <div className="dash-card style-4 position-relative">
                    Level 2<hr></hr>
                    <div>
                      <img
                        src={level2}
                        alt=""
                        className="img-fluid"
                        style={{ height: "320px", width: "100%" }}
                      />
                      <Stack order={{ base: "1", md: "2" }} spacing="25px">
                        <Box>
                          <Flex justify="space-between" fontSize="17px">
                            <Text>
                              <span>Total minted</span>
                              <span
                                style={{
                                  color: "white",
                                  fontWeight: "bold",
                                  marginLeft: 300,
                                }}
                              >
                                {((totalSupplyL2 / levelNFT2) * 100).toFixed(0)}
                                %
                              </span>{" "}
                              ({totalSupplyL2}/{levelNFT2})
                            </Text>
                          </Flex>
                          <Box>
                            <BorderLinearProgress
                              variant="determinate"
                              value={100}
                            />
                          </Box>
                          <Card bg="secondary.700" color="white">
                            <CardHeader
                              fontSize="18px"
                              display="flex"
                              justifyContent="space-between"
                              alignItems="center"
                              flexWrap="wrap"
                              gap="15px"
                            >
                              <Text>
                                Price:{" "}
                                <span style={{ fontWeight: "bold" }}>
                                  0.10 BNB
                                </span>
                                <span style={{ marginLeft: "280px" }}>
                                  Level 2
                                </span>
                              </Text>
                              <HStack maxW="320px"></HStack>
                            </CardHeader>

                            <CardBody>
                              <Button
                                height="40px"
                                w="100%"
                                colorScheme="pink"
                                style={{
                                  borderRadius: 8,
                                  border: "none",
                                  backgroundColor: "#1a90ff",
                                  color: "White",
                                  fontWeight: "bold",
                                }}
                                onClick={() => setMintL2()}
                              >
                                Mint2
                              </Button>
                            </CardBody>
                          </Card>
                        </Box>
                      </Stack>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr></hr>
            {/* Level3 */}
            <div className="dash-global-wrap">
              <div className="row g-1">
                <div className="col-md-6 col-xl-6">
                  <div className="dash-card style-3 position-relative">
                    Level 3 <hr></hr>
                    <div>
                      <img
                        src={level3}
                        alt=""
                        className="img-fluid"
                        style={{ height: "320px", width: "100%" }}
                      />
                      <Stack order={{ base: "1", md: "2" }} spacing="25px">
                        <Box>
                          <Flex justify="space-between" fontSize="17px">
                            <Text>
                              <span>Total minted</span>
                              <span
                                style={{
                                  color: "white",
                                  fontWeight: "bold",
                                  marginLeft: 300,
                                }}
                              >
                                {((totalSupplyL3 / levelNFT3) * 100).toFixed(0)}
                                %
                              </span>{" "}
                              ({totalSupplyL3}/{levelNFT3})
                            </Text>
                          </Flex>
                          <Box>
                            <BorderLinearProgress
                              variant="determinate"
                              value={100}
                            />
                          </Box>
                          <Card bg="secondary.700" color="white">
                            <CardHeader
                              fontSize="18px"
                              display="flex"
                              justifyContent="space-between"
                              alignItems="center"
                              flexWrap="wrap"
                              gap="15px"
                            >
                              <Text>
                                Price:{" "}
                                <span style={{ fontWeight: "bold" }}>
                                  0.15 BNB
                                </span>
                                <span style={{ marginLeft: "280px" }}>
                                  Level 3
                                </span>
                              </Text>
                              <HStack maxW="320px"></HStack>
                            </CardHeader>

                            <CardBody>
                              <Button
                                height="40px"
                                w="100%"
                                colorScheme="pink"
                                style={{
                                  backgroundColor: "#1a90ff",
                                  color: "White",
                                  fontWeight: "bold",
                                  borderRadius: 8,
                                  border: "none",
                                }}
                                onClick={() => setMintL3()}
                              >
                                Mint3
                              </Button>
                            </CardBody>
                          </Card>
                        </Box>
                      </Stack>
                    </div>
                  </div>
                </div>

                {/* Level4 */}
                <div className="col-md-6 col-xl-6">
                  <div className="dash-card style-4 position-relative">
                    Level 4<hr></hr>
                    <div>
                      <img
                        src={level4}
                        alt=""
                        className="img-fluid"
                        style={{ height: "320px", width: "100%" }}
                      />
                      <Stack order={{ base: "1", md: "2" }} spacing="25px">
                        <Box>
                          <Flex justify="space-between" fontSize="17px">
                            <Text>
                              <span>Total minted</span>
                              <span
                                style={{
                                  color: "white",
                                  fontWeight: "bold",
                                  marginLeft: 300,
                                }}
                              >
                                {((totalSupplyL4 / levelNFT4) * 100).toFixed(0)}
                                %
                              </span>{" "}
                              ({totalSupplyL4}/{levelNFT4})
                            </Text>
                          </Flex>
                          <Box>
                            <BorderLinearProgress
                              variant="determinate"
                              value={100}
                            />
                          </Box>
                          <Card bg="secondary.700" color="white">
                            <CardHeader
                              fontSize="18px"
                              display="flex"
                              justifyContent="space-between"
                              alignItems="center"
                              flexWrap="wrap"
                              gap="15px"
                            >
                              <Text>
                                Price:{" "}
                                <span style={{ fontWeight: "bold" }}>
                                  0.20 BNB
                                </span>
                                <span style={{ marginLeft: "280px" }}>
                                  Level 4
                                </span>
                              </Text>
                              <HStack maxW="320px"></HStack>
                            </CardHeader>

                            <CardBody>
                              <Button
                                height="40px"
                                w="100%"
                                colorScheme="pink"
                                style={{
                                  borderRadius: 8,
                                  border: "none",
                                  backgroundColor: "#1a90ff",
                                  color: "White",
                                  fontWeight: "bold",
                                }}
                                onClick={() => setMintL4()}
                              >
                                Mint4
                              </Button>
                            </CardBody>
                          </Card>
                        </Box>
                      </Stack>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr></hr>
            {/* Level5 */}
            <div className="dash-global-wrap">
              <div className="row g-1">
                <div className="col-md-6 col-xl-6">
                  <div className="dash-card style-3 position-relative">
                    Level 5 <hr></hr>
                    <div>
                      <img
                        src={level5}
                        alt=""
                        className="img-fluid"
                        style={{ height: "320px", width: "100%" }}
                      />
                      <Stack order={{ base: "1", md: "2" }} spacing="25px">
                        <Box>
                          <Flex justify="space-between" fontSize="17px">
                            <Text>
                              <span>Total minted</span>
                              <span
                                style={{
                                  color: "white",
                                  fontWeight: "bold",
                                  marginLeft: 300,
                                }}
                              >
                                {((totalSupplyL5 / levelNFT5) * 100).toFixed(0)}
                                %
                              </span>{" "}
                              ({totalSupplyL5}/{levelNFT5})
                            </Text>
                          </Flex>
                          <Box>
                            <BorderLinearProgress
                              variant="determinate"
                              value={100}
                            />
                          </Box>
                          <Card bg="secondary.700" color="white">
                            <CardHeader
                              fontSize="18px"
                              display="flex"
                              justifyContent="space-between"
                              alignItems="center"
                              flexWrap="wrap"
                              gap="15px"
                            >
                              <Text>
                                Price:{" "}
                                <span style={{ fontWeight: "bold" }}>
                                  0.25 BNB
                                </span>
                                <span style={{ marginLeft: "280px" }}>
                                  Level 5
                                </span>
                              </Text>
                              <HStack maxW="320px"></HStack>
                            </CardHeader>

                            <CardBody>
                              <Button
                                height="40px"
                                w="100%"
                                colorScheme="pink"
                                style={{
                                  backgroundColor: "#1a90ff",
                                  color: "White",
                                  fontWeight: "bold",
                                  borderRadius: 8,
                                  border: "none",
                                }}
                                onClick={() => setMintL5()}
                              >
                                Mint5
                              </Button>
                            </CardBody>
                          </Card>
                        </Box>
                      </Stack>
                    </div>
                  </div>
                </div>

                {/* level6 */}
                <div className="col-md-6 col-xl-6">
                  <div className="dash-card style-4 position-relative">
                    Level 6<hr></hr>
                    <div>
                      <img
                        src={level6}
                        alt=""
                        className="img-fluid"
                        style={{ height: "320px", width: "100%" }}
                      />
                      <Stack order={{ base: "1", md: "2" }} spacing="25px">
                        <Box>
                          <Flex justify="space-between" fontSize="17px">
                            <Text>
                              <span>Total minted</span>
                              <span
                                style={{
                                  color: "white",
                                  fontWeight: "bold",
                                  marginLeft: 300,
                                }}
                              >
                                {((totalSupplyL6 / levelNFT6) * 100).toFixed(0)}
                                %
                              </span>{" "}
                              ({totalSupplyL6}/{levelNFT6})
                            </Text>
                          </Flex>
                          <Box>
                            <BorderLinearProgress
                              variant="determinate"
                              value={100}
                            />
                          </Box>
                          <Card bg="secondary.700" color="white">
                            <CardHeader
                              fontSize="18px"
                              display="flex"
                              justifyContent="space-between"
                              alignItems="center"
                              flexWrap="wrap"
                              gap="15px"
                            >
                              <Text>
                                Price:{" "}
                                <span style={{ fontWeight: "bold" }}>
                                  0.30 BNB
                                </span>
                                <span style={{ marginLeft: "280px" }}>
                                  Level 6
                                </span>
                              </Text>
                              <HStack maxW="320px"></HStack>
                            </CardHeader>

                            <CardBody>
                              <Button
                                height="40px"
                                w="100%"
                                colorScheme="pink"
                                style={{
                                  borderRadius: 8,
                                  border: "none",
                                  backgroundColor: "#1a90ff",
                                  color: "White",
                                  fontWeight: "bold",
                                }}
                                onClick={() => setMintL6()}
                              >
                                Mint6
                              </Button>
                            </CardBody>
                          </Card>
                        </Box>
                      </Stack>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr></hr>
            {/* Level 7 */}
            <div className="dash-global-wrap">
              <div className="row g-1">
                <div className="col-md-6 col-xl-6">
                  <div className="dash-card style-3 position-relative">
                    Level 7<hr></hr>
                    <div>
                      <img
                        src={level7}
                        alt=""
                        className="img-fluid"
                        style={{ height: "320px", width: "100%" }}
                      />
                      <Stack order={{ base: "1", md: "2" }} spacing="25px">
                        <Box>
                          <Flex justify="space-between" fontSize="17px">
                            <Text>
                              <span>Total minted</span>
                              <span
                                style={{
                                  color: "white",
                                  fontWeight: "bold",
                                  marginLeft: 300,
                                }}
                              >
                                {((totalSupplyL7 / levelNFT7) * 100).toFixed(0)}
                                %
                              </span>{" "}
                              ({totalSupplyL7}/{levelNFT7})
                            </Text>
                          </Flex>
                          <Box>
                            <BorderLinearProgress
                              variant="determinate"
                              value={100}
                            />
                          </Box>
                          <Card bg="secondary.700" color="white">
                            <CardHeader
                              fontSize="18px"
                              display="flex"
                              justifyContent="space-between"
                              alignItems="center"
                              flexWrap="wrap"
                              gap="15px"
                            >
                              <Text>
                                Price:{" "}
                                <span style={{ fontWeight: "bold" }}>
                                  0.35 BNB
                                </span>
                                <span style={{ marginLeft: "280px" }}>
                                  Level 7
                                </span>
                              </Text>
                              <HStack maxW="320px"></HStack>
                            </CardHeader>

                            <CardBody>
                              <Button
                                height="40px"
                                w="100%"
                                colorScheme="pink"
                                style={{
                                  backgroundColor: "#1a90ff",
                                  color: "White",
                                  fontWeight: "bold",
                                  borderRadius: 8,
                                  border: "none",
                                }}
                                onClick={() => setMintL7()}
                              >
                                Mint7
                              </Button>
                            </CardBody>
                          </Card>
                        </Box>
                      </Stack>
                    </div>
                  </div>
                </div>

                {/* level 8 */}

                <div className="col-md-6 col-xl-6">
                  <div className="dash-card style-4 position-relative">
                    Level 8<hr></hr>
                    <div>
                      <img
                        src={level8}
                        alt=""
                        className="img-fluid"
                        style={{ height: "320px", width: "100%" }}
                      />
                      <Stack order={{ base: "1", md: "2" }} spacing="25px">
                        <Box>
                          <Flex justify="space-between" fontSize="17px">
                            <Text>
                              <span>Total minted</span>
                              <span
                                style={{
                                  color: "white",
                                  fontWeight: "bold",
                                  marginLeft: 300,
                                }}
                              >
                                {((totalSupplyL8 / levelNFT8) * 100).toFixed(0)}
                                %
                              </span>{" "}
                              ({totalSupplyL8}/{levelNFT8})
                            </Text>
                          </Flex>
                          <Box>
                            <BorderLinearProgress
                              variant="determinate"
                              value={100}
                            />
                          </Box>
                          <Card bg="secondary.700" color="white">
                            <CardHeader
                              fontSize="18px"
                              display="flex"
                              justifyContent="space-between"
                              alignItems="center"
                              flexWrap="wrap"
                              gap="15px"
                            >
                              <Text>
                                Price:{" "}
                                <span style={{ fontWeight: "bold" }}>
                                  0.40 BNB
                                </span>
                                <span style={{ marginLeft: "280px" }}>
                                  Level 8
                                </span>
                              </Text>
                              <HStack maxW="320px"></HStack>
                            </CardHeader>

                            <CardBody>
                              <Button
                                height="40px"
                                w="100%"
                                colorScheme="pink"
                                style={{
                                  borderRadius: 8,
                                  border: "none",
                                  backgroundColor: "#1a90ff",
                                  color: "White",
                                  fontWeight: "bold",
                                }}
                                onClick={() => setMintL8()}
                              >
                                Mint8
                              </Button>
                            </CardBody>
                          </Card>
                        </Box>
                      </Stack>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Mint;






// import React, { useState, useEffect } from "react";
// import Breadcrumb from "react-bootstrap/Breadcrumb";
// import { Link } from "react-router-dom";
// import { Route, Routes } from "react-router-dom";
// import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// import Tooltip from "react-bootstrap/Tooltip";
// import Tab from "react-bootstrap/Tab";
// import Tabs from "react-bootstrap/Tabs";

// import level1 from "./Images/level1.png";
// import level2 from "./Images/level2.png";
// import level3 from "./Images/level3.png";
// import level4 from "./Images/level4.png";
// import level5 from "./Images/level5.png";
// import level6 from "./Images/level6.png";
// import level7 from "./Images/level7.png";
// import level8 from "./Images/level8.png";

// import { ethers } from "ethers";
// import { styled } from "@mui/material/styles";
// import {
//   Box,
//   Button,
//   Card,
//   CardBody,
//   CardFooter,
//   CardHeader,
//   Flex,
//   Grid,
//   Heading,
//   HStack,
//   Image,
//   Input,
//   Progress,
//   Stack,
//   Text,
// } from "@chakra-ui/react";

// // import Box from "@mui/material/Box";
// import CircularProgress, {
//   circularProgressClasses,
// } from "@mui/material/CircularProgress";
// import LinearProgress, {
//   linearProgressClasses,
// } from "@mui/material/LinearProgress";
// import NftStaking from './StakeNft';

// import {
//   getTotalSupplyL1,
//   getTotalSupplyL2,
//   getTotalSupplyL3,
//   getTotalSupplyL4,
//   getTotalSupplyL5,
//   getTotalSupplyL6,
//   getTotalSupplyL7,
//   getTotalSupplyL8,
//   getLevelNFT1,
//   getLevelNFT2,
//   getLevelNFT3,
//   getLevelNFT4,
//   getLevelNFT5,
//   getLevelNFT6,
//   getLevelNFT7,
//   getLevelNFT8,
// } from "../../../ContractAction/EVCNFTContractAction";

// import {
//   setMintL1,
//   setMintL2,
//   setMintL3,
//   setMintL4,
//   setMintL5,
//   setMintL6,
//   setMintL7,
//   setMintL8,
// } from "../../../ContractAction/EVCNFTContractAction";

// const Mint = ({ title }) => {



  // const [totalSupplyL1, setTotalSupplyL1] = useState();
  // const [totalSupplyL2, setTotalSupplyL2] = useState();
  // const [totalSupplyL3, setTotalSupplyL3] = useState();
  // const [totalSupplyL4, setTotalSupplyL4] = useState();
  // const [totalSupplyL5, setTotalSupplyL5] = useState();
  // const [totalSupplyL6, setTotalSupplyL6] = useState();
  // const [totalSupplyL7, setTotalSupplyL7] = useState();
  // const [totalSupplyL8, setTotalSupplyL8] = useState();
  // useEffect(async () => {
  //   getTotalSupplyL1();
  //   const TotalSupplyL1 = await getTotalSupplyL1();
  //   setTotalSupplyL1(TotalSupplyL1);

  //   getTotalSupplyL2();
  //   const TotalSupplyL2 = await getTotalSupplyL2();
  //   setTotalSupplyL2(TotalSupplyL2);

  //   getTotalSupplyL3();
  //   const TotalSupplyL3 = await getTotalSupplyL3();
  //   setTotalSupplyL3(TotalSupplyL3);

  //   getTotalSupplyL4();
  //   const TotalSupplyL4 = await getTotalSupplyL4();
  //   setTotalSupplyL4(TotalSupplyL4);

  //   getTotalSupplyL5();
  //   const TotalSupplyL5 = await getTotalSupplyL5();
  //   setTotalSupplyL5(TotalSupplyL5);

  //   getTotalSupplyL6();
  //   const TotalSupplyL6 = await getTotalSupplyL6();
  //   setTotalSupplyL6(TotalSupplyL6);

  //   getTotalSupplyL7();
  //   const TotalSupplyL7 = await getTotalSupplyL7();
  //   setTotalSupplyL7(TotalSupplyL7);

  //   getTotalSupplyL8();
  //   const TotalSupplyL8 = await getTotalSupplyL8();
  //   setTotalSupplyL8(TotalSupplyL8);
  // });

  // const [levelNFT1, setLevelNFT1] = useState();
  // const [levelNFT2, setLevelNFT2] = useState();
  // const [levelNFT3, setLevelNFT3] = useState();
  // const [levelNFT4, setLevelNFT4] = useState();
  // const [levelNFT5, setLevelNFT5] = useState();
  // const [levelNFT6, setLevelNFT6] = useState();
  // const [levelNFT7, setLevelNFT7] = useState();
  // const [levelNFT8, setLevelNFT8] = useState();
  // useEffect(async () => {
  //   getLevelNFT1();
  //   const LevelNFT1 = await getLevelNFT1();
  //   setLevelNFT1(LevelNFT1);

  //   getLevelNFT2();
  //   const LevelNFT2 = await getLevelNFT2();
  //   setLevelNFT2(LevelNFT2);

  //   getLevelNFT3();
  //   const LevelNFT3 = await getLevelNFT3();
  //   setLevelNFT3(LevelNFT3);

  //   getLevelNFT4();
  //   const LevelNFT4 = await getLevelNFT4();
  //   setLevelNFT4(LevelNFT4);

  //   getLevelNFT5();
  //   const LevelNFT5 = await getLevelNFT5();
  //   setLevelNFT5(LevelNFT5);

  //   getLevelNFT6();
  //   const LevelNFT6 = await getLevelNFT6();
  //   setLevelNFT6(LevelNFT6);

  //   getLevelNFT7();
  //   const LevelNFT7 = await getLevelNFT7();
  //   setLevelNFT7(LevelNFT7);

  //   getLevelNFT8();
  //   const LevelNFT8 = await getLevelNFT8();
  //   setLevelNFT8(LevelNFT8);
  // });



//   const [data, setData] = useState({});
//   const [stake, setStake] = useState(false);

//   const Click = () => {
//     console.log("................................");

//     setStake(true);
//   };
//   const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
//     height: 10,
//     borderRadius: 5,
//     [`&.${linearProgressClasses.colorPrimary}`]: {
//       backgroundColor:
//         theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
//     },
//     [`& .${linearProgressClasses.bar}`]: {
//       borderRadius: 5,
//       backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
//     },
//   }));
//   return (
//     <>
//       {stake ? (
//         <NftStaking />
//       ) : (
//         <div className="dashboard-wrap">
//           <Breadcrumb>
//             <li className="breadcrumb-item">
//               <Link to="/">Home</Link>
//             </li>
//             <Breadcrumb.Item active>Mint</Breadcrumb.Item>
//           </Breadcrumb>

//           <div className="dash-content-area">
//             <div className="h1 font-gilroy fw-semibold mt-3 mb-4 pb-3">
//               EVC NFT
//               <span style={{ marginLeft: "28%", fontSize: 30 }}>
//               <Link to="#">Mint</Link>&nbsp;&nbsp;
//                 <Link onClick={() => Click()}>Staking</Link>
//               </span>
//               <span style={{ marginLeft: "10%" }}>
//                 <Link
//                   href="https://testnets.opensea.io/assets/bsc-testnet/0xBeBbFEd61Cd77412AFCB9f6b8F861AB3fD168f11/1"
//                   _hover={{ textDecoration: "none" }}
//                   target="_blank"
//                 >
//                   <Button
//                     height="45px"
//                     w="18%"
//                     style={{
//                       backgroundColor: "#1a90ff",
//                       color: "White",
//                       fontWeight: "500",
//                       borderRadius: 8,
//                       border: "none",
//                       fontSize: 20,
//                     }}
//                   >
//                     View on Opensea
//                   </Button>
//                 </Link>
//               </span>
//             </div>
//             <div className="dash-global-wrap">
//               <div className="row g-1">
//                 <div className="col-md-6 col-xl-6">
//                   <div className="dash-card style-3 position-relative">
//                     Level 1 <hr></hr>
//                     <div>
//                       <img
//                         src={level1}
//                         alt=""
//                         className="img-fluid"
//                         style={{ height: "320px", width: "100%" }}
//                       />
//                       <Stack order={{ base: "1", md: "2" }} spacing="25px">
//                         <Box>
//                           <Flex justify="space-between" fontSize="17px">
//                             <Text>
//                               <span>Total minted</span>
//                               <span
//                                 style={{
//                                   color: "white",
//                                   fontWeight: "bold",
//                                   marginLeft: 300,
//                                 }}
//                               >
//                                 {/* {((totalSupplyL1 / levelNFT1) * 100).toFixed(0)}% */}
//                               </span>{" "}
//                               {/* ({totalSupplyL1}/levelNFT1) */}
//                             </Text>
//                           </Flex>
//                           <Box>
//                             <BorderLinearProgress
//                               variant="determinate"
//                               value={100}
//                             />
//                           </Box>
//                           <Card bg="secondary.700" color="white">
//                             <CardHeader
//                               fontSize="18px"
//                               display="flex"
//                               justifyContent="space-between"
//                               alignItems="center"
//                               flexWrap="wrap"
//                               gap="15px"
//                             >
//                               <Text>
//                                 Price:{" "}
//                                 <span style={{ fontWeight: "bold" }}>
//                                   0.05 BNB
//                                 </span>
//                                 <span style={{ marginLeft: "280px" }}>
//                                   Level 1
//                                 </span>
//                               </Text>
//                               <HStack maxW="320px"></HStack>
//                             </CardHeader>

//                             <CardBody>
//                               <Button
//                                 height="40px"
//                                 w="100%"
//                                 colorScheme="pink"
//                                 style={{
//                                   backgroundColor: "#1a90ff",
//                                   color: "White",
//                                   fontWeight: "bold",
//                                   borderRadius: 8,
//                                   border: "none",
//                                 }}
//                             //   onClick={()=> setMintL1()}
//                               >
//                                 Mint1
//                               </Button>
//                             </CardBody>
//                           </Card>
//                         </Box>
//                       </Stack>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Level2 */}

//                 <div className="col-md-6 col-xl-6">
//                   <div className="dash-card style-4 position-relative">
//                     Level 2<hr></hr>
//                     <div>
//                       <img
//                         src={level2}
//                         alt=""
//                         className="img-fluid"
//                         style={{ height: "320px", width: "100%" }}
//                       />
//                       <Stack order={{ base: "1", md: "2" }} spacing="25px">
//                         <Box>
//                           <Flex justify="space-between" fontSize="17px">
//                             <Text>
//                               <span>Total minted</span>
//                               <span
//                                 style={{
//                                   color: "white",
//                                   fontWeight: "bold",
//                                   marginLeft: 300,
//                                 }}
//                               >
//                                 {/* {((totalSupplyL2 / levelNFT2) * 100).toFixed(0)}% */}
//                               </span>{" "}
//                               {/* ({totalSupplyL2}/levelNFT2) */}
//                             </Text>
//                           </Flex>
//                           <Box>
//                             <BorderLinearProgress
//                               variant="determinate"
//                               value={100}
//                             />
//                           </Box>
//                           <Card bg="secondary.700" color="white">
//                             <CardHeader
//                               fontSize="18px"
//                               display="flex"
//                               justifyContent="space-between"
//                               alignItems="center"
//                               flexWrap="wrap"
//                               gap="15px"
//                             >
//                               <Text>
//                                 Price:{" "}
//                                 <span style={{ fontWeight: "bold" }}>
//                                   0.10 BNB
//                                 </span>
//                                 <span style={{ marginLeft: "280px" }}>
//                                   Level 2
//                                 </span>
//                               </Text>
//                               <HStack maxW="320px"></HStack>
//                             </CardHeader>

//                             <CardBody>
//                               <Button
//                                 height="40px"
//                                 w="100%"
//                                 colorScheme="pink"
//                                 style={{
//                                   borderRadius: 8,
//                                   border: "none",
//                                   backgroundColor: "#1a90ff",
//                                   color: "White",
//                                   fontWeight: "bold",
//                                 }}
//                             //   onClick={()=> setMintL2()}
//                               >
//                                 Mint2
//                               </Button>
//                             </CardBody>
//                           </Card>
//                         </Box>
//                       </Stack>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <hr></hr>
//             {/* Level3 */}
//             <div className="dash-global-wrap">
//               <div className="row g-1">
//                 <div className="col-md-6 col-xl-6">
//                   <div className="dash-card style-3 position-relative">
//                     Level 3 <hr></hr>
//                     <div>
//                       <img
//                         src={level3}
//                         alt=""
//                         className="img-fluid"
//                         style={{ height: "320px", width: "100%" }}
//                       />
//                       <Stack order={{ base: "1", md: "2" }} spacing="25px">
//                         <Box>
//                           <Flex justify="space-between" fontSize="17px">
//                             <Text>
//                               <span>Total minted</span>
//                               <span
//                                 style={{
//                                   color: "white",
//                                   fontWeight: "bold",
//                                   marginLeft: 300,
//                                 }}
//                               >
//                                 {/* {((totalSupplyL3 / levelNFT3) * 100).toFixed(0)}% */}
//                               </span>{" "}
//                               {/* ({totalSupplyL3}/levelNFT3) */}
//                             </Text>
//                           </Flex>
//                           <Box>
//                             <BorderLinearProgress
//                               variant="determinate"
//                               value={100}
//                             />
//                           </Box>
//                           <Card bg="secondary.700" color="white">
//                             <CardHeader
//                               fontSize="18px"
//                               display="flex"
//                               justifyContent="space-between"
//                               alignItems="center"
//                               flexWrap="wrap"
//                               gap="15px"
//                             >
//                               <Text>
//                                 Price:{" "}
//                                 <span style={{ fontWeight: "bold" }}>
//                                   0.15 BNB
//                                 </span>
//                                 <span style={{ marginLeft: "280px" }}>
//                                   Level 3
//                                 </span>
//                               </Text>
//                               <HStack maxW="320px"></HStack>
//                             </CardHeader>

//                             <CardBody>
//                               <Button
//                                 height="40px"
//                                 w="100%"
//                                 colorScheme="pink"
//                                 style={{
//                                   backgroundColor: "#1a90ff",
//                                   color: "White",
//                                   fontWeight: "bold",
//                                   borderRadius: 8,
//                                   border: "none",
//                                 }}
//                             //   onClick={()=> setMintL3()}
//                               >
//                                 Mint3
//                               </Button>
//                             </CardBody>
//                           </Card>
//                         </Box>
//                       </Stack>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Level4 */}
//                 <div className="col-md-6 col-xl-6">
//                   <div className="dash-card style-4 position-relative">
//                     Level 4<hr></hr>
//                     <div>
//                       <img
//                         src={level4}
//                         alt=""
//                         className="img-fluid"
//                         style={{ height: "320px", width: "100%" }}
//                       />
//                       <Stack order={{ base: "1", md: "2" }} spacing="25px">
//                         <Box>
//                           <Flex justify="space-between" fontSize="17px">
//                             <Text>
//                               <span>Total minted</span>
//                               <span
//                                 style={{
//                                   color: "white",
//                                   fontWeight: "bold",
//                                   marginLeft: 300,
//                                 }}
//                               >
//                                 {/* {((totalSupplyL4 / levelNFT4) * 100).toFixed(0)}% */}
//                               </span>{" "}
//                               {/* ({totalSupplyL4}/levelNFT4) */}
//                             </Text>
//                           </Flex>
//                           <Box>
//                             <BorderLinearProgress
//                               variant="determinate"
//                               value={100}
//                             />
//                           </Box>
//                           <Card bg="secondary.700" color="white">
//                             <CardHeader
//                               fontSize="18px"
//                               display="flex"
//                               justifyContent="space-between"
//                               alignItems="center"
//                               flexWrap="wrap"
//                               gap="15px"
//                             >
//                               <Text>
//                                 Price:{" "}
//                                 <span style={{ fontWeight: "bold" }}>
//                                   0.20 BNB
//                                 </span>
//                                 <span style={{ marginLeft: "280px" }}>
//                                   Level 4
//                                 </span>
//                               </Text>
//                               <HStack maxW="320px"></HStack>
//                             </CardHeader>

//                             <CardBody>
//                               <Button
//                                 height="40px"
//                                 w="100%"
//                                 colorScheme="pink"
//                                 style={{
//                                   borderRadius: 8,
//                                   border: "none",
//                                   backgroundColor: "#1a90ff",
//                                   color: "White",
//                                   fontWeight: "bold",
//                                 }}
//                             //   onClick={()=> setMintL4()}
//                               >
//                                 Mint4
//                               </Button>
//                             </CardBody>
//                           </Card>
//                         </Box>
//                       </Stack>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <hr></hr>
//             {/* Level5 */}
//             <div className="dash-global-wrap">
//               <div className="row g-1">
//                 <div className="col-md-6 col-xl-6">
//                   <div className="dash-card style-3 position-relative">
//                     Level 5 <hr></hr>
//                     <div>
//                       <img
//                         src={level5}
//                         alt=""
//                         className="img-fluid"
//                         style={{ height: "320px", width: "100%" }}
//                       />
//                       <Stack order={{ base: "1", md: "2" }} spacing="25px">
//                         <Box>
//                           <Flex justify="space-between" fontSize="17px">
//                             <Text>
//                               <span>Total minted</span>
//                               <span
//                                 style={{
//                                   color: "white",
//                                   fontWeight: "bold",
//                                   marginLeft: 300,
//                                 }}
//                               >
//                                 {/* {((totalSupplyL5 / levelNFT5) * 100).toFixed(0)}% */}
//                               </span>{" "}
//                               {/* ({totalSupplyL5}/levelNFT5) */}
//                             </Text>
//                           </Flex>
//                           <Box>
//                             <BorderLinearProgress
//                               variant="determinate"
//                               value={100}
//                             />
//                           </Box>
//                           <Card bg="secondary.700" color="white">
//                             <CardHeader
//                               fontSize="18px"
//                               display="flex"
//                               justifyContent="space-between"
//                               alignItems="center"
//                               flexWrap="wrap"
//                               gap="15px"
//                             >
//                               <Text>
//                                 Price:{" "}
//                                 <span style={{ fontWeight: "bold" }}>
//                                   0.25 BNB
//                                 </span>
//                                 <span style={{ marginLeft: "280px" }}>
//                                   Level 5
//                                 </span>
//                               </Text>
//                               <HStack maxW="320px"></HStack>
//                             </CardHeader>

//                             <CardBody>
//                               <Button
//                                 height="40px"
//                                 w="100%"
//                                 colorScheme="pink"
//                                 style={{
//                                   backgroundColor: "#1a90ff",
//                                   color: "White",
//                                   fontWeight: "bold",
//                                   borderRadius: 8,
//                                   border: "none",
//                                 }}
//                             //   onClick={()=> setMintL5()}
//                               >
//                                 Mint5
//                               </Button>
//                             </CardBody>
//                           </Card>
//                         </Box>
//                       </Stack>
//                     </div>
//                   </div>
//                 </div>

//                 {/* level6 */}
//                 <div className="col-md-6 col-xl-6">
//                   <div className="dash-card style-4 position-relative">
//                     Level 6<hr></hr>
//                     <div>
//                       <img
//                         src={level6}
//                         alt=""
//                         className="img-fluid"
//                         style={{ height: "320px", width: "100%" }}
//                       />
//                       <Stack order={{ base: "1", md: "2" }} spacing="25px">
//                         <Box>
//                           <Flex justify="space-between" fontSize="17px">
//                             <Text>
//                               <span>Total minted</span>
//                               <span
//                                 style={{
//                                   color: "white",
//                                   fontWeight: "bold",
//                                   marginLeft: 300,
//                                 }}
//                               >
//                                 {/* {((totalSupplyL6 / levelNFT6) * 100).toFixed(0)}% */}
//                               </span>{" "}
//                               {/* ({totalSupplyL6}/levelNFT6) */}
//                             </Text>
//                           </Flex>
//                           <Box>
//                             <BorderLinearProgress
//                               variant="determinate"
//                               value={100}
//                             />
//                           </Box>
//                           <Card bg="secondary.700" color="white">
//                             <CardHeader
//                               fontSize="18px"
//                               display="flex"
//                               justifyContent="space-between"
//                               alignItems="center"
//                               flexWrap="wrap"
//                               gap="15px"
//                             >
//                               <Text>
//                                 Price:{" "}
//                                 <span style={{ fontWeight: "bold" }}>
//                                   0.30 BNB
//                                 </span>
//                                 <span style={{ marginLeft: "280px" }}>
//                                   Level 6
//                                 </span>
//                               </Text>
//                               <HStack maxW="320px"></HStack>
//                             </CardHeader>

//                             <CardBody>
//                               <Button
//                                 height="40px"
//                                 w="100%"
//                                 colorScheme="pink"
//                                 style={{
//                                   borderRadius: 8,
//                                   border: "none",
//                                   backgroundColor: "#1a90ff",
//                                   color: "White",
//                                   fontWeight: "bold",
//                                 }}
//                             //   onClick={()=>  setMintL6()}
//                               >
//                                 Mint6
//                               </Button>
//                             </CardBody>
//                           </Card>
//                         </Box>
//                       </Stack>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <hr></hr>
//             {/* Level 7 */}
//             <div className="dash-global-wrap">
//               <div className="row g-1">
//                 <div className="col-md-6 col-xl-6">
//                   <div className="dash-card style-3 position-relative">
//                     Level 7<hr></hr>
//                     <div>
//                       <img
//                         src={level7}
//                         alt=""
//                         className="img-fluid"
//                         style={{ height: "320px", width: "100%" }}
//                       />
//                       <Stack order={{ base: "1", md: "2" }} spacing="25px">
//                         <Box>
//                           <Flex justify="space-between" fontSize="17px">
//                             <Text>
//                               <span>Total minted</span>
//                               <span
//                                 style={{
//                                   color: "white",
//                                   fontWeight: "bold",
//                                   marginLeft: 300,
//                                 }}
//                               >
//                                 {/* {((totalSupplyL7 / levelNFT7) * 100).toFixed(0)}% */}
//                               </span>{" "}
//                               {/* ({totalSupplyL7}/levelNFT7) */}
//                             </Text>
//                           </Flex>
//                           <Box>
//                             <BorderLinearProgress
//                               variant="determinate"
//                               value={100}
//                             />
//                           </Box>
//                           <Card bg="secondary.700" color="white">
//                             <CardHeader
//                               fontSize="18px"
//                               display="flex"
//                               justifyContent="space-between"
//                               alignItems="center"
//                               flexWrap="wrap"
//                               gap="15px"
//                             >
//                               <Text>
//                                 Price:{" "}
//                                 <span style={{ fontWeight: "bold" }}>
//                                   0.35 BNB
//                                 </span>
//                                 <span style={{ marginLeft: "280px" }}>
//                                   Level 7
//                                 </span>
//                               </Text>
//                               <HStack maxW="320px"></HStack>
//                             </CardHeader>

//                             <CardBody>
//                               <Button
//                                 height="40px"
//                                 w="100%"
//                                 colorScheme="pink"
//                                 style={{
//                                   backgroundColor: "#1a90ff",
//                                   color: "White",
//                                   fontWeight: "bold",
//                                   borderRadius: 8,
//                                   border: "none",
//                                 }}
//                             //   onClick={()=> setMintL7()}
//                               >
//                                 Mint7
//                               </Button>
//                             </CardBody>
//                           </Card>
//                         </Box>
//                       </Stack>
//                     </div>
//                   </div>
//                 </div>

//                 {/* level 8 */}

//                 <div className="col-md-6 col-xl-6">
//                   <div className="dash-card style-4 position-relative">
//                     Level 8<hr></hr>
//                     <div>
//                       <img
//                         src={level8}
//                         alt=""
//                         className="img-fluid"
//                         style={{ height: "320px", width: "100%" }}
//                       />
//                       <Stack order={{ base: "1", md: "2" }} spacing="25px">
//                         <Box>
//                           <Flex justify="space-between" fontSize="17px">
//                             <Text>
//                               <span>Total minted</span>
//                               <span
//                                 style={{
//                                   color: "white",
//                                   fontWeight: "bold",
//                                   marginLeft: 300,
//                                 }}
//                               >
//                                 {/* {((totalSupplyL8 / levelNFT8) * 100).toFixed(0)}% */}
//                               </span>{" "}
//                               {/* ({totalSupplyL8}/levelNFT8) */}
//                             </Text>
//                           </Flex>
//                           <Box>
//                             <BorderLinearProgress
//                               variant="determinate"
//                               value={100}
//                             />
//                           </Box>
//                           <Card bg="secondary.700" color="white">
//                             <CardHeader
//                               fontSize="18px"
//                               display="flex"
//                               justifyContent="space-between"
//                               alignItems="center"
//                               flexWrap="wrap"
//                               gap="15px"
//                             >
//                               <Text>
//                                 Price:{" "}
//                                 <span style={{ fontWeight: "bold" }}>
//                                   0.40 BNB
//                                 </span>
//                                 <span style={{ marginLeft: "280px" }}>
//                                   Level 8
//                                 </span>
//                               </Text>
//                               <HStack maxW="320px"></HStack>
//                             </CardHeader>

//                             <CardBody>
//                               <Button
//                                 height="40px"
//                                 w="100%"
//                                 colorScheme="pink"
//                                 style={{
//                                   borderRadius: 8,
//                                   border: "none",
//                                   backgroundColor: "#1a90ff",
//                                   color: "White",
//                                   fontWeight: "bold",
//                                 }}
//                             //   onClick={()=> setMintL8()}
//                               >
//                                 Mint8
//                               </Button>
//                             </CardBody>
//                           </Card>
//                         </Box>
//                       </Stack>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Mint;











