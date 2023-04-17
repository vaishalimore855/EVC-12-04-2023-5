import React from 'react'
import LazyLoadImage from '../../Components/Global/LazyImage';
import logo from '../../assets/img/logo-lg.png';
import { Link } from 'react-scroll'

const Footer = () => {

    return (
        <div className="theme-footer position-relative">

            {/* FOOTER TOP */}
            <div className="footer-top">
                <div className="container">
                    <div className="d-flex align-items-center flex-column">
                        <div className="footer-logo mb-2">
                            <a href="#"><LazyLoadImage src={logo} /></a>
                        </div>
                        <div className="text-center h2 lh-base fw-bold col-lg-6 mb-4 font-gilroy">
                            Unlock the Possibilities of Cross Chain Avatars in Metaverse
                        </div>
                        <div className="d-flex gap-4 flex-wrap align-items-center justify-content-center font-gilroy">
                            <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
                            <a href="#About" className="link-light">About</a>
                            <a href="#tok" className="link-light">Tokenomics</a>
                            <a href="#how" className="link-light">How It Works</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* FOOTER BOTTOM */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start gap-4">
                                <a href="#">Terms of Service</a>
                                <a href="#">Privacy Policy</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex flex-wrap justify-content-lg-end align-items-center gap-4">
                                <div className="copyright-text text-center text-lg-end mt-4 mt-lg-0 w-100">
                                    © 2023 EVC Avatar's Marketplace, All right Reserved
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Footer