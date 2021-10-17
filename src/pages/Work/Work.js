import React from 'react';
import InfoSection from '../../components/InfoSection';
import { homeObjFive, homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data';



function Work() {
  return (
    <>
      <InfoSection {...homeObjTwo}/>
      <InfoSection {...homeObjOne}/>
     <InfoSection {...homeObjFour}/>
      <InfoSection {...homeObjThree}/>
      
    
    </>
  );
}

export default Work;
