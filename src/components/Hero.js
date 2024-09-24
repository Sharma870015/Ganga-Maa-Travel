import React, { useRef } from 'react';
import logo from './LOGOOSize.png'; // Importing logo for header
import './Hero.css'; // Importing header-specific CSS
import BackgroundVideo from './Background-Video.mp4'; // Importing background video

const Hero = () => {
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    videoRef.current.style.opacity = 0; // Fade out
    setTimeout(() => {
      videoRef.current.currentTime = 0; // Reset video
      videoRef.current.style.opacity = 1; // Fade in
      videoRef.current.play(); // Play again
    }, 500); // Duration of the fade
  };

  return (
    <div className='mainForHero'>
      <div className="headContainer">
      <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="background-video"
            onEnded={handleVideoEnd} // Add event listener
          >
            <source src={BackgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <nav className='navbar'>
            <img src={logo} className='logo' alt='Ganga Maa Tour and Travel'></img>
            <ul>
              <li><a className='optionsNav' href="#home">Home</a></li>
              <li><a className='optionsNav' href="#destinations">Destinations</a></li>
              <li><a className='optionsNav' href="#booking">Package</a></li>
              <li><a className='optionsNav' href="#services">Services</a></li>
            </ul>
          </nav>
        </div>
        <div className="middleHead">
          <h1 className='firstHeading'>Explore the Divine</h1>
          <a href="#booking" className="btns">Explore Now</a>
        </div>
    </div>
  );
};

export default Hero;
