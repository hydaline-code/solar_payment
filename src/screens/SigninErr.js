// src/screens/SignupConfirmPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FiXCircle } from 'react-icons/fi'; 
import '../styles/signinError.css';

const SignupError = () => {
  return (
    <div className='signup-error'>
      <div className='error-message'>
      <FiXCircle size={54} color="red" />
        <h2>Oops!</h2>
        <p > There was an issue with the acount creation</p>
      </div>
    <div className='error-btn'>
      <Link to="/">
      <button type="submit" className="error-button">
            Try again
          </button>
      </Link>
      <p>Still facing issues? Contact <strong>Admin</strong></p>
      </div>
    </div>
  );
};

export default SignupError;
