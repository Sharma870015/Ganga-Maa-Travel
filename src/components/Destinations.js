import React from 'react';
import './Destinations.css'
import Kedarnath from './Kedarnath.jpg';
import Badrinath from './Badrinath.jpeg'
import Yamunotri from './Yamunotri.jpeg'
import Gangotri from './Gangotri.jpeg'
import Ayodhya from './Ayodhya.jpeg'
import Vrindavan from './Vrindavan.jpg'

const Destinations = () => {
  return (
    <section className="destinations" id="destinations">
      <div className="container">
        <h2>Popular Destinations</h2>
        <div className="destination-grid">
          <div className="destination-item">
            <img
              src={Kedarnath}
              alt="Kedarnath"
            />
            <h3>Kedarnath</h3>
            <div className="description">
              <h3>Kedarnath</h3>
              <p>The Kedarnath Temple is one of the holiest Hindu temples, dedicated to Lord Shiva, situated in the Himalayas.</p>
            </div>
          </div>
          <div className="destination-item">
            <img
              src={Badrinath}
              alt="Badrinath"
            />
            <h3>Badrinath</h3>
            <div className="description">
              <h3>Badrinath</h3>
              <p>Badrinath Temple is one of the Char Dham pilgrimage sites, dedicated to Lord Vishnu, situated in the Himalayan region.</p>
            </div>
          </div>
          <div className="destination-item">
            <img
              src={Yamunotri}
              alt="Yamunotri"
            />
            <h3>Yamunotri</h3>
            <div className="description">
              <h3>Yamunotri</h3>
              <p>Yamunotri Temple is the source of the Yamuna River and is dedicated to the goddess Yamuna, located in the Garhwal region.</p>
            </div>
          </div>
          <div className="destination-item">
            <img
              src={Gangotri}
              alt="Gangotri"
            />
            <h3>Gangotri</h3>
            <div className="description">
              <h3>Gangotri</h3>
              <p>The Gangotri Temple is a sacred site dedicated to the goddess Ganga, situated in the Uttarkashi district of Uttarakhand.</p>
            </div>
          </div>
          <div className="destination-item">
            <img
              src={Ayodhya}
              alt="Ayodhya"
            />
            <h3>Aayodha</h3>
            <div className="description">
              <h3>Aayodha</h3>
              <p>Ayodhya is an ancient city and a major pilgrimage site, known for its historical and religious significance in Hinduism.</p>
            </div>
          </div>
          <div className="destination-item">
            <img
              src={Vrindavan}
              alt="Vrindavan"
            />
            <h3>Vrindavan</h3>
            <div className="description">
              <h3>Vrindavan</h3>
              <p>Vrindavan is a significant Hindu pilgrimage site associated with Lord Krishna, known for its numerous temples and ghats.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
