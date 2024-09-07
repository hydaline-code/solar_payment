import React from "react";
import { Link } from "react-router-dom";
import { BiUser , BiTrendingUp} from "react-icons/bi";
import loginImage from '../assets/loginbg.png';
import '../styles/HomePage.css';

const HomePage = ()=>{
  return (
    <div className="homePage">
    <header className="header">
      <div className="logo">
          <span>AER</span>
        </div>
        <h1>Welcome to AER</h1>
        <div className="user-role">
        <BiUser size={44} color="black" />
        </div>
    </header>
    <h2>Get Energy Easier</h2>
    <hr />
    <section className="intro-section">
        <img src={loginImage} alt="Login background" />
        <button className="get-started-btn">Get Started</button>
      </section>

      <section className="stats">
        <div className="stat-item">
          <BiUser size={24} color="#000" />
          <p>Subscribers</p>
          <h3>70</h3>
        </div>
        <div className="stat-item">
          <BiTrendingUp size={24} color="#000" />
          <p>Active Accounts</p>
          <h3>50</h3>
        </div>
        <div className="stat-item">
          <BiUser size={24} color="#000" />
          <p>Communities</p>
          <h3>08</h3>
        </div>
      </section>

      {/* Overall Statistics Graph Section */}
      <section className="overall-stats">
        <h2>Overall - Statistics</h2>
        {/* Placeholder for the graph */}
        <div className="graph-placeholder">
          <p>Graph will be here</p>
        </div>
      </section>
<div className="trans-user">
      <section className="transactions">
      <h2>Transactions</h2>
        <div className="transaction-graph-placeholder">
          <p>Transaction Graph Placeholder</p>
        </div> 
      </section>

      <section className="active-users">
        <h2>Active Users</h2>
        <div className="user-statistics">
          <div className="user-count">
            <span>25 Users</span>
          </div>
          <div className="user-periods">
            <p>Daily</p>
            <p>Weekly</p>
            <p>Monthly</p>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default HomePage;