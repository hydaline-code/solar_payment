// src/screens/SignupConfirmPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi'; // Import the success icon
import '../styles/signupConfirm.css';

const SignupConfirm = () => (
  <div className="signup-confirm">
    <div className="confirm-message">
      <FiCheckCircle className="icon" size={80} color="green" style={{ marginBottom: '20px', marginTop: '10rem' }} />
      <h2>Your account has been registered</h2>
      <p> kindly check your email for confirmation</p>
    </div>

    <Link to="/">
      <button type="submit" className="confirm-button">
        Login
      </button>
    </Link>
  </div>
);

export default SignupConfirm;
