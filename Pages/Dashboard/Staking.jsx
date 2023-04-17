// import React, { useState, useEffect } from 'react';
// import Breadcrumb from 'react-bootstrap/Breadcrumb';
// import { Link } from 'react-router-dom';
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// import Tooltip from 'react-bootstrap/Tooltip';
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';

// import stakingIcon1 from '../../assets/img/dashboard/icons/staking-icon-1.svg';
// import stakingIcon2 from '../../assets/img/dashboard/icons/staking-icon-2.svg';
// import stakingIcon3 from '../../assets/img/dashboard/icons/staking-icon-3.svg';

// import { ReactComponent as IconEx } from '../../assets/img/dashboard/icons/staking-icon-ex.svg';



// import { setStakeFlex, setClaimRewardFlex, setUnstakeFlex, getDepositInfoStakeFlex, getDepositAtStakeFlex, claimLockStakeFlex, getBalanceEVC } from '../../ContractAction/EVCStakeContractAction';
// import { setStakeFix, getStakedIdsFixStake, getUserStakedFix, getStakeTimeFix, setUnstakeFix, setClaimRewardFix } from '../../ContractAction/EVCStakeContractAction';


// const Staking = ({ title }) => {

//     const [stakeFlexValue, setStakeFlexValue] = useState("");
//     const [flexStakeAmount, setFlexStakeAmount] = useState();
//     const [depositAt, setDepositAt] = useState();
//     const [claimLock, setClaimLock] = useState();
//     const [EVCBalanceOf, setEVCBalanceOf] = useState();
//     const [stakeFixValue, setStakeFixValue] = useState("")
//     const [period, setPeriod] = useState();
//     const [key, setKey] = useState();
//     const [fixStakedDetails, setFixStakedDetails] = useState();
//     const [fixStakedIds, setFixStakedIds] = useState();
//     const [unstakeDate, setUnstakeDate] = useState();
//     const [fixUnstakeIds, setFixUnstakeIds] = useState()
//     const [fixStakedDetailshide, setFixStakedDetailshide] = useState(false);







//     useEffect(() => {

//         document.title = title ? title : 'EVC Avatars | Staking';
//         document.querySelector('.page-title').innerText = "Staking";

//         const getData =async()=>{
//             let flexAmountStake = await getDepositInfoStakeFlex();
//             let depositAt = await getDepositAtStakeFlex();
//             let claimLock = await claimLockStakeFlex();
//             let evcbalance = await getBalanceEVC();
//             let stakedIds = await getStakedIdsFixStake();
//             let stakedDetails = await getUserStakedFix();
//             const date = await getStakeTimeFix();
//             setFlexStakeAmount(flexAmountStake)
//             setDepositAt(depositAt)
//             setClaimLock(claimLock)
//             setEVCBalanceOf(evcbalance)
//             setFixStakedIds(stakedIds)
//             setFixStakedDetails(stakedDetails)
//             setUnstakeDate(date);
//         }
//         getData()

//     }, [])




//     const fixStakePeriod = (e) => {
//         setPeriod(e.target.value)
//     };


//     // console.log("typeCL", typeof claimLock)
//     // console.log("Deposite", depositAt)
//     // console.log("Claim", claimLock)
//     // console.log("typeDA", typeof depositAt)
//     var _Date = 1679296688 + parseInt(claimLock)
//     console.log("epoc", _Date)
//     let _date = new Date(parseInt(_Date) * 1000).toDateString()
//     // console.log("date", _date)
//     // console.log("datetype", typeof _date)

//     // console.log("stakedIds", fixStakedIds)
//     // console.log("date", unstakeDate)
//     // console.log("details", fixStakedDetails)

//     let _unStakeDate = [];
//     if (fixStakedDetails) {
//         for (let i = 0; i < fixStakedDetails.length; i++) {
//             if (fixStakedDetails[i].durationCode === '0') {
//                 const epoc = parseInt(fixStakedDetails[i].stakeTime) + 15866400
//                 const _date = new Date(epoc * 1000).toDateString()
//                 _unStakeDate.push(_date)
//             }
//             else if (fixStakedDetails[i].durationCode === '1') {
//                 const epoc = parseInt(fixStakedDetails[i].stakeTime) + 31560000
//                 const _date = new Date(epoc * 1000).toDateString()
//                 _unStakeDate.push(_date)
//             }
//             else if (fixStakedDetails[i].durationCode === '2') {
//                 const epoc = parseInt(fixStakedDetails[i].stakeTime) + 63120000
//                 const _date = new Date(epoc * 1000).toDateString()
//                 _unStakeDate.push(_date)
//             }
//         }
//         console.log("unstakedate", _unStakeDate)
//     }

//     console.log("fixUnstakeIds", fixUnstakeIds)


    

