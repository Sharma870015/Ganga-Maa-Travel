import React, { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const About = () => {
   // State to control visibility of additional details
   const [showMore, setShowMore] = useState(false);

   // Function to toggle the visibility
   const handleToggle = () => {
     setShowMore(!showMore);
   };

  return (
    <section className="about" id="about">
      <div className="container">
        <h2>About Us</h2>
        <p>
          Discover unforgettable journeys with us! At <strong>Shri Ganga Maa Tour and Travel</strong>, 
          we treat every traveler like family, ensuring a seamless, memorable experience. 
          Ready to explore? Contact us now and book your adventure!
        </p>
         {/* Know More button */}
         <button className="know-more-btn" onClick={handleToggle}>
          {showMore ? 'Show Less' : 'Know More'}
        </button>
        {showMore && (
          <div className="more-info">
            <h2 className='more-Heading'>About Shri Ganga Maa Tour and Travel</h2>
            <p>
          Welcome to <strong>Shri Ganga Maa Tour and Travel</strong>! We are
          proud to have been in the travel industry for more than 10 years,
          helping thousands of travelers embark on their dream journeys.
        </p>
        <p>
          Our company, founded by <strong>Ajay Yadav</strong>, is built on a
          passion for travel and a commitment to providing exceptional service.
          Every client is treated like family, whether you're planning a solo
          adventure, family vacation, or group tour. We're here to support you
          every step of the way.
        </p>
            <p>
              We are primarily focused on tourism in Uttarakhand and offer customized plans according to your budget and trip preferences. 
              Our team has over 10 years of experience in the industry, and we pride ourselves on providing personalized support to each of our clients, treating them like family.
            </p>
            <section className="about-more">
      <div className="container">
        <p>
          At <strong>Shri Ganga Maa Tour and Travel</strong>, we specialize in
          tourism throughout <strong>Uttarakhand</strong>, offering breathtaking
          experiences in the land of natural beauty and spirituality. Whether
          you want to explore the holy cities of Haridwar and Rishikesh, trek in
          the Himalayas, or unwind in the serene hill stations, we’ve got the
          perfect itinerary for you.
        </p>

        <p>
          We understand that every traveler has different needs and preferences.
          That’s why we offer fully customized travel plans to suit your{" "}
          <strong>budget</strong> and your <strong>trip plan</strong>. Let us
          know your desired destinations, travel dates, and budget, and we’ll
          create a personalized experience that ensures you make the most of
          your adventure without breaking the bank.
        </p>
        <p>
          <strong>Contact Information:</strong>
        </p>
          <p>Owner: Ajay Yadav</p>
          <p>
          Address: Shri Ganga Maa Tour and Travel <br />
              Haridwar, Motichur <br />
              Uttarakhand, India
          <br />
          Phone: +91 9557681671
          <br />
          Email: ay6271297@gmail.com
        </p>
      </div>
    </section>
    </div>
        )}    
      </div>
    </section>
  );
};

export default About;
