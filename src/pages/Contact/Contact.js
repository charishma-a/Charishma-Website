import React from 'react';
import styled from 'styled-components';

const Social = styled.a`
max-width: 440px;
margin-left: 30px;
font-size: 18px;
line-height: 24px;
padding-top: 30px;
`

 const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 20px;
  padding-bottom: 80px;
  padding-left: 30px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

function Contact() {
  return (
    <>
      
     
      <TextWrapper>
        <h1>You can reach out to me here!</h1>
      <Social href="https://www.linkedin.com/in/charishma-a-25813a214/">LinkedIn</Social><br/>
      <Social href="https://github.com/charishma-a">GitHub</Social>
      </TextWrapper>
    </>
  );
}

export default Contact;