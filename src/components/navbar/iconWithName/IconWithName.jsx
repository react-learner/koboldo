import React from 'react'
import './iconWithName.css'

const IconWithName = ({iconName, name, iconStyle}) => {
  return (
    <div className='icon-container' >
    <img className='icon' src={iconName} alt={name} />
    <h6 className='iconName' >{name}</h6>
    </div>
  )
}

export default IconWithName