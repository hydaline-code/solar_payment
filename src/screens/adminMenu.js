import React, { useState } from 'react';
import { BiSearch, BiUser, BiEdit, BiArrowToRight, BiMenuAltRight, BiArrowToLeft } from 'react-icons/bi';
import '../styles/AdminPage.css'; // Ensure you have proper styling
import '../styles/HomePage.css';
import HomeCharts from '../components/HomeCharts';
import {overallData, transactionsData, activeUsersData} from  '../data/ChartData';
import PieChart from "../components/PieChart";

const users = [
  { name: 'Jean-Marc', contact: '695451245', meterNo: '12457869' },
  { name: 'Jean-Marc', contact: '695451245', meterNo: '12457869' },
  { name: 'Jean-Marc', contact: '695451245', meterNo: '12457869' },
  { name: 'Jean-Marc', contact: '695451245', meterNo: '12457869' },
  { name: 'Jean-Marc', contact: '695451245', meterNo: '12457869' },
  { name: 'Jean-Marc', contact: '695451245', meterNo: '12457869' },
  { name: 'Jean-Marc', contact: '695451245', meterNo: '12457869' },
];

const itemsPerPage = 5; // Define how many items you want per page

const AdminPage = () => {
  const [currentPage, setCurrentPage] = useState(0);

  // Calculate the index of the last and first user on the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedUsers = users.slice(startIndex, endIndex);

  // Function to go to the next page
  const handleNextPage = () => {
    if (endIndex < users.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  // Function to go to the previous page (if needed)
  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="admin-section">
      <div className="welcome-message">
        <h3>Welcome John!</h3>
        <BiMenuAltRight size={38}/>
      </div>
      <div className="search-bar">
      <span>Community A: {users.length} Users</span>
        <input type="text" placeholder="Search" />
        <button>
          <BiSearch size={18} />
        </button>
      </div>
<div className='table-users'>
      <table className="user-table">
        <thead>
          <tr>
            <th>UserName</th>
            <th>Contact</th>
            <th>Meter_No</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedUsers.map((user, index) => (
            <tr key={index}>
              <td className="user-info">
                <BiUser size={20} />
                {user.name}
              </td>
              <td>{user.contact}</td>
              <td>{user.meterNo}</td>
              <td className="user-actions">
                <BiEdit size={18} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* Add navigation buttons for pagination */}
      <div className="pagination-controls">
        {currentPage > 0 && (
          <button className="prev-button" onClick={handlePrevPage}>
            <BiArrowToLeft  size={18}/>
          </button>
        )}
        {endIndex < users.length && (
          <button className="next-button" onClick={handleNextPage}>
          <BiArrowToRight  size={18}/>
          </button>
        )}
      </div>
    </div>
  
    <section className="transactions">
    <div className="transaction-graph-placeholder">
    <HomeCharts  title="Weekly - Transactions" chartData={transactionsData} />
    </div> 
  </section>

  <section className="active-users">
      <div className="graph-placeholder-1">
      <h2>Active Users</h2>
        <PieChart chartData={activeUsersData} />
        </div>
      </section>
  </div>
  );
};

export default AdminPage;
