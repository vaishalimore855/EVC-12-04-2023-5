import React from 'react'

const Icon = ({ size, circle, children, className, ...rest }) => {

    return (
        <div className={`icon-square${size ? ` icon-${size}` : ''}${circle ? ' icon-circle' : ''}${className ? ' ' + className : ''}`} {...rest}>
            {children}
        </div>
    )
}

export default Icon;