import React from 'react';
import '../../tailwind.css';
import backgroundImageUrl from '../../Imgaes/Myimage.png'; 
import BckgrdTypEff from '../ReUseComponent/BckgrdTypEff';

const Home = () => {

    return (
      <div>
        <BckgrdTypEff
          typingText="You can contact me through CInfotech1194@gmail.com, +2348102385851 or +2347045921636, "
          buttonText="Goto Welcome Page"
          headerText="CONTACT US"
          backgroundImageUrl={backgroundImageUrl}
          link="/"
        test={true}

        />
      </div>
    );
  };
  
  export default Home;