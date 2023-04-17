import React from 'react'
import LazyLoadImage from '../Global/LazyImage'

const SideText = ({ right, text, alt, image, center, imageJustify, className }) => {

    return (
        <div className={`section-gap${className ? " " + className : ''}`}>
            <div className="container">
                <div className={`row${center ? ' align-items-center' : ''}`}>
                    <div className={`col-lg-6${right ? ' order-lg-2' : ''}`}>
                        {/* IMAGE PLACE */}
                        {
                            image &&
                            <div className={`mb-5 mb-lg-0 d-flex${imageJustify ? " justify-content-" + imageJustify : ''}`}>
                                <LazyLoadImage src={image} alt={alt} />
                            </div>
                        }
                    </div>
                    <div className={`col-lg-6${right ? ' order-lg-1' : ''}`}>
                        {/* TEXT PLACE */}
                        {text ? text : ''}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideText