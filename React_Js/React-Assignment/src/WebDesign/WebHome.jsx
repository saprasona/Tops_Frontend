import React from 'react'
import Header from './Header'
import HeroImage from './HeroImage'
import Section from './Section'
import Footer from './Footer'
import EndFooter from './EndFooter'

export default function WebHome() {
  return (
    <div>
        <div>
            <Header/>
            <HeroImage/>
            <Section/>
            <Footer/>
            <EndFooter/>
        </div>
    </div>
  )
}