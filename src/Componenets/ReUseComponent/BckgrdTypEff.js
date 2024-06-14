// src/components/BckgrdTypEff.js
import React from 'react';
import Typing from 'react-typing-effect';
import '../../tailwind.css';
import { useNavigate } from 'react-router-dom';
import Header from '../Headers/Header';

const BckgrdTypEff = ({ typingText, buttonText, headerText, backgroundImageUrl, link,test }) => {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate(link); // Adjust this path according to your routing setup
  };

  return (
    <div className=" bg-cover  h-screen bg-blue-200"
    style={{
        backgroundImage: `url(${backgroundImageUrl})`, // Dynamically set background image
    }} >
    <Header></Header>
        <div className="my-16 flex flex-col items-center text-2xl">
          <h1 className="my-16 text-4xl font-extrabold bg-yellow-400 text-blue-600 text-center uppercase leading-loose">
            {headerText}
          </h1>
          <Typing text={[typingText]} speed={100} eraseDelay={2000} />
          <ul>
        {test && (
          <>
            <li className="my-8 p-4 border border-yellow-200 text-blue-200 bg-black">
              <a href="https://github.com/cinfotech94">Github</a>
            </li>
            <li className="my-8 p-4 border border-yellow-200 text-blue-200 bg-black">
              <a href="https://www.linkedin.com/in/cinfotech">LinkedIn</a>
            </li>
          </>
        )}
      </ul>
          <button className="my-8 p-4 border border-yellow-200 text-blue-200 bg-black" onClick={handleEnter}>
            {buttonText}
          </button>
        </div>
      </div>
  );
};

export default BckgrdTypEff;