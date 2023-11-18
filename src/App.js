import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import Footer from './components/Footer';
import TipsComponent from './components/Tips';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    // Calculate balance whenever transactions change
    const newBalance = transactions.reduce(
      (acc, transaction) => (transaction.type === 'income' ? acc + transaction.amount : acc - transaction.amount),
      0
    );
    setBalance(newBalance);
  }, [transactions]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, { ...newTransaction, id: Date.now() }]);
  };

  const handleDeleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  return (
    <div className='main-layout'>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<TransactionList transactions={transactions} onDeleteTransaction={handleDeleteTransaction} balance={balance} />}
        />
        <Route path="/add-transaction" element={<TransactionForm onAddTransaction={handleAddTransaction} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
