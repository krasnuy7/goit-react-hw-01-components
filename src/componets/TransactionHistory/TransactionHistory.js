import React from "react";
import styles from "./transactions.module.css";
const TransactionHistory = ({ transactions }) => {
  console.log(transactions);
  return (
    <table className={styles.tableStyle}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((tran) => (
          <tr key={tran.id}>
            <td>{tran.type}</td>
            <td>{tran.amount}</td>
            <td>{tran.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
