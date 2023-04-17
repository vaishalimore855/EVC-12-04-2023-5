import React from 'react'

import { ReactComponent as HeroVectorLeft } from "../../assets/img/vectors/affiliate-left-blur.svg";
import { ReactComponent as HeroVectorRight } from "../../assets/img/vectors/affiliate-right-blur.svg";

// ASSETS
import affiliateImage from '../../assets/img/regular/affiliate.png'; 
import affiliateImage2 from '../../assets/img/regular/affiliate-text.png'; 
import LazyLoadImage from '../../Components/Global/LazyImage';
import SectionTitle from '../../Components/Single/SectionTitle';

const Affiliate = () => {
  return (
    <div className="section-gap position-relative">
        <div className="z-n1 position-absolute top-100 start-0 translate-middle-y"> <HeroVectorLeft /> </div>
        <div className="z-n1 position-absolute top-100 end-0 translate-middle-y"> <HeroVectorRight /> </div>

        <div className="container">
          <SectionTitle main="EVC Affiliate" className="text-center" />
          <div className="d-flex d-lg-none justify-content-center mb-5">
            <LazyLoadImage src={affiliateImage} />
          </div>
          <div className="d-none d-lg-flex justify-content-center">
            <LazyLoadImage src={affiliateImage2} />
          </div>
          <div className="card-affiliate d-flex d-lg-none mb-3">
            Invite your friends and family and benefit from the NFT sales
          </div>
          <div className="card-affiliate d-flex d-lg-none mb-3">
            To become an affiliate in EVS affiliate program, you need a minimum $100 worth of NFT participation.
          </div>
          <div className="card-affiliate d-flex d-lg-none mb-3">
            Share your invitation link and earn 10% from their NFT purchase directly in busd on your decentralized wallet. ( LEVEL 1)
          </div>
          <div className="card-affiliate d-flex flex-column d-lg-none mb-3">
            <div className="text-uppercase mb-2">AFFILATE PLAN</div>
            <ul className="list-unstyled m-0 p-0">
              <li>Level 1 - 10%</li>
              <li>Level 2 - 7%</li>
            </ul>
          </div>
          <div className="card-affiliate d-flex d-lg-none mb-3">
            Earn 7% from your level 2 sales.
          </div>
        </div>
    </div>
  )
}

export default Affiliate;