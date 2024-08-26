import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='profile' src={assets.profile_image} alt=""/>
        <img className='logo' src={assets.logo} alt=""/>
      
    </div>
  )
}

export default Navbar