//     return (
//         <div className="dashboard-wrap">
//             <Breadcrumb>
//                 <li className="breadcrumb-item">
//                     <Link to="/">HOME</Link>
//                 </li>
//                 <Breadcrumb.Item active>Staking</Breadcrumb.Item>
//             </Breadcrumb>

//             <div className="dash-content-area">
//                 <div className="h1 font-gilroy fw-semibold mt-3 mb-4 pb-3">Stake Your EVC Tokens</div>
//                 <div className="dash-global-wrap">
//                     <div className="row g-4">
//                         <div className="col-md-6 col-xl-4">
//                             <div className="dash-card style-2 position-relative">
//                                 <div className="icon-square icon-md mb-3">
//                                     <img src={stakingIcon1} alt="" className="img-fluid" />
//                                 </div>
//                                 <p>Token In Your Wallet</p>
//                                 <div className="d-flex align-items-center gap-2 dash-card-amount">
//                                     <div>$ {EVCBalanceOf} EVC</div>
//                                 </div>
//                                 <div className="position-absolute top-0 end-0 m-4">
//                                     <OverlayTrigger
//                                         placement={`top`}
//                                         overlay={<Tooltip>Token In Your Wallet</Tooltip>}
//                                     >
//                                         <div className="d-inline-flex">
//                                             <IconEx />
//                                         </div>
//                                     </OverlayTrigger>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-6 col-xl-4">
//                             <div className="dash-card style-2 position-relative">
//                                 <div className="icon-square icon-md mb-3">
//                                     <img src={stakingIcon2} alt="" className="img-fluid" />
//                                 </div>
//                                 <p>Locked in staking</p>
//                                 <div className="d-flex align-items-center gap-2 dash-card-amount">
//                                     <div>$ {flexStakeAmount} EVC</div>
//                                 </div>
//                                 <div className="position-absolute top-0 end-0 m-4">
//                                     <OverlayTrigger
//                                         placement={`top`}
//                                         overlay={<Tooltip>Locked in staking</Tooltip>}
//                                     >
//                                         <div className="d-inline-flex">
//                                             <IconEx />
//                                         </div>
//                                     </OverlayTrigger>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-6 col-xl-4">
//                             <div className="dash-card style-2 position-relative">
//                                 <div className="icon-square icon-md mb-3">
//                                     <img src={stakingIcon3} alt="" className="img-fluid" />
//                                 </div>
//                                 <p>Available For Transfer</p>
//                                 <div className="d-flex align-items-center gap-2 dash-card-amount">
//                                     <div>$ {EVCBalanceOf} EVC</div>
//                                 </div>
//                                 <div className="position-absolute top-0 end-0 m-4">
//                                     <OverlayTrigger
//                                         placement={`top`}
//                                         overlay={<Tooltip>Available For Transfer</Tooltip>}
//                                     >
//                                         <div className="d-inline-flex">
//                                             <IconEx />
//                                         </div>
//                                     </OverlayTrigger>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="row">
//                     <div className="col-lg-6">
//                         <div className="h5 font-gilroy fw-semibold mt-5 mb-3 pb-3">Stake</div>
//                         <div className="dash-global-wrap">
//                             <Tabs
//                                 defaultActiveKey="stake"
//                                 id="fill-tab-example"
//                                 className="staking-tabs"
//                                 onSelect={(k) =>{ setKey(k);setStakeFlexValue("");setStakeFixValue("")}}
//                                 fill
//                             >
//                                 <Tab eventKey="stake" title="Stake" >
//                                     <div>
//                                         <div className="h5 font-gilroy fw-semibold mt-4 mb-3">Amount</div>
//                                         <div className="staking-from-wrap">
//                                             <input type="number" className="from-control" placeholder="1.000000"
//                                                 value={stakeFixValue} onChange={(e) => setStakeFixValue(e.target.value)} />
//                                             <button onClick={()=>setStakeFixValue("10000")}>MAX</button>
//                                         </div>
//                                         <div className="h5 font-gilroy fw-semibold mt-4 mb-3">Choose Period (Months)</div>
//                                         <div className="d-flex gap-3" onChange={fixStakePeriod}>
//                                             <div className="staking-form-check">
//                                                 <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="0" />
//                                                 <label className="form-check-label" htmlFor="exampleRadios1">
//                                                     06
//                                                 </label>
//                                             </div>
//                                             <div className="staking-form-check">
//                                                 <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="1" />
//                                                 <label className="form-check-label" htmlFor="exampleRadios2">
//                                                     12
//                                                 </label>
//                                             </div>
//                                             <div className="staking-form-check">
//                                                 <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="2" />
//                                                 <label className="form-check-label" htmlFor="exampleRadios3">
//                                                     24
//                                                 </label>
//                                             </div>
//                                         </div>
//                                         <div className="h5 text-secondary font-gilroy mt-4 mb-5 d-flex justify-content-between">
//                                             <span>APR (30%)</span>
//                                             <span>10000 EVC</span>
//                                         </div>
//                                         <button onClick={() => setStakeFix(stakeFixValue, period)} className="btn btn-primary w-100 fw-semibold">STAKE NOW</button>
//                                     </div>
//                                 </Tab>
//                                 <Tab eventKey="f-stake" title="Flexible Stake">
//                                     <div>
//                                         <div className="h5 font-gilroy fw-semibold mt-4 mb-3">Amount</div>
//                                         <div className="staking-from-wrap">
//                                             <input type="number" min="0.01" className="from-control" id="amt" placeholder="1.000000"
//                                                 value={stakeFlexValue >= 0.01 && stakeFlexValue}
//                                                 onChange={(e) => setStakeFlexValue(e.target.value)} />
//                                             <button onClick={()=>setStakeFlexValue("10000")}>MAX</button>
//                                             {/* {!max && (
//                                                 <input type="text" className="from-control" placeholder="1.000000"
//                                                     value={stakeFlexValue}
//                                                     onChange={(e) => setStakeFlexValue(e.target.value)} />
//                                                 //<button onClick={maxFlexValue}>MAX</button>
//                                             )}
//                                             {max && (
//                                                 <input type="text" className="from-control" placeholder="1.000000"
//                                                     defaultValue={max}
//                                                 />
//                                             )}<button onClick={maxFlexValue}>MAX</button> */}
//                                         </div>
//                                         <div className="h5 text-secondary font-gilroy my-4 d-flex justify-content-between">
//                                             <span>APR (12%)</span>
//                                             <span>10000 EVC</span>
//                                         </div>

