import React from 'react'
import IconWithName from './iconWithName/IconWithName'
import './Navbar.css'
import menu2 from '../../assets/images/menu (2).png'
import locationPin from '../../assets/images/Location (2).png'
import videoCamera from '../../assets/images/video-player.png'
import trending from '../../assets/images/Trending (2).png'
import bag from '../../assets/images/bag (2).png'
import Search from './Search/Search'
import UserCard from './userCard/UserCard'



const Navbar = () => {
  return (
    <div className='navbar'>
        <h1><span>LO</span>go</h1>
        <IconWithName iconName={menu2} name={'Menu'} />
        <IconWithName iconName={locationPin} name={'Location'} />
        <Search/>
        <IconWithName iconName={videoCamera} name={'Road Show'} />
        <IconWithName iconName={trending} name={''} />
        <IconWithName iconName={bag} name={''} />
        <UserCard/>
    </div>
  )
}

export default Navbar