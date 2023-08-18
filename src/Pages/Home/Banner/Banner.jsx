import React, { useState, useEffect } from 'react';
import './Banner.css'; // Import your CSS file
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import styles for the date picker
import banner from "../../../assets/images/banner.jpg"; // Import the image

const Banner = () => {
  const [zoomed, setZoomed] = useState(false);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const handleCheckInChange = (date) => {
    setCheckInDate(date);
  };

  const handleCheckOutChange = (date) => {
    setCheckOutDate(date);
  };

  useEffect(() => {
    const zoomTimeout = setTimeout(() => {
      setZoomed(true);
      setTimeout(() => {
        setZoomed(false);
      }, 5000); // Reset zoom after 5 seconds
    }, 10000); // Zoom after 10 seconds

    return () => {
      clearTimeout(zoomTimeout);
    };
  }, []);

  return (
    <div className={`banner ${zoomed ? 'zoomed' : ''}`}>
      <div className="banner-content">
        <img src={banner} alt="Banner Image" className={zoomed ? 'zoomed' : ''} />
        <div className="banner-text">
          <h1>Welcome to BookMyTrip</h1>
          <p>Discover amazing content and services</p>
        </div>
        <div className="date-picker-container">
          <DatePicker
            selected={checkInDate}
            onChange={handleCheckInChange}
            placeholderText="Check-in Date"
          />
          <DatePicker
            selected={checkOutDate}
            onChange={handleCheckOutChange}
            placeholderText="Check-out Date"
          />
          <button className="search-button">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
