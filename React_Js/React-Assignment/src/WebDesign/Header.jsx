import React from 'react'
import { FaHome } from "react-icons/fa";

export default function Header() {
  return (
    <div className=' d-flex justify-content-between px-5 py-2 align-items-center text-white ' 
    style={{backgroundColor:"#2E7D32"}}>
        <h2 ><FaHome />Frontage</h2>
    <div className='d-flex justify-content-center text-white  gap-5'>
       <li className='list-unstyled fw-bold  '>HOME</li>
       <li className='list-unstyled fw-bold  '>ABOUT</li>
       <li className='list-unstyled fw-bold  '>PAGES</li>
       <li className='list-unstyled fw-bold  '>SHOP</li>
       <li className='list-unstyled fw-bold  '>BLOG</li>
       <li className='list-unstyled fw-bold  '>CONTACT</li>

       </div>
    </div>
  )
}