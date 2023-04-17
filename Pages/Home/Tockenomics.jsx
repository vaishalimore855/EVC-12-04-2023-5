import React from 'react'
import SectionTitle from '../../Components/Single/SectionTitle';
import TokenomicsChart from '../../Components/Single/Chart';

import { ReactComponent as HeroVectorLeft } from "../../assets/img/vectors/token-left-blur.svg";
import { ReactComponent as HeroVectorRight } from "../../assets/img/vectors/token-right-blur.svg";

const Tockenomics = () => {
  return (
    <div className="section-gap position-relative" id="tok">
      <div className="z-n1 position-absolute top-0 start-0 translate-middle-y"> <HeroVectorLeft /> </div>
      <div className="z-n1 position-absolute top-50 end-0 translate-middle-y"> <HeroVectorRight /> </div>

        <div className="container">
            <SectionTitle
                main="Tokenomics"
                sub="Tokonomics is the study of token economics, which refers to the design and implementation of economic systems using blockchain-based tokens"
                className="text-center"
            />
        </div>
        <TokenomicsChart />
    </div>
  )
}

export default Tockenomics;