//                                         <div className="mb-5">
//                                             <div className="text-md">Note:</div>
//                                             <div className="text-md">-Unstake anytime with 7 days unstaking period.</div>
//                                             <div className="text-md">-Minimum Amount 0.01 EVC.</div>
//                                         </div>
//                                         <button onClick={() => setStakeFlex(stakeFlexValue)} className="btn btn-primary w-100 fw-semibold">STAKE NOW</button>
//                                     </div>
//                                 </Tab>
//                                 <Tab eventKey="unstake" title="Unstake"> <br></br>
//                                     <Tabs
//                                         defaultActiveKey="fix"
//                                         id="fill-tab-example"
//                                         className="staking-tabs"
//                                         onSelect={(k) => setKey(k)}
//                                         fill
//                                     >
//                                         <Tab eventKey="fix" title="Fix">
//                                             <div className="h5 font-gilroy fw-semibold mt-4 mb-3">Id</div>
//                                             <div className="staking-from-wrap">
//                                                 <input type="number" className="from-control" placeholder='Insert Id'
//                                                     value={fixUnstakeIds}
//                                                     onChange={(e) => setFixUnstakeIds(e.target.value)} />
//                                             </div><br></br>
//                                             <div>
//                                                 <button onClick={() => setUnstakeFix(fixUnstakeIds)} className="btn btn-primary w-100 fw-semibold">UNSTAKE</button>
//                                             </div><br></br>
//                                             <button onClick={() => setClaimRewardFix(fixUnstakeIds)} className="btn btn-primary w-100 fw-semibold">CLAIM</button>
//                                         </Tab>
//                                         <Tab eventKey="flexible" title="Flexible">
//                                             <div>
//                                                 <div className="h5 text-secondary font-gilroy my-4 d-flex justify-content-between">
//                                                     <span>APR (12%)</span>
//                                                 </div>
//                                                 <div className="mb-5">
//                                                     <div className="text-md">Note:</div>
//                                                     <div className="text-md">Unstake anytime with 7 days unstaking period.</div>
//                                                 </div>
//                                                 <div>
//                                                     <button onClick={() => setUnstakeFlex()} className="btn btn-primary w-100 fw-semibold">UNSTAKE</button>
//                                                 </div><br></br>
//                                                 <button onClick={() => setClaimRewardFlex()} className="btn btn-primary w-100 fw-semibold">CLAIM</button>
//                                             </div>

//                                         </Tab>
//                                     </Tabs>
//                                     {/* <div>
//                                         <div className="h5 font-gilroy fw-semibold mt-4 mb-3">Fix</div>
//                                         <div className="staking-from-wrap">
//                                             <input type="number" className="from-control" id="amt"
//                                                 value={stakeFlexValue >= 0.01 && stakeFlexValue}
//                                                 onChange={(e) => setStakeFlexValue(e.target.value)} />
//                                         </div>
//                                         <div className="h5 text-secondary font-gilroy my-4 d-flex justify-content-between">
//                                             <span>APR (12%)</span>
//                                         </div>
//                                         <div className="mb-5">
//                                             <div className="text-md">Note:</div>
//                                             <div className="text-md">Unstake anytime with 7 days unstaking period.</div>
//                                         </div>
//                                         <div>
//                                             <button onClick={() => setUnstakeFlex()} className="btn btn-primary w-100 fw-semibold">UNSTAKE</button>
//                                         </div><br></br>
//                                         <button onClick={() => setClaimRewardFlex()} className="btn btn-primary w-100 fw-semibold">CLAIM</button>
//                                     </div> */}
//                                 </Tab>
//                             </Tabs>
//                         </div>
//                     </div>
                    
