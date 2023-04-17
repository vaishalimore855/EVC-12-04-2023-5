import React from 'react'
import { FaEthereum } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

import SectionTitle from '../../Components/Single/SectionTitle';

import thumb1 from '../../assets/img/regular/nft-1.png';
import thumb2 from '../../assets/img/regular/nft-2.png';
import thumb3 from '../../assets/img/regular/nft-3.png';
import thumb4 from '../../assets/img/regular/nft-4.png';
import thumb5 from '../../assets/img/regular/nft-5.png';
import thumb6 from '../../assets/img/regular/nft-6.png';

const nftList = [
    {
        thumb : thumb1,
        eth: '#',
        title: 'The Holoverse',
        link: '#'
    },
    {
        thumb : thumb2,
        eth: '#',
        title: 'The Holoverse',
        link: '#'
    },
    {
        thumb : thumb3,
        eth: '#',
        title: 'The Holoverse',
        link: '#'
    },
    {
        thumb : thumb4,
        eth: '#',
        title: 'The Holoverse',
        link: '#'
    },
    {
        thumb : thumb5,
        eth: '#',
        title: 'The Holoverse',
        link: '#'
    },
    {
        thumb : thumb6,
        eth: '#',
        title: 'The Holoverse',
        link: '#'
    },
]

const NftSingle = () => {
  return (
    <>
    <div className="section-gap">
        <div className="container">
            <SectionTitle
                main="Cross- Chain NFT Marketplace"
                sub="Explore, collect and sell NFTs across multiple blockchains, ensuring interoperability and in turn, boosting the user base."
                className="text-center"
            />
        </div>
        <div className="container">
            <div className="row g-5">
                {
                    nftList.map((el, i) => {
                        return (
                            <div className="col-lg-4 col-sm-6" key={i}>
                                <div className="card-nft">
                                    <div className="card-thumb" style={{backgroundImage: 'url('+ el.thumb +')'}}>
                                        <a href={el.eth} className="card-eth ms-auto">
                                            <FaEthereum />
                                        </a>
                                    </div>
                                    <div className="card-info">
                                        <a href={el.link} className="card-title fw-semibold">
                                            <span>{el.title}</span>
                                            <div className="card-icon"><FiArrowUpRight /></div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
    </>
  )
}

export default NftSingle