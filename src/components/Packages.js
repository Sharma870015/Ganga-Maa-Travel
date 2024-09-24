import React from 'react';
import './Packages.css'; // Create this CSS file to style the packages page

const Packages = () => {
  const packageDetails = [
    {
      name: "Char Dham Yatra",
      charges: "INR 50,000",
      facilities: ["AC Accommodation", "Meals", "Guided Tour", "Pick and Drop"],
      days: 12,
      pickup: "Dehradun",
    },
    {
      name: "Do Dham Yatra",
      charges: "INR 30,000",
      facilities: ["Accommodation", "Meals", "Guided Tour", "Pick and Drop"],
      days: 7,
      pickup: "Haridwar",
    },
    {
      name: "Single Dham Yatra",
      charges: "INR 15,000",
      facilities: ["Basic Accommodation", "Meals", "Guided Tour", "Pick and Drop"],
      days: 3,
      pickup: "Rishikesh",
    },
  ];

  return (
    <section className="packages">
      <h2>Our Packages</h2>
      <div className="packages-container">
        {packageDetails.map((pkg, index) => (
          <div key={index} className="package-card">
            <h3>{pkg.name}</h3>
            <p><strong>Charges:</strong> {pkg.charges}</p>
            <p><strong>Days:</strong> {pkg.days}</p>
            <p><strong>Pickup Location:</strong> {pkg.pickup}</p>
            <p><strong>Facilities:</strong></p>
            <ul>
              {pkg.facilities.map((facility, idx) => (
                <li key={idx}>{facility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
