import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const CharDhamRoadmap = () => {
  const roadmap = [
    { day: 1, location: 'Yamunotri', speciality: 'Famous for Yamuna River and temples' },
    { day: 2, location: 'Gangotri', speciality: 'Source of the Ganges River' },
    { day: 3, location: 'Kedarnath', speciality: 'Famous Shiva temple' },
    { day: 4, location: 'Badrinath', speciality: 'Vishnu Temple in the Himalayas' },
  ];

  return (
    <div className="roadmap">
      <h2>Char Dham Travel Itinerary</h2>
      {roadmap.map((step, index) => (
        <div key={index} className="roadmap-item">
          <FaMapMarkerAlt className="location-icon" />
          <div className="roadmap-info">
            <h3>Day {step.day}: {step.location}</h3>
            <p>{step.speciality}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CharDhamRoadmap;
