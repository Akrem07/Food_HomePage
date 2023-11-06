// MainComponent.js
import React, { useState } from 'react';
import Popup from './Popup';
import './MainComponent.css';


function MainComponent() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const openPopup = () => {
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <span>
      <button className='primary-button' onClick={openPopup}>Bookings Now</button>
      {isPopupVisible && (
        <Popup onClose={closePopup} />
      )}
    </span>
  );
}

export default MainComponent;
