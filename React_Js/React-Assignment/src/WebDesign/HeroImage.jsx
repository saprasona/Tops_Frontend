import React from 'react'
import './WebDesign.css'
import { Button } from 'reactstrap'
export default function HeroImage() {
  return (
    <div >
      <div className='w-100  bg-danger-subtle herocontain'>
        <img src="/public/image/HeroImage.jpg" alt="" className='heroImage'/>
      </div>
      <div className='contain-info p-5 w-50  info-div text-white ' >
        <h1 className='fw-bolder text-capitalize '>We are architects, planners & designers.</h1>
        <p className='py-4 h5 px-5 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit.  minima laborum cupiditate quisquam recusandae officiis rerum expedita quo veritatis?</p>
        <Button className='px-4 py-2 bg-light  border-0 rounded-0  text-black'>Read More</Button>
      </div>
    </div>
  )
}
  