//                     {key === "stake"   && <div className="col-lg-6">
//                         <div className="d-flex flex-column h-100">
//                             <div className="h5 font-gilroy fw-semibold mt-5 mb-3 pb-3">Fix Stake Details</div>
//                             {fixStakedDetails[0].amount > 0 ? (
//                                 <div className="dash-global-wrap d-flex flex-column h-100">
//                                     <div className="d-flex align-items-center justify-content-between text-uppercase staking-deposit-title mb-4">
//                                         <div style={{ textAlign: 'center' }}>
//                                             <div>Amount</div><br></br>
//                                             {fixStakedDetails.map((detail, i) => {
//                                                 return <div key={i} style={{ marginTop: '5px' }}>{detail.amount / (10 ** 18)}</div>
//                                             })}
//                                         </div>
//                                         <div style={{ textAlign: 'center' }}>
//                                             <div> UnStake Date</div><br></br>
//                                             {_unStakeDate.map((date, i) => {
//                                                 return <div key={i} style={{ marginTop: '5px' }}>{date}</div>
//                                             })}
//                                         </div>
//                                         <div style={{ textAlign: 'center' }}>
//                                             <div>Staked Id</div><br></br>
//                                             {fixStakedIds.map((id, i) => {
//                                                 return <div key={i} style={{ marginTop: '5px' }}>{id}</div>
//                                             })}
//                                         </div>
//                                     </div>
//                                 </div>) : (
//                                 <div className="dash-global-wrap d-flex flex-column h-100">
//                                     <div className="d-flex align-items-center justify-content-between text-uppercase staking-deposit-title mb-4">
//                                         <div style={{ textAlign: 'center' }}>
//                                             <div>Amount</div><br></br>
//                                         </div>
//                                         <div style={{ textAlign: 'center' }}>
//                                             <div> Claimable  date</div><br></br>
//                                         </div>
//                                         <div style={{ textAlign: 'center' }}>
//                                             <div>action</div><br></br>
//                                         </div>
//                                     </div>
//                                     <div className="flex-shrink-0 h-100">
//                                         <div className="staking-deposit">No Stake</div>
//                                     </div>
//                                 </div>)}
//                         </div>
//                     </div>}

//                     {key === "f-stake" && 
//                     <div className="col-lg-6">
//                         <div className="d-flex flex-column h-100">
//                             <div className="h5 font-gilroy fw-semibold mt-5 mb-3 pb-3">Flexible Stake Details</div>
//                             {flexStakeAmount > 0 ? (
//                                 <div className="dash-global-wrap d-flex flex-column h-100">
//                                     <div className="d-flex align-items-center justify-content-between text-uppercase staking-deposit-title mb-4">
//                                         <div style={{ textAlign: 'center' }}>
//                                             <div>Amount</div><br></br>
//                                             <div>{flexStakeAmount}</div>
//                                         </div>
//                                         <div style={{ textAlign: 'center' }}>
//                                             <div> Claimable  date</div><br></br>
//                                             <div>{_date}</div>
//                                         </div>
//                                         <div style={{ textAlign: 'center' }}>
//                                             <div>action</div><br></br>
//                                             <div>-</div>
//                                         </div>
//                                     </div>
//                                 </div>) : (
//                                 <div className="dash-global-wrap d-flex flex-column h-100">
//                                     <div className="d-flex align-items-center justify-content-between text-uppercase staking-deposit-title mb-4">
//                                         <div style={{ textAlign: 'center' }}>
//                                             <div>Amount</div><br></br>
//                                         </div>
//                                         <div style={{ textAlign: 'center' }}>
//                                             <div> Claimable  date</div><br></br>
//                                         </div>
//                                         <div style={{ textAlign: 'center' }}>
//                                             <div>action</div><br></br>
//                                         </div>
//                                     </div>
//                                     <div className="flex-shrink-0 h-100">
//                                         <div className="staking-deposit">No Stake</div>
//                                     </div>
//                                 </div>)}
//                         </div>
//                     </div>}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Staking;




import React, { useState, useEffect } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import stakingIcon1 from '../../assets/img/dashboard/icons/staking-icon-1.svg';
import stakingIcon2 from '../../assets/img/dashboard/icons/staking-icon-2.svg';
import stakingIcon3 from '../../assets/img/dashboard/icons/staking-icon-3.svg';

import { ReactComponent as IconEx } from '../../assets/img/dashboard/icons/staking-icon-ex.svg';



