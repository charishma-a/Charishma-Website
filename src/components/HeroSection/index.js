import React,{useState} from 'react'
import * as sc from './HeroElements'
import Video from '../../videos/video.mp4'
import Pic from '../../images/pic.jpg'
import { FaArrowRight } from 'react-icons/fa'
import {Button} from '../ButtonElement'

const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const onHover = ()=>{
        setHover(!hover)
    }
    return (
        <sc.HeroContainer>
            <sc.HeroBg>
                <sc.VideoBg autoPlay loop muted src={Video} type = 'video/mp4'/>
            </sc.HeroBg>
            <sc.ImgWrapper>
            <sc.Img src={Pic} alt='hey' />
            </sc.ImgWrapper>

            <sc.InfoColumn>
              <sc.TextWrapper>
                <sc.TopLine></sc.TopLine>
                <sc.Heading>Hello! Welcome to my page</sc.Heading>
                <sc.Subtitle >This is Charishma. I am a Ryerson University graduate currently looking for a front end developer role</sc.Subtitle>
               
              </sc.TextWrapper>
            </sc.InfoColumn>
            <sc.HeroBtnWrapper>
                <Button to ='signup' onMouseEnter={onHover} onMouseLeave={onHover}
                primary='true'
                dark='true'
                >
                    Know me better! {hover? <sc.ArrowForward/> : <sc.ArrowRight/>}
                </Button>
            </sc.HeroBtnWrapper>
        </sc.HeroContainer>
    )
}

export default HeroSection
