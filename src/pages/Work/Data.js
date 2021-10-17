import full from '../../images/p1.png'
import faces from '../../images/faces.jpeg'
import intern from '../../images/intern.jpeg'
import t1 from '../../images/t1.jpg'
export const homeObjOne = {

  lightBg: true,
  lightText: false,
  lightTopLine: false,
  lightTextDesc: false,
  topLine: '',
  headline: 'A Fund Rasing platform',
  description:
    'This is a Full Stack Web application for donating funds. Tech Stack: TypeScript, React, NextJS, JavaScript, HTML, CSS, REST API',
  buttonLabel: 'Link: https://github.com/charishma-a/FullStack-Donation',
  imgStart: '',
  img: full,
  alt: 'Credit Card'
};

export const homeObjTwo = {

  lightBg: false,
  lightText: true,
  lightTopLine: true,
  lightTextDesc: true,
  topLine: '',
  headline: 'Health Care Web Application',
  description:
    'Here is a Full Stack Web Application with the dashboard. The user can navigate to see his contacts, add, delete, and make various operations. The user can also make payments and make changes to their account. Tech Stack: JavaScript, Next, TypeScript, React, Styled Components, HTML, CSS',
  buttonLabel: 'In progress...',
  imgStart: '',
  img: require('../../images/svg-1.svg'),
  alt: 'Vault'
};

export const homeObjThree = {
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: '',
  headline: 'Emotion Classification of Faces',
  description:
    "	Extracted the features of images and reduced the dimensions of the dataset. Trained the model using happy and sad faces. Achieved 90% accuracy.  Predicted the emotion of test dataset using SVM. Tech Stack: SVM, Jupyter notebook.",
  buttonLabel: 'Link: https://github.com/charishma-a/Emotion-classification',
  imgStart: 'start',
  img: faces,
  alt: 'Vault'
};

export const homeObjFour = {
   
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: '',
  headline: 'Internship Management System',
  description:
    'A full stack web application that allows university to keep track of students placed and also allows the students to traverse through the available internships and apply for them.. We store your data, so you can access it anytime.',
  buttonLabel: 'Link: https://github.com/charishma-a/Internship-Management',
  imgStart: 'start',
  img: intern,
  alt: 'Vault'
};

export const homeObjFive = {
   
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: '',
    headline: '',
    description:
      '',
    buttonLabel: '',
    imgStart: 'start',
    img: t1,
    alt: 'Vault'
  };
