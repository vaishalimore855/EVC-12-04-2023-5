import React from 'react'
import SideText from '../../Components/Single/SideText';
import { FiArrowUpRight } from "react-icons/fi";

// ASSETS
import app from '../../assets/img/regular/app.png'

const Dating = () => {
    return (
        <div className="bg-pattern">
            <SideText
                center
                right
                image={app}
                imageJustify="center"
                text={
                    <React.Fragment>
                        <div className="display-3 fw-bold mb-4 font-gilroy">Crypto Dating App</div>
                        <ul className="timeline list-unstyled d-flex flex-column gap-4">
                            <li className="d-flex gap-3 active">
                                <div className="mt-1 icon-square icon-xs icon-circle"></div>
                                <div className='fw-medium'>Revolutionizing the way people connect.</div>
                            </li>
                            <li className="d-flex gap-3">
                                <div className="mt-1 icon-square icon-xs icon-circle"></div>
                                <div className='fw-medium'>With our unique crypto dating app, users can connect to each other with the same enthusiasm and fervor that is felt across the crypto space.</div>
                            </li>
                            <li className="d-flex gap-3">
                                <div className="mt-1 icon-square icon-xs icon-circle"></div>
                                <div className="fw-medium">Score yourself an EVC Token - Swapping with Singles has never been so rewarding!</div>
                            </li>
                        </ul>
                        <a href="#" className="btn btn-primary mt-4">
                            Explore Apps <FiArrowUpRight className='ms-1' />
                        </a>
                    </React.Fragment>
                }
            />
        </div>
    )
}

export default Dating