import { setStakeFlex, setClaimRewardFlex, setUnstakeFlex, getDepositInfoStakeFlex, getDepositAtStakeFlex, claimLockStakeFlex, getBalanceEVC } from '../../ContractAction/EVCStakeContractAction';
import { setStakeFix, getStakedIdsFixStake, getUserStakedFix, getStakeTimeFix, setUnstakeFix, setClaimRewardFix } from '../../ContractAction/EVCStakeContractAction';
import { fontSize } from '@mui/system';
import { position } from '@chakra-ui/react';



const Staking = ({ title }) => {

    const newAddress = window.localStorage.getItem("connectedAccount");

    const [stakeFlexValue, setStakeFlexValue] = useState("");
    const [flexStakeAmount, setFlexStakeAmount] = useState();
    const [depositAt, setDepositAt] = useState();
    const [claimLock, setClaimLock] = useState();
    const [EVCBalanceOf, setEVCBalanceOf] = useState();
    const [stakeFixValue, setStakeFixValue] = useState("")
    const [period, setPeriod] = useState("");
    const [key, setKey] = useState('stake');
    const [fixStakedDetails, setFixStakedDetails] = useState();
    const [fixStakedIds, setFixStakedIds] = useState();
    const [fixUnstakeIds, setFixUnstakeIds] = useState("")





    useEffect(() => {

        document.title = title ? title : 'EVC Avatars | Staking';
        document.querySelector('.page-title').innerText = "Staking";

        const getData =async()=>{
            let flexAmountStake = await getDepositInfoStakeFlex();
            let depositAt = await getDepositAtStakeFlex();
            let claimLock = await claimLockStakeFlex();
            let evcbalance = await getBalanceEVC();
            let stakedIds = await getStakedIdsFixStake();
            let stakedDetails = await getUserStakedFix();
            setFlexStakeAmount(flexAmountStake)
            setDepositAt(depositAt)
            setClaimLock(claimLock)
            setEVCBalanceOf(evcbalance)
            setFixStakedIds(stakedIds)
            setFixStakedDetails(stakedDetails)
        }
        getData()

    }, [])







    // console.log("typeCL", typeof claimLock)
    // console.log("Deposite", depositAt)
    // console.log("Claim", claimLock)
    // console.log("typeDA", typeof depositAt)
    var _Date = 1679296688 + parseInt(claimLock)
    console.log("epoc", _Date)
    let _date = new Date(parseInt(_Date) * 1000).toDateString()
    // console.log("date", _date)
    // console.log("datetype", typeof _date)

    // console.log("date", unstakeDate)


    let _unStakeDate = [];
    if (fixStakedDetails) {
        for (let i = 0; i < fixStakedDetails.length; i++) {
            if (fixStakedDetails[i].durationCode === '0') {
                const epoc = parseInt(fixStakedDetails[i].stakeTime) + 15866400
                const _date = new Date(epoc * 1000).toDateString()
                _unStakeDate.push(_date)
            }
            else if (fixStakedDetails[i].durationCode === '1') {
                const epoc = parseInt(fixStakedDetails[i].stakeTime) + 31560000
                const _date = new Date(epoc * 1000).toDateString()
                _unStakeDate.push(_date)
            }
            else if (fixStakedDetails[i].durationCode === '2') {
                const epoc = parseInt(fixStakedDetails[i].stakeTime) + 63120000
                const _date = new Date(epoc * 1000).toDateString()
                _unStakeDate.push(_date)
            }
        }
        console.log("unstakedate", _unStakeDate)
    }


    let fixStakeAmount = 0;
    if (fixStakedDetails) {
        for (let i = 0; i<fixStakedDetails.length; i++){
            fixStakeAmount += fixStakedDetails[i].amount/10 **  18
        }
    }


    const fixStakeDetails = []
    if (fixStakedDetails) {
        console.log("check", "inside")
        for (let i = 0; i<fixStakedDetails.length; i++) {
            fixStakeDetails.push({
                amount : fixStakedDetails[i].amount,
                unstakeDate : _unStakeDate[i],
                ids : fixStakedIds[i]
            })
            
        }
    }


    console.log("unstakedate1", _unStakeDate)
    console.log("fixStakeDetails1", fixStakeDetails)
    console.log("fixStakedDetails1", fixStakedDetails)
    console.log("flexStakeAmount",flexStakeAmount)
    console.log("fixStakeAmount1",fixStakeAmount)
    console.log("totalStake",(fixStakeAmount + Number(flexStakeAmount)).toFixed(2))

    

    return (
        <>
        
        <div className="dashboard-wrap">
            <Breadcrumb>
                <li className="breadcrumb-item">
                    <Link to="/">HOME</Link>
                </li>
                <Breadcrumb.Item active>Staking</Breadcrumb.Item>
            </Breadcrumb>

            <div className="dash-content-area">
                <div className="h1 font-gilroy fw-semibold mt-3 mb-4 pb-3">Stake Your EVC Tokens</div>
                <div className="dash-global-wrap">
                    <div className="row g-4">
                        <div className="col-md-6 col-xl-4">
                            <div className="dash-card style-2 position-relative">
                                <div className="icon-square icon-md mb-3">
                                    <img src={stakingIcon1} alt="" className="img-fluid" />
                                </div>
                                <p>Token In Your Wallet</p>
                               <div className="d-flex align-items-center gap-2 dash-card-amount">
                                    <div>$ {EVCBalanceOf} EVC</div>
                                </div>
                                <div className="position-absolute top-0 end-0 m-4">
                                    <OverlayTrigger
                                        placement={`top`}
                                        overlay={<Tooltip>Token In Your Wallet</Tooltip>}
                                    >
                                        <div className="d-inline-flex">
                                            <IconEx />
                                        </div>
                                    </OverlayTrigger>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4">
                            <div className="dash-card style-2 position-relative">
                                <div className="icon-square icon-md mb-3">
                                    <img src={stakingIcon2} alt="" className="img-fluid" />
                                </div>
                                <p>Locked in staking</p>
                                <div className="d-flex align-items-center gap-2 dash-card-amount">
                                    <div>$ {(fixStakeAmount + (parseFloat(flexStakeAmount))).toFixed(2)} EVC</div>
                                </div>
                                <div className="position-absolute top-0 end-0 m-4">
                                    <OverlayTrigger
                                        placement={`top`}
                                        overlay={<Tooltip>Locked in staking</Tooltip>}
                                    >
                                        <div className="d-inline-flex">
                                            <IconEx />
                                        </div>
                                    </OverlayTrigger>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4">
                            <div className="dash-card style-2 position-relative">
                                <div className="icon-square icon-md mb-3">
                                    <img src={stakingIcon3} alt="" className="img-fluid" />
                                </div>
                                <p>Available For Transfer</p>
                                <div className="d-flex align-items-center gap-2 dash-card-amount">
                                    <div>$ {EVCBalanceOf} EVC</div>
                                </div>
                                <div className="position-absolute top-0 end-0 m-4">
                                    <OverlayTrigger
                                        placement={`top`}
                                        overlay={<Tooltip>Available For Transfer</Tooltip>}
                                    >
                                        <div className="d-inline-flex">
                                            <IconEx />
                                        </div>
                                    </OverlayTrigger>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-8">
                        <div className="h5 font-gilroy fw-semibold mt-5 mb-3 pb-3">Stake</div>
                        <div className="dash-global-wrap">
                            <Tabs
                                defaultActiveKey="stake"
                                id="fill-tab-example"
                                className="staking-tabs"
                                onSelect={(k) =>{ setKey(k);setStakeFlexValue("");setStakeFixValue("")}}
                                fill
                            >
                                <Tab eventKey="stake" title="Stake" >
                                    <div>
                                        <div className="h5 font-gilroy fw-semibold mt-4 mb-3">Amount</div>
                                        <div className="staking-from-wrap">
                                            <input type="number" className="from-control" placeholder="1.000000"
                                                value={stakeFixValue} onChange={(e) => setStakeFixValue(e.target.value)} />
                                            <button onClick={()=>setStakeFixValue("10000")}>MAX</button>
                                        </div>
                                        <div className="h5 font-gilroy fw-semibold mt-4 mb-3">Choose Period (Months)</div>
                                        <div className="d-flex gap-3" onChange={(e)=> setPeriod(e.target.value)}>
                                            <div className="staking-form-check">
                                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="0" />
                                                <label className="form-check-label" htmlFor="exampleRadios1">
                                                    06
                                                </label>
                                            </div>
                                            <div className="staking-form-check">
                                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="1" />
                                                <label className="form-check-label" htmlFor="exampleRadios2">
                                                    12
                                                </label>
                                            </div>
                                            <div className="staking-form-check">
                                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="2" />
                                                <label className="form-check-label" htmlFor="exampleRadios3">
                                                    24
                                                </label>
                                            </div>
                                        </div>
                                        <div className="h5 text-secondary font-gilroy mt-4 mb-5 d-flex justify-content-between">
                                            <span>APR (30%)</span>
                                            <span>10000 EVC</span>
                                        </div>
                                        <button onClick={() => setStakeFix(stakeFixValue, period)} className="btn btn-primary w-100 fw-semibold">STAKE NOW</button>
                                    </div>
                                </Tab>
                                <Tab eventKey="f-stake" title="Flexible Stake">
                                    <div>
                                        <div className="h5 font-gilroy fw-semibold mt-4 mb-3">Amount</div>
                                        <div className="staking-from-wrap">
                                            <input type="number" min="0.01" className="from-control" id="amt" placeholder="1.000000"
                                                value={stakeFlexValue >= 0.01 && stakeFlexValue}
                                                onChange={(e) => setStakeFlexValue(e.target.value)} />
                                            <button onClick={()=>setStakeFlexValue("10000")}>MAX</button>
                                            {/* {!max && (
                                                <input type="text" className="from-control" placeholder="1.000000"
                                                    value={stakeFlexValue}
                                                    onChange={(e) => setStakeFlexValue(e.target.value)} />
                                                //<button onClick={maxFlexValue}>MAX</button>
                                            )}
                                            {max && (
                                                <input type="text" className="from-control" placeholder="1.000000"
                                                    defaultValue={max}
                                                />
                                            )}<button onClick={maxFlexValue}>MAX</button> */}
                                        </div>
                                        <div className="h5 text-secondary font-gilroy my-4 d-flex justify-content-between">
                                            <span>APR (12%)</span>
                                            <span>10000 EVC</span>
                                        </div>

                                        <div className="mb-5">
                                            <div className="text-md">Note:</div>
                                            <div className="text-md">-Unstake anytime with 7 days unstaking period.</div>
                                            <div className="text-md">-Minimum Amount 0.01 EVC.</div>
                                        </div>
                                        <button onClick={() => setStakeFlex(stakeFlexValue)} className="btn btn-primary w-100 fw-semibold">STAKE NOW</button>
                                    </div>
                                </Tab>
                                <Tab eventKey="unstake" title="Unstake"> <br></br>
                                    <Tabs
                                        defaultActiveKey="fix"
                                        id="fill-tab-example"
                                        className="staking-tabs"
                                        fill
                                    >
                                        <Tab eventKey="fix" title="Fix">
                                        <div className="d-flex flex-column h-100">
                            {fixStakeAmount > 0 ? (
                                <div className="dash-global-wrap d-flex flex-column h-100">
                                    <div className="d-flex align-items-center justify-content-between text-uppercase staking-deposit-title mb-4">
                                        <div style={{ textAlign: 'center'}}>
                                            <div>Amount</div><br></br>
                                            {fixStakedDetails.map((detail, i) => {
                                                return <div key={i} style={{ marginTop: '15px', marginBottom:"5px"}}>{detail.amount / (10 ** 18)}</div>
                                            })}
                                        </div>
                                        <div style={{ textAlign: 'center' }}>
                                            <div> UnStake Date</div><br></br>
                                            {_unStakeDate.map((date, i) => {
                                                return <div key={i} style={{ marginTop: '15px', marginBottom:"5px"}}>{date}</div>
                                            })}
                                        </div>
                                        <div style={{ textAlign: 'center' }}>
                                            <div> Action </div><br></br>
                                            {fixStakedIds.map((id, i) => {
                                                return <div className="d-grid gap-2 d-md-flex justify-content-md-end" key={i} >
                                                <button className="btn btn-primary btn-sm me-md-2" style={{fontSize:"15px",marginBottom:'2px'}} type="button" onClick={()=>setUnstakeFix(id)}>Unstake</button>
                                                <button className="btn btn-primary btn-sm" style={{fontSize:"15px", marginBottom:'2px'}} type="button" onClick={()=>setClaimRewardFix(id) }>Claim</button>
                                              </div>
                                            })}
                                        </div>
                                    </div>
                                </div>) : (
                                <div className="dash-global-wrap d-flex flex-column h-100">
                                    <div className="d-flex align-items-center justify-content-between text-uppercase staking-deposit-title mb-4">
                                        <div style={{ textAlign: 'center' }}>
                                            <div>Amount</div><br></br>
                                        </div>
                                        <div style={{ textAlign: 'center' }}>
                                            <div> Claimable  date</div><br></br>
                                        </div>
                                        <div style={{ textAlign: 'center' }}>
                                            <div> Action </div><br></br>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0 h-100">
                                        <div className="staking-deposit">No Stake</div>
                                    </div>
                                </div>)}
                        </div>
                                            {/* <div className="h5 font-gilroy fw-semibold mt-4 mb-3">Id</div>
                                            <div className="staking-from-wrap">
                                                <input type="number" className="from-control" placeholder='Insert Id'
                                                    value={fixUnstakeIds}
                                                    onChange={(e) => setFixUnstakeIds(e.target.value)} />
                                            </div><br></br>
                                            <div>
                                                <button onClick={() => setUnstakeFix(fixUnstakeIds)} className="btn btn-primary w-100 fw-semibold">UNSTAKE</button>
                                            </div><br></br>
                                            <button onClick={() => setClaimRewardFix(fixUnstakeIds)} className="btn btn-primary w-100 fw-semibold">CLAIM</button> */}
                                        </Tab>
                                        <Tab eventKey="flexible" title="Flexible">
                                            <div>
                                                <div className="h5 text-secondary font-gilroy my-4 d-flex justify-content-between">
                                                    <span>APR (12%)</span>
                                                </div>
                                                <div className="mb-5">
                                                    <div className="text-md">Note:</div>
                                                    <div className="text-md">Unstake anytime with 7 days unstaking period.</div>
                                                </div>
                                                <div>
                                                    <button onClick={() => setUnstakeFlex()} className="btn btn-primary w-100 fw-semibold">UNSTAKE</button>
                                                </div><br></br>
                                                <button onClick={() => setClaimRewardFlex()} className="btn btn-primary w-100 fw-semibold">CLAIM</button>
                                            </div>

                                        </Tab>
                                    </Tabs>
                                    {/* <div>
                                        <div className="h5 font-gilroy fw-semibold mt-4 mb-3">Fix</div>
                                        <div className="staking-from-wrap">
                                            <input type="number" className="from-control" id="amt"
                                                value={stakeFlexValue >= 0.01 && stakeFlexValue}
                                                onChange={(e) => setStakeFlexValue(e.target.value)} />
                                        </div>
                                        <div className="h5 text-secondary font-gilroy my-4 d-flex justify-content-between">
                                            <span>APR (12%)</span>
                                        </div>
                                        <div className="mb-5">
                                            <div className="text-md">Note:</div>
                                            <div className="text-md">Unstake anytime with 7 days unstaking period.</div>
                                        </div>
                                        <div>
                                            <button onClick={() => setUnstakeFlex()} className="btn btn-primary w-100 fw-semibold">UNSTAKE</button>
                                        </div><br></br>
                                        <button onClick={() => setClaimRewardFlex()} className="btn btn-primary w-100 fw-semibold">CLAIM</button>
                                    </div> */}
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                    
                    {key === "stake"  && <div className="col-lg-4">
                        <div className="d-flex flex-column h-100">
                            <div className="h5 font-gilroy fw-semibold mt-5 mb-3 pb-3">Fix Stake Details</div>
                            {fixStakeAmount > 0 ? (
                                <div className="dash-global-wrap overflow-auto example flex-column" style={{height:"510px"}}>
                                    <div className="d-flex align-items-center justify-content-between text-uppercase staking-deposit-title mb-4">
                                        <div style={{ textAlign: 'center' }} >
                                            <div>Amount</div><br></br>
                                            {fixStakedDetails.map((detail, i) => {
                                                return <div key={i} style={{ marginTop: '5px' }}>{detail.amount / (10 ** 18)}</div>
                                            })}
                                        </div>
                                        <div style={{ textAlign: 'center' }}>
                                            <div> UnStake Date</div><br></br>
                                            {_unStakeDate.map((date, i) => {
                                                return <div key={i} style={{ marginTop: '5px' }}>{date}</div>
                                            })}
                                        </div>
                                    </div>
                                </div>) : (
                                <div className="dash-global-wrap d-flex flex-column h-100">
                                    <div className="d-flex align-items-center justify-content-between text-uppercase staking-deposit-title mb-4">
                                        <div style={{ textAlign: 'center' }}>
                                            <div>Amount</div><br></br>
                                        </div>
                                        <div style={{ textAlign: 'center' }}>
                                            <div> Claimable  date</div><br></br>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0 h-100">
                                        <div className="staking-deposit">No Stake</div>
                                    </div>
                                </div>)}
                        </div>
                    </div>}

                    {key === "f-stake" && 
                    <div className="col-lg-4">
                        <div className="d-flex flex-column h-100">
                            <div className="h5 font-gilroy fw-semibold mt-5 mb-3 pb-3">Flexible Stake Details</div>
                            {flexStakeAmount > 0 ? (
                                <div className="dash-global-wrap overflow-auto d-flex flex-column" style={{height:"83%"}}>
                                    <div className="d-flex align-items-center justify-content-between text-uppercase staking-deposit-title mb-4">
                                        <div style={{ textAlign: 'center' }}>
                                            <div>Amount</div><br></br>
                                            <div>{flexStakeAmount}</div>
                                        </div>
                                        <div style={{ textAlign: 'center' }}>
                                            <div> Claimable  date</div><br></br>
                                            <div>{_date}</div>
                                        </div>
                                    </div>
                                </div>) : (
                                <div className="dash-global-wrap d-flex flex-column h-100">
                                    <div className="d-flex align-items-center justify-content-between text-uppercase staking-deposit-title mb-4">
                                        <div style={{ textAlign: 'center' }}>
                                            <div>Amount</div><br></br>
                                        </div>
                                        <div style={{ textAlign: 'center' }}>
                                            <div> Claimable  date</div><br></br>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0 h-100">
                                        <div className="staking-deposit">No Stake</div>
                                    </div>
                                </div>)}
                        </div>
                    </div>}
                </div>
            </div>
        </div>
        </>
    )
}

export default Staking;
