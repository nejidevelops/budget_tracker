import React from 'react';
import TransactionItem from './TransactionItem';
import TipsComponent from './Tips';

const TransactionList = ({ transactions, onDeleteTransaction, balance }) => {
  return (
    <div>
      <h2>Transaction List</h2>
      <div>
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            onDelete={() => onDeleteTransaction(transaction.id)}
          />
        ))}
      </div>
      <h2>Balance: ${balance}</h2>
      <TipsComponent />
    </div>
  );
};

export default TransactionList;
