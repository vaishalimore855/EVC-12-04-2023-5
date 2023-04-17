import React from 'react'
import { FaDiscord, FaFacebookF, FaInstagram, FaPaperPlane, FaTiktok, FaTwitter } from 'react-icons/fa';
import SectionTitle from '../../Components/Single/SectionTitle';

import { ReactComponent as HeroVectorLeft } from "../../assets/img/vectors/social-mid-blur.svg";
import { ReactComponent as HeroVectorRight } from "../../assets/img/vectors/social-right-blur.svg";

import socialVector from '../../assets/img/regular/social.png';
import LazyLoadImage from '../../Components/Global/LazyImage';

const socialInfo = [
    {
        network: 'Twitter',
        username: '@uirahman92',
        icon: <FaTwitter />,
        url: "#"
    },
    {
        network: 'Telegram',
        username: '@uirahman92',
        icon: <FaPaperPlane />,
        url: "#"
    },
    {
        network: 'Facebook',
        username: '@uirahman92',
        icon: <FaFacebookF />,
        url: "#"
    },
    {
        network: 'Discord',
        username: '@uirahman92',
        icon: <FaDiscord />,
        url: "#"
    },
    {
        network: 'Instagram',
        username: '@uirahman92',
        icon: <FaInstagram />,
        url: "#"
    },
    {
        network: 'Tiktok',
        username: '@uirahman92',
        icon: <FaTiktok />,
        url: "#"
    },
]

const Socials = () => {
    return (
        <div className="section-gap section-gap-social position-relative z-1 overflow-hidden">
            <div className="z-n1 position-absolute top-50 start-50 translate-middle"> <HeroVectorLeft /> </div>
            <div className="z-n1 position-absolute top-100 end-0 translate-middle-y"> <HeroVectorRight /> </div>
            <div className="position-absolute bottom-0 start-50 translate-middle-x z-n1 w-100 d-flex align-items-center justify-content-center">
                <LazyLoadImage src={socialVector} alt="" />
            </div>
            <div className="container">
                <SectionTitle main={<React.Fragment>Join Our Official Social <br /> Media Channels</React.Fragment>} className="text-center" />
            </div>
            <div className="container">
                <div className="row justify-content-center g-32">
                    {
                        socialInfo.map((el, i) => {
                            return (
                                <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2" key={i}>
                                    <div className="card-social">
                                        <div>
                                            <div className="card-title font-gilroy">{el.network}</div>
                                            <a href={el.url} className="card-username">{el.username}</a>
                                        </div>
                                        <a href={el.url} className="icon-square icon-circle icon-social">
                                            {el.icon}
                                        </a>
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

export default Socials;