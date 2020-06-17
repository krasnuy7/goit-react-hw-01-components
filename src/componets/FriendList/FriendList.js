import React from "react";
import styles from "./friendList.module.css";
const FriendList = ({ friends }) => {
  return (
    <>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id}>
            <div className={styles.mainDiv}>
              <span>
                {friend.isOnline ? (
                  <span className={styles.spanGreen}>ONLINE</span>
                ) : (
                  <span className={styles.spanRed}>OFFLINE</span>
                )}
              </span>
              <img src={friend.avatar} alt={friend.name} />
              <span>{friend.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FriendList;
