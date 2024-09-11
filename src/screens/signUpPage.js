// src/screens/SignupPage.js
import React, { useState, useEffect } from 'react';
import '../styles/signupPage.css';
import { BiArrowFromRight } from 'react-icons/bi';
import { useNavigate, Link } from 'react-router-dom';
import loginImage from '../assets/loginbg.png';

const SignupPage = () => {
  const navigate = useNavigate();

  // State to manage form inputs
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    community: '',
  });

  // State to handle errors and communities list
  const [error, setError] = useState('');
  const [communities, setCommunities] = useState([]);

  // Simulate fetching communities from backend (replace with actual API call)
  useEffect(() => {
    // Simulating a backend fetch for community options
    const fetchCommunities = async () => {
      // Replace with your actual API call
      const fetchedCommunities = [
        { id: 'community1', name: 'Community 1' },
        { id: 'community2', name: 'Community 2' },
        { id: 'community3', name: 'Community 3' },
      ];
      setCommunities(fetchedCommunities);
      // Set the first community as default if available
      if (fetchedCommunities.length > 0) {
        setFormData((prevData) => ({
          ...prevData,
          community: fetchedCommunities[0].id,
        }));
      }
    };

    fetchCommunities();
  }, []);

  // Email validation regex
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Password validation regex (min 8 characters, uppercase, lowercase, number, special character)
  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setError(''); // Clear errors on input change
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email
    if (!validateEmail(formData.email)) {
      setError('Invalid email format.');
      return;
    }

    // Validate password
    if (!validatePassword(formData.password)) {
      setError(
        'Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.'
      );
      return;
    }

    // Confirm password match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Submit form data if validations pass
    console.log('Form submitted', formData);
    setError('');
    navigate('/signupconfirm');
  };

  return (
    <div className="signup-page">
      <div className="snav">
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
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="community">Choose a community:</label>
          <select
            id="community"
            name="community"
            value={formData.community}
            onChange={handleChange}
          >
            {communities.map((community) => (
              <option key={community.id} value={community.id}>
                {community.name}
              </option>
            ))}
          </select>
        </div>

        {/* Display error message if any */}
        {error && <p className="error-message">{error}</p>}

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;
