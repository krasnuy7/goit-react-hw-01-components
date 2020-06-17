import React from "react";
import Profile from "./Profile/Profile";
import user from "./Profile/user.json";
import statistic from "./Statistics/statistical-data.json";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import friends from "./FriendList/friends.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "./TransactionHistory/transactions.json";
const App = () => {
  return (
    <>
      <h1>TASK 1</h1>
      <Profile person={user} />
      <h2>TASK 2</h2>
      <Statistics data={statistic} />
      <h2>TASK 3</h2>
      <FriendList friends={friends} />
      <h2>TASK 4</h2>
      <TransactionHistory transactions={transactions} />
    </>
  );
};

export default App;
