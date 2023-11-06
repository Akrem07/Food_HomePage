// Popup.js
import React from 'react';
import './MainComponent.css';
import Login from './Login';
import Signup from './Signup';


function Popup({ onClose }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <button onClick={onClose} className="close-button">
          X
        </button>
        <Signup/>
      </div>
    </div>
  );
}

export default Popup;
