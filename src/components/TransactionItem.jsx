import React from 'react';

const TransactionItem = ({ transaction, onDelete }) => {
  return (
    <div>
      <h2>{transaction.name}</h2>
      <p>{transaction.type}</p>
      <p>{transaction.type === 'income' ? '+' : '-'} ${transaction.amount}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default TransactionItem;
