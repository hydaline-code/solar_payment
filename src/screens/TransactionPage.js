// src/screens/TransactionPage.js
import React, { useState }  from "react";
import { BiMenuAltRight} from 'react-icons/bi';
import "../styles/TransactionPage.css"; // Ensure you create the corresponding CSS file for styling

const TransactionPage = () => {
  
  const [selectedUser, setSelectedUser] = useState("Jean-Marc");

  const usersData = {
    "Jean-Marc": [
      { transId: "0001", date: "22-02-24", meterNo: "245879635", amount: "2000 FCFA", tokenG: "12457896gthsf546" },
      { transId: "0002", date: "22-02-25", meterNo: "245879635", amount: "2000 FCFA", tokenG: "12457896gthsf546" },
      { transId: "0002", date: "22-02-25", meterNo: "245879635", amount: "2000 FCFA", tokenG: "12457896gthsf546" },
      { transId: "0001", date: "22-02-24", meterNo: "245879635", amount: "2000 FCFA", tokenG: "12457896gthsf546" },
      { transId: "0002", date: "22-02-25", meterNo: "245879635", amount: "2000 FCFA", tokenG: "12457896gthsf546" },
      // Add more rows as needed
    ],
    Jacques: [
      { transId: "0003", date: "22-03-01", meterNo: "245879635", amount: "1500 FCFA", tokenG: "245879gfhdf546" },
      { transId: "0004", date: "22-03-02", meterNo: "245879635", amount: "2500 FCFA", tokenG: "245879gfhdf546" },
      { transId: "0001", date: "22-02-24", meterNo: "245879635", amount: "2000 FCFA", tokenG: "12457896gthsf546" },
    { transId: "0002", date: "22-02-25", meterNo: "245879635", amount: "2000 FCFA", tokenG: "12457896gthsf546" },
    { transId: "0001", date: "22-02-24", meterNo: "245879635", amount: "2000 FCFA", tokenG: "12457896gthsf546" },
    { transId: "0002", date: "22-02-25", meterNo: "245879635", amount: "2000 FCFA", tokenG: "12457896gthsf546" },
      // Add more rows as needed
    ],
  };

  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);
  };

  // const transactions = [
  //   { transId: "0001", date: "22-02-24", meterNo: "245879635", amount: "2000 FCFA", tokenG: "12457896gthsf546" },
  //   { transId: "0002", date: "22-02-25", meterNo: "245879635", amount: "2000 FCFA", tokenG: "12457896gthsf546" },
  //   { transId: "0001", date: "22-02-24", meterNo: "245879635", amount: "2000 FCFA", tokenG: "12457896gthsf546" },
  //   { transId: "0002", date: "22-02-25", meterNo: "245879635", amount: "2000 FCFA", tokenG: "12457896gthsf546" },
  //   { transId: "0001", date: "22-02-24", meterNo: "245879635", amount: "2000 FCFA", tokenG: "12457896gthsf546" },
  //   { transId: "0002", date: "22-02-25", meterNo: "245879635", amount: "2000 FCFA", tokenG: "12457896gthsf546" },
  //   { transId: "0001", date: "22-02-24", meterNo: "245879635", amount: "2000 FCFA", tokenG: "12457896gthsf546" },
  //   { transId: "0002", date: "22-02-25", meterNo: "245879635", amount: "2000 FCFA", tokenG: "12457896gthsf546" },
  //   { transId: "0001", date: "22-02-24", meterNo: "245879635", amount: "2000 FCFA", tokenG: "12457896gthsf546" },
  //   { transId: "0002", date: "22-02-25", meterNo: "245879635", amount: "2000 FCFA", tokenG: "12457896gthsf546" },
  //   // Add more rows as needed
  // ];

  return (
    <div className="transaction-page">
      {/* Header Section */}
      <header className="transaction-header">
      <h3>Jean Marc- Transactions</h3>
        <BiMenuAltRight size={38}/>
      </header>

      <div className="user-selection">
        <select value={selectedUser} onChange={handleUserChange}>
          <option value="Jean-Marc">Jean-Marc</option>
          <option value="Jacques">Jacques</option>
          {/* Add more users as needed */}
        </select>
      </div>

      <div className="table-container">
        <table className="transactions-table">
          <thead>
            <tr>
              <th>TransID</th>
              <th>Date</th>
              <th>Meter_No</th>
              <th>Amount</th>
              <th>TokenG</th>
            </tr>
          </thead>
          <tbody>
            {usersData[selectedUser].map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.transId}</td>
                <td>{transaction.date}</td>
                <td>{transaction.meterNo}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.tokenG}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
<div className="loadtrans">
 
      <div className=" user-selection see-trans">
            <h4>See Transactions : </h4>
        <select className="className="filter-dropdown>
          <option value="">Monthly</option>
          <option value="Jacques">Weekly</option>
          {/* Add more users as needed */}
        </select>
      </div>
      
      <p>load graph here</p>
      </div>
    </div>
  );
};

export default TransactionPage;
