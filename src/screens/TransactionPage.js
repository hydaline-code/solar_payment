import React, { useEffect, useState } from "react";
import { BiMenuAltRight, BiSkipNext } from 'react-icons/bi';
import "../styles/TransactionPage.css"; 
import MenuButton from '../components/MenuButton'; 

const TransactionPage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [displayCount, setDisplayCount] = useState(5);
  const [filterType, setFilterType] = useState("all");
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch users from the backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('');
        const data = await response.json();
        setUsers(data);
        if (data.length > 0) {
          setSelectedUser(data[0].id); // Set default user
        }
      } catch (err) {
        setError('Failed to load users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Fetch transactions for the selected user
  useEffect(() => {
    const fetchTransactions = async () => {
      if (!selectedUser) return;

      try {
        setLoading(true);
        const response = await fetch(``);
        const data = await response.json();
        setTransactions(data);
        setFilteredTransactions(data); // Default: show all transactions
      } catch (err) {
        setError('Failed to load transactions');
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
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
        <MenuButton />
      </header>

      <div className="user-selection">
        {loading ? (
          <p>Loading users...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <select value={selectedUser} onChange={handleUserChange}>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        )}
      </div>

      <div className="table-container">
        {loading ? (
          <p>Loading transactions...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <>
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
          </>
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
        <p>Load graph here</p>
      </div>
    </div>
  );
};

export default TransactionPage;
