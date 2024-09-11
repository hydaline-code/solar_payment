// LoginPage.js
import { useState } from 'react';
import { Link } from 'react-router-dom';
import loginImage from '../assets/loginbg.png';
import '../styles/LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Email validation regex
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Password validation with stronger security using regex
  const validatePassword = (password) => {
    // Regex for strong password: min 8 chars, at least 1 uppercase, 1 lowercase, 1 number, and 1 special char
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Validate email and password
    if (!validateEmail(email)) {
      setError('Invalid email format.');
      return;
    }

    if (!validatePassword(password)) {
      setError(
        'Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.'
      );
      return;
    }

    //  backend API integration
    // This is where you would send the validated email and password to your backend
    console.log(' backend here', { email, password });
    setError('');
  };

  return (
    <div className="login-page">
      <h1>Get Energy Easier</h1>
      <hr />
      <img src={loginImage} alt="Login background" />
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError('');
            }}
            required
          />
        </div>
        <div className="form-group-1">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError('');
            }}
            required
          />
          <p className="login-para">
            Forgot your password?{' '}
            <Link to="/forgot-password">
              <strong>Click here</strong>
            </Link>
          </p>
        </div>
        {error && <p className="error-message">{error}</p>}
        
        <div className="logbtn">
          <button type="submit" className="login-button">
            Login
          </button>
          <p className="login-para">
            Don't have an account?{' '}
            <Link to="/signup">
              Sign up here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
