import React from 'react';

const TransactionItem = ({ transaction, onDelete }) => {
  const getImageSrc = () => {
    return transaction.type === 'income'
      ? 'https://plus.unsplash.com/premium_photo-1681589453747-53fd893fa420?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbGV0fGVufDB8fDB8fHww' 
      : 'https://plus.unsplash.com/premium_photo-1692550486620-6512b5fb22d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBlcnNvbiUyMG1vbmV5fGVufDB8fDB8fHww';
  };

  return (
    <div className="transaction-item bg-gray-200 p-4 rounded shadow">
      <div className="budget-info">
        <h2 className="text-xl font-bold mb-2">{transaction.name}</h2>
        <p>{transaction.type}</p>
        <p className={`text-lg ${transaction.type === 'income' ? 'text-green-500' : 'text-red-500'}`}>
          {transaction.type === 'income' ? '+' : '-'} ${transaction.amount}
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2" onClick={onDelete}>
          Delete
        </button>
      </div>
      <div className="budget-image">
        <img src={getImageSrc()} alt="Budget" />
      </div>
    </div>
  );
};

export default TransactionItem;