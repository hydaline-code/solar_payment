import React, { useEffect, useState } from "react";
import { BiMenuAltRight, BiSkipNext } from 'react-icons/bi';
import "../styles/TransactionPage.css"; // Ensure you create the corresponding CSS file for styling


const users = [
  { name: "Jean-Marc", id: "jean-marc" },
  { name: "Jacques", id: "jacques" },
];


const usersData = {
  "jean-marc": [
    { transId: "0001", date: "2024-02-22", meterNo: "245879635", amount: "2000 FCFA", tokenG: "12457896gthsf546" },
    { transId: "0002", date: "2024-02-25", meterNo: "245879635", amount: "2000 FCFA", tokenG: "12457896gthsf546" },
    { transId: "0001", date: "2024-02-20", meterNo: "245879635", amount: "2000 FCFA", tokenG: "12457896gthsf546" },
    { transId: "0002", date: "2024-02-21", meterNo: "245879635", amount: "2000 FCFA", tokenG: "12457896gthsf546" },
    { transId: "0001", date: "2024-02-23", meterNo: "245879635", amount: "2000 FCFA", tokenG: "12457896gthsf546" },
    { transId: "0002", date: "2024-02-26", meterNo: "245879635", amount: "2000 FCFA", tokenG: "12457896gthsf546" },
    // Add more rows as needed
  ],
  "jacques": [
    { transId: "0003", date: "2024-03-01", meterNo: "245879635", amount: "1500 FCFA", tokenG: "245879gfhdf546" },
    { transId: "0004", date: "2024-03-02", meterNo: "245879635", amount: "2500 FCFA", tokenG: "245879gfhdf546" },
    { transId: "0003", date: "2024-03-03", meterNo: "245879635", amount: "1500 FCFA", tokenG: "245879gfhdf546" },
    { transId: "0004", date: "2024-03-04", meterNo: "245879635", amount: "2500 FCFA", tokenG: "245879gfhdf546" },
    { transId: "0003", date: "2024-03-05", meterNo: "245879635", amount: "1500 FCFA", tokenG: "245879gfhdf546" },
    { transId: "0004", date: "2024-03-06", meterNo: "245879635", amount: "2500 FCFA", tokenG: "245879gfhdf546" },
    { transId: "0003", date: "2024-03-01", meterNo: "245879635", amount: "1500 FCFA", tokenG: "245879gfhdf546" },
    { transId: "0004", date: "2024-03-02", meterNo: "245879635", amount: "2500 FCFA", tokenG: "245879gfhdf546" },
    { transId: "0003", date: "2024-03-03", meterNo: "245879635", amount: "1500 FCFA", tokenG: "245879gfhdf546" },
    { transId: "0004", date: "2024-03-04", meterNo: "245879635", amount: "2500 FCFA", tokenG: "245879gfhdf546" },
    { transId: "0003", date: "2024-03-05", meterNo: "245879635", amount: "1500 FCFA", tokenG: "245879gfhdf546" },
    { transId: "0004", date: "2024-03-06", meterNo: "245879635", amount: "2500 FCFA", tokenG: "245879gfhdf546" }
    // Add more rows as needed
  ],
};


const TransactionPage = () => {
  const [selectedUser, setSelectedUser] = useState("jean-marc");
  const [transactions, setTransactions] = useState([]);
  const [displayCount, setDisplayCount] = useState(5);
  const [filterType, setFilterType] = useState("all");
  const [filteredTransactions, setFilteredTransactions] = useState([]);


  useEffect(() => {
    const userTransactions = usersData[selectedUser] || [];
    setTransactions(userTransactions);
    setFilteredTransactions(userTransactions); // Default: show all transactions
  }, [selectedUser]);


  useEffect(() => {
    filterTransactions(filterType);
  }, [transactions, filterType]);
  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);
    setDisplayCount(5); // Reset the display count when switching users
  };


  const handleLoadMore = () => {
    setDisplayCount((prevCount) => prevCount + 5); // Load 5 more entries
  };


  // Filter function based on selected timeframe
  const filterTransactions = (type) => {
    const now = new Date();
    let filtered = transactions;


    if (type === "monthly") {
      filtered = transactions.filter((transaction) => {
        const transactionDate = new Date(transaction.date);
        return (
          transactionDate.getMonth() === now.getMonth() &&
          transactionDate.getFullYear() === now.getFullYear()
        );
      });
    } else if (type === "weekly") {
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(now.getDate() - 7);
      filtered = transactions.filter((transaction) => {
        const transactionDate = new Date(transaction.date);
        return transactionDate >= sevenDaysAgo;
      });
    }


    setFilteredTransactions(filtered);
  };


  return (
    <div className="transaction-page">
      <header className="transaction-header">
        <h3>{users.find((user) => user.id === selectedUser)?.name} - Transactions</h3>
        <BiMenuAltRight size={38} />
      </header>


      <div className="user-selection">
        <select value={selectedUser} onChange={handleUserChange}>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
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
            {filteredTransactions.slice(0, displayCount).map((transaction, index) => (
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


        {displayCount < filteredTransactions.length && (
          <BiSkipNext size={24} className="load-more-button" onClick={handleLoadMore} />
        )}
      </div>


      <div className="loadtrans">
        <div className="user-selection see-trans">
          <h4>See Transactions:</h4>
          <select
            id="transaction-filter"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="all">All</option>
            <option value="monthly">Monthly</option>
            <option value="weekly">Weekly</option>
          </select>
        </div>
        <p>load graph here</p>
      </div>
    </div>
  );
};


export default TransactionPage;
