// src/screens/SignupConfirmPage.js
import React from 'react';
import { FiCheckCircle } from 'react-icons/fi'; // Import the success icon
import '../styles/signupConfirm.css';

const addConfirm = () => (
  <div className="add-confirm">
    <div className="confirm-message">
      <FiCheckCircle className="icon" size={80} color="green" style={{ marginBottom: '20px', marginTop: '10rem' }} />
      <h2>New user registered succesfully</h2>
    </div>
      <button type="submit" className="addconfirm-button">
        See details
      </button>
  </div>
);

export default addConfirm;
