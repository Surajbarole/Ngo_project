import React from 'react'
import "./contact.css"
import { FaLocationDot } from "react-icons/fa6"
import {BsTelephoneFill} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import {BsFacebook} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"
import {AiFillMail} from 'react-icons/ai'
import ContactUs from "../components/ContactUs"


import {BiLogoYoutube} from "react-icons/bi"
import { NavLink } from 'react-router-dom';
function Contact() {
  return (
    <>
    <ContactUs/>
      <div className='footer-container'>
        
        <div className='left-contact'>
          <h3 className='head reachus'>Reach Us</h3>
          <FaLocationDot className='icon location-icon'/>
          <p className='footer-text'>  
            NAMAN Samajik Lok Kalyan Samiti, 553 Rajaram Nagar,
            </p>
          <p className='footer-text'>Dewas, Madhya Pradesh 455001</p>
          <p> <BsTelephoneFill className='icon ' />+91-9009422321</p>
          <p><BsTelephoneFill className='icon'  />+91-7509529113</p>
          <p> <MdEmail className='icon email-icon' /> namanngodewas@gmail.com</p>
        </div>


        <div className='middle-contact'>
          <h3 className='head'>Nagivation</h3>
          <NavLink className="middle" to="/" > HOME</NavLink>
            <NavLink className="middle" to="/about" >ABOUT US</NavLink>
            <NavLink className="middle" to="/projects">OUR PROJECTS</NavLink>
            <NavLink className="middle" to="/governance">GOVERNANCE</NavLink>
            <NavLink className="middle" to="/contact">CONTACT US</NavLink>
        </div>



        <div className='right-contact'>
          <h3 className='head'>Follow Us</h3>
          <NavLink  className="link" to=""> <BiLogoYoutube className='icon'/>YouTube</NavLink>
          <NavLink className="link" to=""><BsFacebook className='icon'/> FaceBook</NavLink>
          <NavLink className="link" to=""><AiFillInstagram className='icon'/> Instagram</NavLink>
          {/* <NavLink className="link" to="">LinkedIn</NavLink> */}
          <NavLink className="link" to=""><AiFillMail className='icon'/> Mail</NavLink>
        </div>
      </div>
        <div class="copyright">
        <p>© Copyright 2023 NAMAN Samajik Lok Kalyan</p>
    </div>
    </>
  )
}

export default Contact;





