// src/screens/SignupPage.js
import React, { useState } from 'react';
import '../styles/signupPage.css';
import loginImage from '../assets/loginbg.png';
import { BiArrowFromRight } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  // State to manage form inputs
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    commuity: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted', formData);
    navigate('/signupconfirm');
  };

  return (
    <div className="signup-page">
      <div className='snav'>
      <Link to="/">
        <BiArrowFromRight size={24} color="#333" />
      </Link>
      <h2>Get Energy Easier</h2>
    </div>
      <hr />
      <img src={loginImage} alt="loginimage" style={{ width: 200 }} />
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          </div>
          <div className="form-group">
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="community">Choose a community:</label>
          <select id="community" name="community" value={formData.commuity} onChange={handleChange}>
            <option value="community1">Community 1</option>
            <option value="community2">Community 2</option>
            <option value="community3">Community 3</option>
          </select>
          
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;
