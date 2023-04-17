import React, { useState, useEffect } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import { AiOutlineCopy } from "react-icons/ai";
import { Tooltip } from "@mui/material";
import { IconButton, Grid } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";

  const ReferralLink = ({ title }) => {
  
  const newAddress = window.localStorage.getItem("connectedAccount");
  console.log("newAddress",newAddress)
  //User Address
  const userAddress =newAddress;
  console.log("userAddress",userAddress)
  
  const sAddress = window.localStorage.getItem("sponsorAddress");
  //Referral address 
  const referraladdress = sAddress;
  console.log("referraladdress",referraladdress)
  
  const text = "http://localhost:3000/dashboard?ref=";
  // copy message
  const [open, setOpen] = React.useState(false);

  //API Integration
  const response =  fetch(`http://localhost:8000/api/users/userreferral`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      
    },
    body: JSON.stringify(userAddress,referraladdress)
  });
  
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const copyText = () => {
    navigator.clipboard.writeText(`${text}${newAddress}`);
  };
  const msg = () => {
    copyText();
    handleClick();
  };
  useEffect(() => {
    document.title = title ? title : "EVC Avatars | Referral Link";
    document.querySelector(".page-title").innerText = "Referral Link";
  }, []);

  console.log("add", newAddress);

  return (
    <div className="dashboard-wrap">
      <Breadcrumb>
        <li className="breadcrumb-item">
          {/* <Link to="/">HOME</Link> */}
          <div>HOME</div>
        </li>
        <Breadcrumb.Item active>Referral Link</Breadcrumb.Item>
      </Breadcrumb>

      <div className="dash-content-area">
        <div className="h1 font-gilroy fw-semibold mt-3 mb-4 pb-3"></div>
        <div
          className="dash-global-wrap"
          style={{
            borderRadius: "12px",
            border: "1px solid gray",
            position: "absolute",
            top: "35%",
            left: "30%",
            height: "250px",
            width: "50%",
          }}
        >
          <span style={{ marginLeft: "90%", fontSize: "20px" }}>
            <AiOutlineCopy
              onClick={() => {
                msg();
              }}
            />

            <Snackbar
              open={open}
              autoHideDuration={1000}
              onClose={handleClose}
              message="Copied"
              style={{
                position: "absolute",
                bottom: "50%",
                left: "80%",
                width: "20px",
              }}
            />
          </span>

          {/* Sponsor Address */}
          <p style={{ fontSize: "18px", margin: "1% 4%" }}>
            Sponsor Address : <Link>{sAddress}</Link>
          </p>
        
          {/* Reference Address */}
          <p style={{ fontSize: "18px", margin: "5% 4%" }}>
            {" "}
            Your Link :{" "}
             <Link>http://localhost:3000/dashboard?ref=${newAddress}</Link> 
   
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReferralLink;
