// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaCaretLeft, FaCaretRight, FaEthereum } from 'react-icons/fa';
import { BsHeart } from "react-icons/bs";
import SectionTitle from '../../Components/Single/SectionTitle';

// ASSETS
import nftv1 from '../../assets/img/regular/nftv-1.png';
import nftv2 from '../../assets/img/regular/nftv-2.png';
import nftv3 from '../../assets/img/regular/nftv-3.png';
import nftv4 from '../../assets/img/regular/nftv-4.png';
import nftv5 from '../../assets/img/regular/nftv-5.png';

import { Scrollbar, Navigation } from "swiper";

import "swiper/css/scrollbar";

const nftList = [
    {
        thumb: nftv1,
        eth: '#',
        title: 'CryptoCap Tycoon',
        price: '$55,000',
        link: '#',
    },
    {
        thumb: nftv2,
        eth: '#',
        title: 'CryptoCap Tycoon',
        price: '$55,000',
        link: '#',
    },
    {
        thumb: nftv3,
        eth: '#',
        title: 'CryptoCap Tycoon',
        price: '$55,000',
        link: '#',
    },
    {
        thumb: nftv4,
        eth: '#',
        title: 'CryptoCap Tycoon',
        price: '$55,000',
        link: '#',
    },
    {
        thumb: nftv5,
        eth: '#',
        title: 'CryptoCap Tycoon',
        price: '$55,000',
        link: '#',
    },
    {
        thumb: nftv1,
        eth: '#',
        title: 'CryptoCap Tycoon',
        price: '$55,000',
        link: '#',
    },
    {
        thumb: nftv2,
        eth: '#',
        title: 'CryptoCap Tycoon',
        price: '$55,000',
        link: '#',
    },
    {
        thumb: nftv3,
        eth: '#',
        title: 'CryptoCap Tycoon',
        price: '$55,000',
        link: '#',
    },
    {
        thumb: nftv4,
        eth: '#',
        title: 'CryptoCap Tycoon',
        price: '$55,000',
        link: '#',
    },
    {
        thumb: nftv5,
        eth: '#',
        title: 'CryptoCap Tycoon',
        price: '$55,000',
        link: '#',
    },
]

const NftSlider = () => {
    return (
        <>
            <div className="section-gap">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-9">
                            <SectionTitle
                                main="Buy NFT Avatar And Mint Your NFT"
                            />
                        </div>
                        <div className="col-lg-3">
                            <div className="d-flex align-items-center fw-bold gap-3 mb-5">
                                <div className="count text-gradient">1</div>
                                <div className="nft-scrollbar w-100"></div>
                                <div className="count">{nftList.length}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden">
                    <div className="container overflow-swiper">
                        <Swiper
                            scrollbar={{
                                el: '.nft-scrollbar'
                            }}
                            spaceBetween={32}
                            slidesPerView={"auto"}
                            className="nft-swiper"
                            modules={[Scrollbar, Navigation]}
                            navigation={{
                                nextEl: '.nft-swiper-button-next',
                                prevEl: '.nft-swiper-button-prev',
                            }}
                        >
                            {
                                nftList.map((nft, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <div className="card-nftv">
                                                <div className="card-thumb" style={{ backgroundImage: 'url(' + nft.thumb + ')' }}>
                                                    <a href={nft.eth} className="card-eth d-inline-block">
                                                        <FaEthereum />
                                                    </a>
                                                    <div className="card-react cursor-pointer">
                                                        <BsHeart />
                                                    </div>

                                                    <div className="card-info">
                                                        <div>
                                                            <div className="card-title">
                                                                <a href="#">CryptoCap Tycoon</a>
                                                            </div>
                                                            <div className="card-price">Price : {nft.price}</div>
                                                        </div>
                                                        <a href={nft.link} className="btn btn-sm btn-primary">Mint Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                        <div className="slider-controls mt-4">
                            <div className="d-flex gap-3 align-items-center">
                                <div className="icon-square icon-md icon-circle icon-gradient cursor-pointer nft-swiper-button-prev">
                                    <FaCaretLeft className='me-1' />
                                </div>
                                <div className="icon-square icon-md icon-circle icon-gradient cursor-pointer nft-swiper-button-next">
                                    <FaCaretRight className='ms-1' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NftSlider;