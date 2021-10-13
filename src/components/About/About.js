
import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
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

function About() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>My Interests</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
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
  );
}
export default About;
