import React from "react";
import { Link } from "react-router-dom";
import { BiUser , BiTrendingUp} from "react-icons/bi";
import loginImage from '../assets/loginbg.png';
import '../styles/HomePage.css';
import HomeCharts from '../components/HomeCharts';
import PieChart from "../components/PieChart";
import {overallData, transactionsData, activeUsersData} from  '../data/ChartData';

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
        <div className="graph-placeholder">
          <HomeCharts  title="Overall - Statistics" chartData={overallData} />
        </div>
      </section>
      <section className="transactions">
        <div className="transaction-graph-placeholder">
        <HomeCharts  title="Overall - Statistics" chartData={transactionsData} />
        </div> 
      </section>

      <section className="active-users">
        <h2>Active Users</h2>
        <PieChart chartData={activeUsersData} />
      </section>
    
    </div>
  );
};

export default HomePage;