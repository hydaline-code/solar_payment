import { useState } from 'react';
import loginImage from '../assets/loginbg.png';
import { Link } from 'react-router-dom';
import '../styles/LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // For now, just log the credentials; later this will handle the API call
    console.log('Logging in with:', { email, password });
    // Add validation or redirect logic here
  };

  return (
    <div className="login-page">
        <h1>Get Energy Easier</h1>
        <hr />
      <img src={loginImage} alt="loginimgage" />
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label for="email">Email</label>
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
             <p>Forgot your password : <strong>click here</strong> </p>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          <p>Don't have an account? <Link to="/signup">signUp here</Link></p>
        </form>
      </div>
    );
};
export default LoginPage;