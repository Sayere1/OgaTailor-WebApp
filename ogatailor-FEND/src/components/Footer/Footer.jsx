import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-center">
            <h2>OgaTailor</h2>
            <ul>
                <li>Home</li>
                <li>about us</li>
                <li>Delivery</li>
                <li>Terms And Conditions</li>
            </ul>
        </div>

        <div className="footer-content-left">
            <img src={assets.logo} alt=""/>
        </div>

        <div className="footer-content-right">
            <h2>For Enquiries</h2>
            <ul>
                <li>+234 081 000 0000</li>
                <li>info@ogatailor.xo</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">Copyright 2024 @ ALX Project</p>
    </div>
  )
}

export default Footer
