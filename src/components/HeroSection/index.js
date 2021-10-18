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
                <sc.Subtitle >This is Charishma. I am currently working as a Full Stack Developer at Kernls. 
                    I have pursued my Master's degree in Computer Science with Majors in AI and ML from Ryerson University.
                    Earlier, I worked as a Full Stack Developer at Vymo for 2 years. 
                    I love creating user-friendly, attractive and fast web pages using React, TypeScript, CSS, HTML, JavaScript. I am a passionate learner and a strong believer of perseverance.
                    
                     </sc.Subtitle>
               
              </sc.TextWrapper>
            </sc.InfoColumn>
            <sc.HeroBtnWrapper>
              
            </sc.HeroBtnWrapper>
        </sc.HeroContainer>
    )
}

export default HeroSection
