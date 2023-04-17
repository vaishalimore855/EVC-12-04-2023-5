import React from 'react'
import LazyLoadImage from '../../Components/Global/LazyImage';
import SectionTitle from '../../Components/Single/SectionTitle';
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from 'swiper/react';

// ASSETS
import aboutImage from '../../assets/img/regular/about.png';
import { Navigation } from 'swiper';

const About = () => {
    return (
        <div className="section-gap position-relative z-1 bg-pattern theme-about" id = "About">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="image-effect mb-5 mb-lg-0">
                            <LazyLoadImage src={aboutImage} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <SectionTitle
                            pre="ABOUT"
                            main="Introducing NFT Al Avatars - The Future of Digital Identities"
                            sub="Create, Customize, and Earn with EVC Token on the BSC Blockchain"
                            subFull
                        />
                        <div className="about-slider-area">
                            <Swiper
                                modules={[Navigation]}
                                navigation={{
                                    nextEl: '.about-swiper-button-next',
                                    prevEl: '.about-swiper-button-prev',
                                }}>
                                <SwiperSlide>Welcome to a brand new world - a world of unique digital identities! With the rise of our NFT Al Avatar, you can now create, trade and reward yourself with EVC Token. Get creative and customize your avatar the way you want with help of an artificial intelligence. Plus, you get rewarded with EVC Token when you mint your NFT Avatar!</SwiperSlide>
                                <SwiperSlide>Welcome to a brand new world - a world of unique digital identities! With the rise of our NFT Al Avatar, you can now create, trade and reward yourself with EVC Token. Get creative and customize your avatar the way you want with help of an artificial intelligence. Plus, you get rewarded with EVC Token when you mint your NFT Avatar!</SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="slider-controls">
                            <div className="d-flex gap-3 align-items-center">
                                <div className="icon-square icon-md icon-circle icon-gradient cursor-pointer about-swiper-button-prev">
                                    <FaCaretLeft className='me-1' />
                                </div>
                                <div className="icon-square icon-md icon-circle icon-gradient cursor-pointer about-swiper-button-next">
                                    <FaCaretRight className='ms-1' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About