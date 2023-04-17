import React from 'react'
import SideText from '../../Components/Single/SideText';
import { FiArrowUpRight } from "react-icons/fi";
import Modal from 'react-bootstrap/Modal';
import Ratio from 'react-bootstrap/Ratio';

import { ReactComponent as HeroVectorRight } from "../../assets/img/vectors/market-blur.svg";

// ASSETS
import market from '../../assets/img/regular/market.png'
import market2 from '../../assets/img/regular/market-2.png'
import LazyLoadImage from '../../Components/Global/LazyImage';
import { FaPlay } from 'react-icons/fa';

function VideoModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Ratio aspectRatio={'16x9'}>
                    <iframe width="1280" height="720" src="https://www.youtube.com/embed/MLpWrANjFbI" title="Elementor video placeholder" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </Ratio>
            </Modal.Body>
        </Modal>
    );
}

const Market = () => {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className="position-relative">
            <div className="z-n1 position-absolute bottom-0 end-0"> <HeroVectorRight /> </div>

            <VideoModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <SideText
                right center
                image={market}
                alt=""
                text={
                    <React.Fragment>
                        <div className="display-3 fw-bold mb-4 font-gilroy">Market <br /> Prediction Game</div>
                        <ul className="list-unstyled d-flex flex-column gap-4">
                            <li className="d-flex gap-3">
                                <div className="icon-square">
                                    <FiArrowUpRight />
                                </div>
                                <div className='mt-2 text-secondary fw-medium'>Binance Smart Chain's Crypto Market Prediction Game rewards users for successful predictions regarding the price movements of select cryptocurrencies.</div>
                            </li>
                            <li className="d-flex gap-3">
                                <div className="icon-square">
                                    <FiArrowUpRight />
                                </div>
                                <div className='mt-2 text-secondary fw-medium'>A user will put down a bet and predict whether the price of a given crypto asset will go up or down. Those guesses are determined by the Binance Oracle, which directly sources data from the Binance platform. If the user's prediction is correct, they will be rewarded with a payout determined by the Binance smart contract.</div>
                            </li>
                            <li className="d-flex gap-3">
                                <div className="icon-square">
                                    <FiArrowUpRight />
                                </div>
                                <div className="mt-2 text-secondary fw-medium">This game provides an exciting, simple way to benefit from the fluctuating markets in the world of crypto.</div>
                            </li>
                        </ul>
                        <a href="#" className="btn btn-primary mt-4">
                            Explore more <FiArrowUpRight className='ms-1' />
                        </a>
                    </React.Fragment>
                }
            />
            <div className="section-gap">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="image-effect image-video-layer image-effect-2 mb-5 mb-lg-0" onClick={() => setModalShow(true)}>
                                <div className="icon">
                                    <FaPlay />
                                </div>
                                <LazyLoadImage src={market2} alt="Market Image 2" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="display-3 fw-semibold mb-4">Market <br /> Prediction Game</div>
                            <p className="text-secondary">Challenge other players based on the performance of the crypto market. Choose your favourite token from your wallet and challenge a friend or a random opponent to a thirty-second price movement.</p>
                            <a href="#" className="btn btn-primary mt-4"> Connect to play <FiArrowUpRight className="ms-1" /> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Market