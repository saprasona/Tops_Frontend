import React from 'react'
import { FaFacebook, FaGooglePlusSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';
export default function EndFooter() {
  return (
    <div>
        <div className='d-flex justify-content-between px-5 align-items-center text-white fw-bold '
         style={{backgroundColor:"#2E7D32"}}>
            <p className='pt-3'>© 2019 Frontage. All rights reserved. Design by Frontage</p>
            <div className='social h3 d-flex gap-3 pt-2'>
            <FaInstagram />
            <FaFacebook />
            <FaLinkedin />
            <FaGooglePlusSquare />
            </div>
        </div>
    </div>
  )
}