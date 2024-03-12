import React from 'react'
import { Button, Card, CardBody,  CardText, CardTitle } from 'reactstrap'
import './WebDesign.css'

export default function Section() {
  return (
    <div className='  text-center section'>
      <img src="/public/image/ban-2.jpg" alt="" className='img-section '/>
      <div className='info-section p-5 text-white'>
      <h1 className='mt-4 fw-bolder'>Exterior Service</h1>
      <p className='p-4 fw-bold text-white  '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum labore sed, veniam nisi sunt laboriosam ducimus, odio aspernatur fugiat minima blanditiis dignissimos.</p>
     <div className='d-flex justify-content-around px-5'>

     <Card
  color="light"
  style={{
    width: '18rem',
    boxShadow:'10px 10px 25px black',
border:"black"
  }}
>
  <img
    alt="Sample"
    src="https://picsum.photos/300/200"
  />
  <CardBody  className='bg-dark text-white '>
    <CardTitle className='h3 fw-bold '>
    Places to get lost
    </CardTitle>
   
    <CardText >
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium quos mollitia maiores at.
    </CardText>
    <Button className='bg-light text-black w-100 border-0 '>
    Read More

    </Button>
  </CardBody>
</Card>
<Card
  color="light"
  style={{
    width: '18rem',
    boxShadow:'10px 10px 25px black',

border:"black"

  }}
>
  <img
    alt="Sample"
    src="https://picsum.photos/300/200"
  />
  <CardBody  className='bg-dark text-white '>
    <CardTitle className='h3 fw-bold '>
    Perfect Design
    </CardTitle>
   
    <CardText>
     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos magnam quos voluptatibus Lorem, ipsum.
    </CardText>
    <Button className='bg-light text-black w-100 border-0 '>
    Read More

    </Button>
  </CardBody>
</Card>
<Card
  color="light"
  style={{
    width: '18rem',
    boxShadow:'10px 10px 25px black',

    border:"black"

  }}
>
  <img
    alt="Sample"
    src="https://picsum.photos/300/200"
  />
  <CardBody className='bg-dark text-white '>
    <CardTitle className='h3 fw-bold '>
    Happy Clients
    </CardTitle>
  
    <CardText>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quaerat dolorem maxime tempore quos dolore?
    </CardText>
    <Button className='bg-light text-black w-100 border-0 '>
      Read More
    </Button>
  </CardBody>
</Card>
     </div>
     </div>
    </div>
  )
}