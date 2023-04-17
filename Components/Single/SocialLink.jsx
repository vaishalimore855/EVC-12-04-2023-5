import React from 'react'

const SocialLink = ({ link, className, blank, icon, ...rest }) => {
  return (
    <a href={link} target={blank ? '_blank' : ''} className={`icon-square icon-circle icon-social${className ? ' ' + className : ''}`} {...rest}>
      {icon}
    </a>
  )
}

export default SocialLink;