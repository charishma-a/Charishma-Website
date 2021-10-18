import React from 'react'
import * as sc from './HeroElements'
import bg from '../../videos/bg.mp4'
import bl from '../../images/bl.jpg'
const HeroSection = () => {
  
    return (
        <sc.HeroContainer>
            <sc.HeroBg>
                <sc.VideoBg autoPlay loop muted src={bg} type = 'video/mp4'/>
            </sc.HeroBg>
            <sc.ImgWrapper>
            <sc.Img src={bl} alt='hey' />
            </sc.ImgWrapper>

            <sc.InfoColumn>
              <sc.TextWrapper>
                <sc.TopLine></sc.TopLine>
                <sc.Heading>Hello! Welcome to my page</sc.Heading>
                <sc.Subtitle >This is Charishma. I am a Ryerson University graduate currently looking for a front end developer role</sc.Subtitle>
               
              </sc.TextWrapper>
            </sc.InfoColumn>
            <sc.HeroBtnWrapper>
              
            </sc.HeroBtnWrapper>
        </sc.HeroContainer>
    )
}

export default HeroSection
