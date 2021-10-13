import React, {useState} from 'react'
import About from '../components/About/About'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'

const Home = () => {
   
    return (
        <>
        
        <HeroSection/>
        {/* <InfoSection{...homeObjOne}/> */}
       <About/>
        </>
    )
}

export default Home
