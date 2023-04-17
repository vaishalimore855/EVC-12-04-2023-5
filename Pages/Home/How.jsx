import React from 'react';

import { ReactComponent as HeroVectorLeft } from "../../assets/img/vectors/work-left-blur.svg";
import { ReactComponent as HeroVectorRight1 } from "../../assets/img/vectors/work-right-blur-1.svg";
import { ReactComponent as HeroVectorRight2 } from "../../assets/img/vectors/work-right-blur-2.svg";

// ASSETS
import { ReactComponent as IconLink } from '../../assets/img/icons/icon-link.svg';
import { ReactComponent as IconCart } from '../../assets/img/icons/icon-cart.svg';
import { ReactComponent as IconMint } from '../../assets/img/icons/icon-mint.svg';
import { ReactComponent as IconEarn } from '../../assets/img/icons/icon-earn.svg';
import { ReactComponent as IconSwap } from '../../assets/img/icons/icon-swap.svg';
import { ReactComponent as IconStack } from '../../assets/img/icons/icon-stack.svg';

const howList = [
    {
        icon: <IconLink />,
        title: 'Connect',
        text: 'Choose a crypto wallet like Metamask or Trust Wallet'
    },
    {
        icon: <IconCart />,
        title: 'Buy',
        text: 'Buy NFT Avatar with Busd'
    },
    {
        icon: <IconMint />,
        title: 'Mint',
        text: 'Mint Your NFT'
    },
    {
        icon: <IconEarn />,
        title: 'Earn',
        text: 'Earn daily rewards in EVC token'
    },
    {
        icon: <IconSwap />,
        title: 'Swap',
        text: 'Swap your EVC token or Trade your NFT'
    },
    {
        icon: <IconStack />,
        title: 'Stake or Farm',
        text: 'Stake or Farm EVC token to earn more.'
    },
]

const How = () => {
    return (
        <div className="section-gap position-relative" id="how">
            <div className="z-n1 position-absolute top-100 start-0 translate-middle-y"> <HeroVectorLeft /> </div>
            <div className="z-n1 position-absolute top-100 end-0 translate-middle-y"> <HeroVectorRight1 /> </div>
            <div className="z-n1 position-absolute top-0 end-0 translate-middle-y"> <HeroVectorRight2 /> </div>

            <div className="container mb-5 pb-4">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="display-3 fw-bold font-gilroy">
                            How It Work's
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <p className="text-secondary mb-0">They are typically used to represent ownership of digital art, collectibles, and other unique digital items.</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row gy-4">
                    {
                        howList.map((el, i) => {
                            return (
                                <div className="col-lg-4 col-md-6" key={i}>
                                    <div className="card-how h-100">
                                        <div className="icon-square icon-lg">
                                            {el.icon}
                                        </div>
                                        <div className="card-title font-gilroy">{el.title}</div>
                                        <p className="text-secondary">{el.text}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default How