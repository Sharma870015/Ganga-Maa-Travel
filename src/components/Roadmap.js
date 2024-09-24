import React, { useState } from 'react';
import './Roadmap.css';

const Roadmap = () => {
  const [selectedTrip, setSelectedTrip] = useState(null);

  const destinations = [
    { name: 'Char Dham', key: 'char_dham' },
    { name: 'Do Dham', key: 'do_dham' },
    { name: 'Vrindavan', key: 'vrindavan' },
    { name: 'Ayodhya', key: 'ayodhya' },
    { name: 'Shimla', key: 'shimla' },
    { name: 'Ladakh', key: 'ladakh' }
  ];

  const selectDestination = (key) => {
    setSelectedTrip(key);
  };

  return (
    <div className="roadmap-container">
      <div className="sidebar">
        {destinations.map((dest) => (
          <button key={dest.key} onClick={() => selectDestination(dest.key)}>
            {dest.name}
          </button>
        ))}
      </div>

      <div className="roadmap-details">
        {selectedTrip === 'char_dham' && <CharDhamRoadmap />}
        {selectedTrip === 'do_dham' && <DoDhamRoadmap />}
        {selectedTrip === 'vrindavan' && <VrindavanRoadmap />}
        {selectedTrip === 'ayodhya' && <AyodhyaRoadmap />}
        {selectedTrip === 'shimla' && <ShimlaRoadmap />}
        {selectedTrip === 'ladakh' && <LadakhRoadmap />}
      </div>
    </div>
  );
};

export default Roadmap;
