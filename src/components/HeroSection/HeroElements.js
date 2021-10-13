import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
export const HeroContainer=styled.div`
 background: #0c0c0c;
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 0 30px;
 height: 800px;
 position: relative;
 z-index: 100;

 :before{
     content: '';
     top: 0;
     left:0;
     bottom:0;
     right:0;
     background: linear-gradient(180 deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
     linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
     z-index: 2;

 }
`

export const HeroBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom:0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`
export const VideoBg = styled.video`
 width: 100%;
 height: 100%;
 -o-object-fit: cover;
 object-fit:cover;
 background: #232a4;
`;
export const HeroContent = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: right;
`
export const HeroH1 = styled.h1`
color: #fff;
font-size: 48px;
text-align: right;

@media screen and (max-width: 768px){
    font-size: 32px;
}
@media screen and (max-width: 480px){
    font-size: 32px;
}

`

export const HeroP = styled.p`
margin-top: 24px;
color: #fff;
text-align: center;
max-width: 600px;

@media screen and (max-width: 768px){
    font-size: 24px;
}
@media screen and (max-width: 480px){
    font-size: 18px;
}

`
export const ImgWrapper = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: left;
  align-items: left;
  margin-left: -100px;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: left;
  display: inline-block;
  max-height: 600px;
  margin-top: -20px;
  width: 100%;
  z-index: 1;
`;
export const InfoColumn = styled.div`
  z-index: 3;
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const TopLine = styled.div`
  color: white;
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: white;
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: white;
`;

export const HeroBtnWrapper = styled.div`
margin-top: 100px;
display: flex;
flex-direction: column;
align-items: center;
margin-left: -300px;
`

export const ArrowForward = styled(MdArrowForward)`
margin-top: 7px;
margin-left: 8px;
font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
`