// COMPONENTS
import React from 'react';
import SectionTitle from "../../Components/Single/SectionTitle";
import { FaPlay, FaInstagram, FaTwitter } from "react-icons/fa";
import Modal from 'react-bootstrap/Modal';
import Ratio from 'react-bootstrap/Ratio';

// ASSETS
import heroImage from '../../assets/img/regular/hero.png';
import { ReactComponent as HeroVectorLeft } from "../../assets/img/vectors/hero-left-blur.svg";
import { ReactComponent as HeroVectorRight } from "../../assets/img/vectors/hero-right-blur.svg";
import LazyLoadImage from '../../Components/Global/LazyImage';

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

const Hero = () => {

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <VideoModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <div className="min-vh-100 d-flex align-items-center justify-content-center position-relative z-1 theme-hero">
        {/* VECTOR */}
        <div className="z-n1 position-absolute top-100 start-0 translate-middle-y w-100"> <HeroVectorLeft /> </div>
        <div className="z-n1 position-absolute top-100 end-0 translate-middle-y w-100"> <HeroVectorRight className="w-100" /> </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-xl-6 order-lg-2">
              <div className="image-video-layer mb-5 mb-lg-0 col-10 col-md-8 col-lg-12 mx-auto" onClick={() => setModalShow(true)}>
                <div className="icon">
                  <FaPlay />
                </div>
                <LazyLoadImage src={heroImage} />
              </div>
            </div>
            <div className="col-lg-7 col-xl-6 order-lg-1">
              <SectionTitle
                subFull
                main="Unlock the Possibilities of Cross Chain Avatars in Metaverse"
                sub="Providing cross-chain NFT Al avatar and traffic solutions for metaverse in the WEB3 space"
                className="font-gilroy"
              />
              <div className="d-flex flex-wrap gap-3">
                <a href="/#" className="btn btn-primary btn-gradient">Join our Twitter <FaTwitter className='ms-2' /></a>
                <a href="/#" className="btn btn-primary btn-gradient">Join our Instagram <FaInstagram className='ms-2' /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero