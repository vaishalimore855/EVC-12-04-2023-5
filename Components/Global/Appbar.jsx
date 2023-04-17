import { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-scroll';
import { FaWallet } from "react-icons/fa";
import logo from '../../assets/img/logo.png';
import Web3 from 'web3';
import ConnectButton from '../../Pages/Home/ConnectButton';
import Connect from '../../Pages/Dashboard/Connect';
import About from '../../Pages/Home/About';
import Dashboard from '../../Pages/Dashboard';
import Tockenomics from '../../Pages/Home/Tockenomics';
import How from '../../Pages/Home/How';

function Appbar({ mobile, ...rest }) {

    const deSelectRef = useRef(null);
    const [navExpand, setNavExpand] = useState(false);
    const [box, setBox] = useState(false);
    const [isConnected, setIsConnected] = useState(false);
    const [address, setAddress] = useState("");

    // Connect Metamask-Wallet    
    const detectCurrentProviderMetamask = (e) => {
        e.preventDefault()
        let provider;
        if (typeof window.ethereum !== 'undefined') {
            console.log("window", window.ethereum)
            provider = window.ethereum.providers.find((provider) => provider.isMetaMask);
        }
        else {
            console.log("Non-ethereum browser detected. You should install Metamask");
        }
        return provider;
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

    //Connect CoinBase-Wallet
    const detectCurrentProviderCoinbase = (e) => {
        e.preventDefault()
        let provider;
        if (window.web3) {
            provider = window.web3.currentProvider;
        } else {
            console.log("Non-ethereum browser detected. You should install Coinbase");
        }
        return provider;
    };

    const onConnectCoinbase = async (e) => {
        e.preventDefault()
        try {
            const currentProvider = detectCurrentProviderCoinbase(e);
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

    // Disconnect Metamask-Wallet    
    const onDisconnect = () => {
        setIsConnected(false);
        // setEthBalance();
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (deSelectRef.current && !deSelectRef.current.contains(event.target)) {
                setNavExpand(false);
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [deSelectRef])

    // STICKY NAVBAR
    const [stickyClass, setStickyClass] = useState('');

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 0 ? setStickyClass('bg-body sticky-navbar') : setStickyClass('bg-body');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
        return () => {
            window.removeEventListener('load', stickNavbar);
        };
    }, [])

    const wallet = () => {
        setBox(true)
    };

    const cancel = () => {
        setBox(false)
    };

    return (
        <>
            {mobile === "offcanvas" ?
                <Navbar expand='xl' className={stickyClass} fixed="top" {...rest}>
                    <Container>
                        <Link to="home" className="navbar-brand">
                            <img src={logo} alt="" className="img-fluid w-auto" />
                        </Link>
                        {!isConnected && (
                            <div className="d-flex d-xl-none ms-auto">
                                <button onClick={wallet} className='btn btn-primary '>connect wallet</button>
                            </div>
                        )}
                        {isConnected && (
                            <div className="d-flex d-xl-none ms-auto">
                                <button className='btn btn-primary '>{address ? address : "error"}</button>
                            </div>
                        )}
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} className="me-2">
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                        </Navbar.Toggle>
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-xl`}
                            aria-labelledby={`offcanvasNavbahrLabel-expand-xl`}
                            placement="start"
                            backdrop={true}
                            scroll={true}
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
                                    <img src={logo} alt="" className="img-fluid w-50" />
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-center flex-grow-1 pe-3">
                                    <Link style={{ margin: '0 20px' }} activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
                                    <Link style={{ margin: '0 20px' }} activeClass="active" to="About" spy={true} smooth={true} offset={50} duration={500}>About</Link>
                                    <Link style={{ margin: '0 20px' }} activeClass="active" to="tok" spy={true} smooth={true} offset={50} duration={500}>Tokenomics</Link>
                                    <NavDropdown style={{ margin: '0 20px', top: '-8px', padding: 0 }}
                                        title="Pages"
                                        id={`offcanvasNavbarDropdown-expand-xl`}
                                    >
                                        <NavDropdown.Item href="/Dashboard"> Dashboard </NavDropdown.Item>
                                        <NavDropdown.Item href="#"> Page 2 </NavDropdown.Item>
                                        <NavDropdown.Item href="#"> Page 3 </NavDropdown.Item>
                                    </NavDropdown>
                                    <Link activeClass="active" to="how" spy={true} smooth={true} offset={50} duration={500}>How it works</Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                        <ConnectButton />
                    </Container>
                </Navbar> :
                <Navbar expand="xl" fixed="top" className={stickyClass} expanded={navExpand} ref={deSelectRef} {...rest}>
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <div className="d-flex d-xl-none">
                            <a href="#" className='btn btn-primary'>
                                <span className="d-none d-xs-block">Text</span>
                                <span className="d-xs-none"><FaWallet /> </span>
                            </a>
                        </div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto me-2" onClick={() => setNavExpand(!navExpand)}>
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                        </Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Link href="#">Home</Nav.Link>
                                <Nav.Link to="/About">About</Nav.Link>
                                <Nav.Link href="#">Tokenomics</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#"> Page 1 </NavDropdown.Item>
                                    <NavDropdown.Item href="#"> Page 2 </NavDropdown.Item>
                                    <NavDropdown.Item href="#"> Page 3 </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="How">How it works</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <div className="d-none d-xl-flex">
                            <a href="#" className='btn btn-primary'>
                                text
                            </a>
                        </div>
                    </Container>
                </Navbar>
            }
        </>
    );

}

export default Appbar;