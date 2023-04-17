import { Link } from 'react-router-dom';
import logo from '../../../assets/img/dashboard/dash-logo.svg';
import { ReactComponent as EvcIcon } from '../../../assets/img/dashboard/icons/evc-icon.svg';
import { VscBell, VscListSelection } from "react-icons/vsc";
import { FaWallet, FaUserCircle } from "react-icons/fa";
import Web3 from 'web3';
import { useState, useEffect, useRef } from 'react';
import { getAvailableBalanceEVC } from '../../../ContractAction/EVCStakeContractAction';
import ConnectButton from '../../../Pages/Home/ConnectButton';
import Home from '../../Home';
// import Connect from '../Connect';

const Navbar = ({ sideToggle, setSideToggle }) => {

    const [box, setBox] = useState(false); //
    const [isConnected, setIsConnected] = useState(false); //
    const [address, setAddress] = useState(""); //
    const [availableBalanceEVC, setAvailableBalanceEVC] = useState("");

    useEffect(() => {
        getAvailableBalanceEVC()
        const AvailableBalanceEVC = async () => {
            let availablebalanceEVC = await getAvailableBalanceEVC();
            setAvailableBalanceEVC(availablebalanceEVC);
        }
        AvailableBalanceEVC();
    })

    const detectCurrentProviderMetamask = (e) => { //
        e.preventDefault() // 
        let provider; //
        // if (typeof window.ethereum !== 'undefined') { //
        //   provider = window.ethereum.providers.find((provider) => provider.isMetaMask); //
        // } 
        if (typeof window.ethereum !== 'undefined') { //
            provider = window.ethereum.providers.find((provider) => provider.isMetaMask); //
        }
        else { //
            console.log("Non-ethereum browser detected. You should install Metamask"); //
        } //
        return provider; //
    };

    const onConnectMetamask = async (e) => {
        e.preventDefault()
        try {
            const currentProvider = detectCurrentProviderMetamask(e);
            if (currentProvider) {
                await currentProvider.request({ method: 'eth_requestAccounts' });
                const web3 = new Web3(currentProvider);
                const userAccount = await web3.eth.getAccounts();
                const account = userAccount[0];
                console.log("Accounts", account);
                setAddress(account);
                setIsConnected(true);
                setBox(false);
            }
        } catch (err) {
            console.log(err);
        }
    }

    // Disconnect Metamask    
    const onDisconnect = () => {
        setIsConnected(false);
        // setEthBalance();
    }

    const wallet = () => { //
        setBox(true) //
    };

    const cancel = () => { //
        setBox(false) // 
    }; //

    const sidebarToggle = (e) => {
        setSideToggle(!sideToggle);
    }

    return (
        <div className="cbd-navbar d-flex align-items-center">
            <div className="container-fluid w-100">
                <div className="row align-items-center justify-content-between">
                    <div className="col-auto">
                        <Link to="/" className="d-flex px-sm-4">
                            <img src={logo} alt="" className="img-fluid nav-logo" />
                        </Link>
                    </div>
                    <div className="col">
                        <div className="mobile-icons d-flex gap-2 gap-sm-3 gap-lg-4 align-items-center justify-content-end w-100">
                            <div className="page-title me-auto text-uppercase d-none d-md-flex">
                                Dashboard
                            </div>
                            <div className="d-flex align-items-center gap-3 d-none d-sm-flex">
                                <div className="cursor-pointer icon-square icon-circle icon-user p-2 d-none d-lg-flex">
                                    <FaUserCircle />
                                </div>
                                <div>
                                    <div className="text-uppercase text-sm opacity-75">HOLDER</div>
                                    <div>18,751</div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-3 d-none d-sm-flex">
                                <div className="cursor-pointer icon-square icon-circle bg-gradient d-none d-lg-flex">
                                    <EvcIcon />
                                </div>
                                <div>
                                    <div className="text-uppercase text-sm opacity-75">EVC TOKEN</div>
                                    <div>{availableBalanceEVC}</div>
                                </div>
                            </div>
                            <div className="cursor-pointer icon-square icon-circle icon-notification">
                                <VscBell />
                            </div>
                            {/* <Link to="/dashboard/connect" className="btn btn-primary gap-1 d-none d-lg-flex">
                                Connect Wallet
                            </Link>           
                            <Link to="/dashboard/connect" className="icon-square icon-circle p-2 bg-gradient text-light d-flex d-lg-none">
                                <FaWallet className="p-1" />
                            </Link> */}
                            {/* {!isConnected && (
                            <div className="btn btn-primary gap-1 d-none d-lg-flex" onClick={wallet}>
                                <Link  to="/Connect" className='btn btn-primary'>
                                    <span className="d-none d-xs-block">Connect Wallet</span>
                                    <span className="d-xs-none"><FaWallet /> </span>
                                </Link>

                                <span>Connect Wallet</span>
                            </div>
                            )}
                            {isConnected && (
                            <div className="btn btn-primary gap-1 d-none d-lg-flex">
                               <button className='btn btn-primary' style={{
                                textOverflow: "ellipsis",
                                overflow: "hidden", width: 150}}>
                                    {address ? `${address.substring(0,4)}...${address.substring(38)}` : "Connect Wallet"}
                                </button> 
                            </div>
                            )}
                            {isConnected && (
                            <div className="btn btn-primary gap-1 d-none d-lg-flex">
                                <div>
                                    <Link href="#" className="btn btn-primary" style={{ marginLeft: 20 }} onClick={(e) => onDisconnect(e)}>
                                    Log Out
                                    </Link>
                                </div>
                            </div>
                            )}
                            {box && <Connect onConnectMetamask={onConnectMetamask} isConnected={isConnected} cancel={cancel}/>} */}
                            <ConnectButton />
                            <div className="position-relative">
                                <div className={`cursor-pointer position-absolute top-0 start-0 h-100 w-100 ${sideToggle ? '' : 'd-none'}`}></div>
                                <div className="cursor-pointer icon-square d-flex d-lg-none p-2" onClick={sidebarToggle}>
                                    <VscListSelection />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Navbar