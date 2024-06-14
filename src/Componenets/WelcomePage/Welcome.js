// src/components/Welcome.js
import React from 'react';
import '../../tailwind.css';
import backgroundImageUrl from '..//../Imgaes/Myimage.png'; // Ensure the path is correct
import BckgrdTypEff from '../ReUseComponent/BckgrdTypEff'; // Ensure the path is correct

const Welcome = () => {
  return (
    <div>
      <BckgrdTypEff
        typingText="My Name is Oladunjoye Afeez, this is the welcome page for the task"
        buttonText="Enter Homepage"
        headerText="WELCOME PAGE"
        backgroundImageUrl={backgroundImageUrl}
        link="/home"
        test={false}
      />
    </div>
  );
};

export default Welcome;