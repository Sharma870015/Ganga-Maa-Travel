import React, { useState, useRef } from 'react'; 
import emailjs from '@emailjs/browser';
import './Booking.css';
import { FaCheckCircle } from 'react-icons/fa'; // Green checkmark icon
import CharDham from './CharDham.jpg'; 
import DoDham from './DoDham.jpeg';
import SingleDham from './Single.jpg';
import Vrindavan from './Vrindavan.jpg'; 
import Ayodhya from './Ayodhya.jpeg';
import Shimla from './Shimla.jpg';
import Manali from './Manali.jpg';
import Srinagar from './Srinagar.jpg';
import Kashmir from './Kashmir.jpg';
import Ladakh from './Ladakh.jpg';

export const Contact = ({ packageName, onClose }) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  const form = useRef();

  const validateForm = () => {
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(userPhone)) {
      alert('Please enter a valid 10-digit mobile number.');
      return false;
    }

    const emailPattern = /^[^\s@]+@gmail\.com$/;
    if (!emailPattern.test(userEmail)) {
      alert('Please enter a valid email address with the domain @gmail.com.');
      return false;
    }

    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    emailjs
      .sendForm('service_0f6j5zb', 'template_qod1l4b', form.current, {
        publicKey: 'husEXO9MChTOLd0uq',
      })
      .then(
        () => {
          setIsSuccessPopupOpen(true); // Show success modal
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to submit booking. Please try again.');
        },
      );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'from_name') {
      setUserName(value);
    } else if (name === 'user_email') {
      setUserEmail(value);
    } else if (name === 'user_phone') {
      setUserPhone(value);
    }
  };

  const handleCloseSuccessPopup = () => {
    setIsSuccessPopupOpen(false);
    onClose(); // Close the form after successful submission
  };

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <h2 className='BookHeding'>Book {packageName}</h2>
          <form className='form-layout' ref={form} onSubmit={sendEmail}>
            <label className='nameLable'>Name</label>
            <input placeholder='Enter name...' className="inputName" type="text" name="from_name" onChange={handleInputChange} required />
            <label className='emailLabel'>Email</label>
            <input placeholder='Enter email...' className='inputEmail' type="email" name="user_email" onChange={handleInputChange} required />
            <label className='mobileLabel'>Mobile Number</label>
            <input placeholder='Enter number...' className='inputNumber' type="text" name="user_phone" onChange={handleInputChange} required />
            <label className='MsgLabel'>Message</label>
            <textarea placeholder='Enter Text...' className='customText' name="message" value={`I would like to book the ${packageName} package. So contact me as soon as possible and also give me brief information about your services and packages.`} readOnly />
            <label className='AddtText'>Additional Message</label>
            <textarea placeholder='Enter Text...' className='AddTextArea' name="additional_message" value={`Please contact ${userName} as soon as possible.`} readOnly />
            <input className='inputSubmit' type="submit" value="Send" />
          </form>
        </div>
      </div>

      {/* Success Popup Modal */}
      {isSuccessPopupOpen && (
        <div className="success-modal">
          <div className="success-content">
            <FaCheckCircle className="success-icon" />
            <h3>Booking Submitted Successfully!</h3>
            <p>A confirmation email has been sent. An agent will call you shortly.</p>
            <button className="success-close-btn" onClick={handleCloseSuccessPopup}>
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
};

// Booking Component
const Booking = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    {
      name: 'Char Dham',
      image: CharDham,
      price: '₹25,000',
      description: 'Visit all four sacred Dhams',
    },
    {
      name: 'Do Dham',
      image: DoDham,
      price: '₹14,000',
      description: 'Visit any two of the four Dhams',
    },
    {
      name: 'Single Dham',
      image: SingleDham,
      price: '₹12,000',
      description: 'Visit one of the four Dhams',
    },
    {
      name: 'Vrindavan',
      image: Vrindavan,
      price: '₹9,000',
      description: 'Explore the holy town of Vrindavan, known for Lord Krishna',
    },
    {
      name: 'Ayodhya',
      image: Ayodhya,
      price: '₹10,000',
      description: 'Visit the birthplace of Lord Rama, Ayodhya',
    },
    {
      name: 'Shimla',
      image: Shimla,
      price: '₹9,600',
      description: 'Enjoy a relaxing trip to Shimla, the Queen of Hills',
    },
    {
      name: 'Manali',
      image: Manali,
      price: '₹11,000',
      description: 'Experience the scenic beauty and adventures of Manali',
    },
    {
      name: 'Srinagar',
      image: Srinagar,
      price: '₹18,000',
      description: 'Enjoy the mesmerizing beauty of Srinagar',
    },
    {
      name: 'Kashmir',
      image: Kashmir,
      price: '₹25,000',
      description: 'Discover the paradise on Earth, Kashmir',
    },
    {
      name: 'Ladakh',
      image: Ladakh,
      price: '₹28,000',
      description: 'Explore the rugged and stunning landscapes of Ladakh',
    },
  ];

  const handleBookNowClick = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="booking-container">
      <h1 className="heading">Tour Packages</h1>
      <div className="packages">
        {packages.map((pkg, index) => (
          <div className="package-card" key={index}>
            <img src={pkg.image} alt={pkg.name} className="package-image" />
            <div className="package-details">
              <h2 className="package-name">{pkg.name}</h2>
              <p className="package-description">{pkg.description}</p>
              <p className="package-price">Price per person: {pkg.price}</p>
              <button className="book-now" onClick={() => handleBookNowClick(pkg)}>
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Form */}
      {isModalOpen && selectedPackage && (
        <Contact packageName={selectedPackage.name} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Booking;
