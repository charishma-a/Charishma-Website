
import React from 'react';
import { Button } from '../../globalStyles';
import { ImCamera } from 'react-icons/im';
import { IconContext } from 'react-icons/lib';
import {MdOutlineSportsVolleyball} from 'react-icons/md'
import {MdLaptopChromebook} from 'react-icons/md'
import { Link } from 'react-router-dom';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './AboutElements';
import ru from '../../images/ru.jpeg'
import jntu from '../../images/jntu.jpeg'
import vymo from '../../images/vymo.png'
import kernls from '../../images/kernls.png'
import InfoSection from '../InfoSection';

export const homeObjOne = {
    lightBg: true,
    lightText: false,
    lightTopLine: false,
    lightTextDesc: false,
    topLine: 'Work Experience',
    headline: 'Full Stack Developer',
    description:
      'I am currently working as a Full Stack Developer at Kernls',
    buttonLabel: 'You can look more into kernls here: https://kernls.com',
    imgStart: 'start',
    img: kernls,
    alt: 'Vault'
  };

  export const homeObjThree = {
    lightBg: false,
    lightText: true,
    lightTopLine: true,
    lightTextDesc: true,
    topLine: 'Education',
    headline: 'Master of Engineering, Computer Science',
    description:
      "I have done my M.Eng in Computer Science from Ryerson University, Toronto, Canada.",
    buttonLabel: 'Know more about Ryerson here: https://www.ryerson.ca',
    imgStart: 'start',
    img: ru,
    alt: 'Vault'
  };

  export const homeObjFour = {
    lightBg: true,
    lightText: false,
    lightTopLine: false,
    lightTextDesc: false,
    topLine: 'Work Experience',
    headline: 'Internship and Full Time',
    description:
      'I have joined Vymo as a software intern and later worked as a Full time employee as a Full Stack Developer for 2 years.',
    buttonLabel: 'To know more about Vymo, go here: https://www.getvymo.com/',
    imgStart: 'start',
    img: vymo,
    alt: 'Vault'
  };


export const homeObjFive = {
    lightBg: false,
    lightText: true,
    lightTopLine: true,
    lightTextDesc: true,
    topLine: 'Education',
    headline: 'Bachelor of Technology, Information Technology',
    description:
      'I have done my B.Tech from Jawaharlal Nehru Technological University, Kakinada, India',
    buttonLabel: 'Know more about JNTUK here: https://www.jntuk.edu.in/',
    imgStart: 'start',
    img: jntu,
    alt: 'Vault'
  };



function About() {
  return (
      <>
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjThree}/>
      <InfoSection {...homeObjFour}/>
      <InfoSection {...homeObjFive}/>
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>My Interests</PricingHeading>
          <PricingContainer>
            <PricingCard to='/work'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <MdLaptopChromebook/>
                </PricingCardIcon>
                <PricingCardPlan>Coding</PricingCardPlan>
                <PricingCardCost></PricingCardCost>
                <PricingCardLength></PricingCardLength>
                <PricingCardFeatures>
                  
                  <PricingCardFeature>Java,Python,C,C++</PricingCardFeature>
                  <PricingCardFeature>HTML,CSS,JavaScript</PricingCardFeature>
                  <PricingCardFeature>React,TypeScript,Next</PricingCardFeature>
                  <PricingCardFeature>SQL,Hadoop,BigData</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>See my work!</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <MdOutlineSportsVolleyball />
                </PricingCardIcon>
                <PricingCardPlan>Sports</PricingCardPlan>
                <PricingCardCost></PricingCardCost>
                <PricingCardLength></PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Volleyball</PricingCardFeature>
                  <PricingCardFeature>Basket Ball</PricingCardFeature>
                  <PricingCardFeature>Badminton</PricingCardFeature>
                  <PricingCardFeature>Table Tennis</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Achievements</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/travel'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <ImCamera/>
                </PricingCardIcon>
                <PricingCardPlan>Travel</PricingCardPlan>
                <PricingCardCost></PricingCardCost>
                <PricingCardLength></PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>India</PricingCardFeature>
                  <PricingCardFeature>Canada</PricingCardFeature>
                  <PricingCardFeature>Europe</PricingCardFeature>
                  <PricingCardFeature>USA</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary component={Link} to="/Travel">See pictures!</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
    </>
  );
}
export default About;
