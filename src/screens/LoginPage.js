import { useState } from 'react';
import { Link } from 'react-router-dom';
import loginImage from '../assets/loginbg.png';
import '../styles/LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here, e.g., validation or API calls
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
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <p className='login-para'>
            Forgot your password?
            {' '} 
            <Link to="/forgot-password"> 
              <strong>Click here</strong>
            </Link>
          </p>
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
        <p className='login-para'>
          Don't have an account?
          {' '}
          <Link to="/signup">
            Sign up here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
