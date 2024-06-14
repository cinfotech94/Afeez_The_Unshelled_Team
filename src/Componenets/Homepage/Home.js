import React from 'react';
import '../../tailwind.css';
import backgroundImageUrl from '../../Imgaes/Myimage.png'; 
import BckgrdTypEff from '../ReUseComponent/BckgrdTypEff';
const Home = () => {
    return (
      <div>
        <BckgrdTypEff
          typingText="Welcome once again to Homepage this pager perform CRUD operation Using Fetch API and Pagination"
          buttonText="Show List of Book"
          headerText="HOMEPAGE"
          backgroundImageUrl={backgroundImageUrl}
          link="/books"
        />
      </div>
    );
  };
  
  export default Home;