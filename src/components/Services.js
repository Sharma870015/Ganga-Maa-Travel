import React, { useState } from 'react';
import './styles.css';
import './Services.css'
import Traveller from './Seater Tempo Traveller.jpg'
import MahindraXuv from './2018-mahindra-xuv500.jpg'
import KiaXuv from './NewKia.jpg'
import HotelImage1 from './Image7.jpeg'
import HotelImage2 from './Image1.jpeg'
import HotelImage3 from './Image2.jpeg'
import HotelImage4 from './Image3.jpeg'
import HotelImage5 from './Image4.jpeg'
import HotelImage6 from './Image5.jpeg'
import HotelImage7 from './Image6.jpeg'
import HotelImage8 from './Image8.jpeg'
import HotelImage9 from './Image9.jpeg'
import HotelImage10 from './Image10.jpeg'
import Innova from './Innova.webp'
import Dzire from './Dzire.avif'
import HondaCity from './HondaCity.jpg'

const Services = () => {
  // State to control visibility of additional details
  const [showMore, setShowMore] = useState(false);

  // Function to toggle the visibility
  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="for-serv">Our Services</h2>
        <div className="services-grid">
          <div className="service-item">
            <i className="fas fa-utensils"></i>
            <h3 className='srvc-option'>Food Facility</h3>
            <p>Enjoy delicious meals with our exclusive food service during your trip.</p>
          </div>
          <div className="service-item">
            <i className="fas fa-hotel"></i>
            <h3 className='srvc-option'>Hotel Reservation</h3>
            <p>Book top-rated hotels at your favorite destinations.</p>
          </div>
          <div className="service-item">
            <i className="fas fa-car"></i>
            <h3 className='srvc-option'>Car Rentals</h3>
            <p>We offer affordable and comfortable rental options.</p>
          </div>
        </div>

        {/* Know More button */}
        <button className="know-more-AbtServc" onClick={handleToggle}>
          {showMore ? 'Show Less' : 'Know More'}
        </button>

        {/* Conditionally render additional information */}
        {showMore && (
          <div className="additional-info">
            {/* Car Options */}
            <div className="car-options">
              <h3 className='car-optionsDiv'>Car Options</h3>
              <ul className='for-carList'>
                {[
                  { name: 'Toyota Innova', price: 15, capacity: 7, img: Innova },
                  { name: 'Maruti Swift', price: 10, capacity: 4, img: Dzire },
                  { name: 'Honda City', price: 12, capacity: 4, img: HondaCity },
                  { name: 'KIA XUV', price: 14, capacity: 7, img: KiaXuv},
                  { name: 'Traveller Van', price: 30, capacity: 12, img: Traveller},
                  { name: 'Mahindra XUV', price: 20, capacity: 7, img: MahindraXuv},
                  // Add more car options similarly...
                ].map((car, index) => (
                  <li key={index} className="car-item">
                    <img className='car-img' src={car.img} alt={car.name} />
                    <p>{car.name}</p>
                    <p>Price: {car.price} INR/km</p>
                    <p>Passenger Capacity: {car.capacity}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hotel Facility */}
            <div className="hotel-facility">
              <h3 className='HotelFacility'>Hotel Facility</h3>
              <div className="hotel-images">
                {[
                  HotelImage1,
                  HotelImage2,
                  HotelImage3,
                  HotelImage4,
                  HotelImage5,
                  HotelImage6,
                  HotelImage7,
                  HotelImage8,
                  HotelImage9,
                  HotelImage10,
                  // Add more hotel images similarly...
                ].map((image, index) => (
                  <div key={index} className="hotel-item">
                    <img className='main-img' src={image} alt={`Hotel Room ${index + 1}`} />
                    <p>Price: {Math.floor(Math.random() * 3000) + 1000} INR/day</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Food Facility */}
            <div className="food-facility">
              <h3 className='FoodFacility'>Food Facility</h3>
              <ul className='FoodItems'>
                {[
                  { name: 'Paneer Tikka', speciality: 'North Indian Special', img: 'https://www.corporatedhaba.com/blog/wp-content/uploads/2014/10/paneer-tikka.jpg' },
                  { name: 'Dal Makhani', speciality: `Punjabi Zaika Special`, img: 'https://images.slurrp.com/prod/recipe_images/transcribe/dinner/One-pot-Dal-makhani.webp?impolicy=slurrp-20210601&width=1200&height=900&q=75' },
                  { name: 'Rajma Chawal', speciality: 'Uttarakhand Special', img: 'https://thumbs.dreamstime.com/b/punjabi-cuisine-rajma-chawal-indian-vegetarian-meal-rajma-chawal-salad-top-view-114181130.jpg' },
                  { name: 'Aloo Paratha', speciality: 'Traditional Breakfast', img: 'https://thumbs.dreamstime.com/b/indian-breakfast-aloo-paratha-potato-pancakes-served-yogurt-dip-87658775.jpg' },
                  { name: 'Veg Biryani', speciality: 'Flavored Rice Dish', img: 'https://media.istockphoto.com/id/179085494/photo/indian-biryani.jpg?s=612x612&w=0&k=20&c=VJAUfiuavFYB7PXwisvUhLqWFJ20-9m087-czUJp9Fs=' },
                  { name: 'Shahi Paneer', speciality: 'Signature Dish', img: 'https://t4.ftcdn.net/jpg/06/41/69/71/360_F_641697160_Lw5c6PSLkvS5GPkyo37JAp1EHOlBaFK8.jpg' },
                  { name: 'Roti/Naan', speciality: 'Freshly Baked Bread', img: 'https://media.istockphoto.com/id/1150376593/photo/bread-tandoori-indian-cuisine.jpg?s=612x612&w=0&k=20&c=GGT5LN7G4zLhJTEnP_KcyvYuayi8f1nJcvQwvmj0rCM=' },
                  { name: 'Gulab Jamun', speciality: 'Indian Dessert Special', img: 'https://t4.ftcdn.net/jpg/06/21/54/41/360_F_621544128_inBjLYomzXLGFiNVri9ebirH1MMJ7ige.jpg' },
                  { name: 'Rasgulla', speciality: 'Indian Sweet Special', img: 'https://t4.ftcdn.net/jpg/02/23/02/33/360_F_223023382_DkOOzyFXfzOpHDXVSgGb2xmS1uZOkzNn.jpg' },
                  { name: 'Chole Bhature', speciality: 'Classic Indian Dish', img: 'https://www.shutterstock.com/image-photo/chole-bhature-north-indian-food-600nw-2238261205.jpg' },
                ].map((food, index) => (
                  <li key={index} className="food-item">
                    <img className='food-Variety' src={food.img} alt={food.name} />
                    <p>{food.name} - {food.speciality}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
