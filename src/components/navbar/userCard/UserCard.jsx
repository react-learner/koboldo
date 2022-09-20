import React from 'react'
import userPic from '../../../assets/images/userPic.png'
import './UserCard.css'

const UserCard = () => {
  return (
    <div className='user-container' >
    <img src={userPic} alt='user-pic' className='user-pic' />
    <h6 className='user-name' >Hi, Martha</h6>
    </div>
  )
}

export default UserCard