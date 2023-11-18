import React from 'react';
import TransactionItem from './TransactionItem';
import TipsComponent from './Tips';

const TransactionList = ({ transactions, onDeleteTransaction, balance }) => {
  return (
    <div>
      <div className='transaction-list'>
        <h2 className='text-2xl font-bold mb-4'>Transaction List</h2>
        <div className='transaction-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {transactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              onDelete={() => onDeleteTransaction(transaction.id)}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold mt-4 text-right">Balance: ${balance}</h2>
      </div>
      <TipsComponent />
    </div>
  );
};

export default TransactionList;
