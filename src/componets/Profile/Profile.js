import React from "react";
import styles from "./profile.module.css";
import List from "../List/List";

const Profile = ({ person }) => {
  return (
    <>
      <div className={styles.profile}>
        <div className={styles.description}>
          <img
            className={styles.avatar}
            src={person.avatar}
            alt={person.name}
          />
          <p className={styles.name}>{person.name}</p>
          <p className={styles.tag}>{person.tag}</p>
          <p className={styles.location}>{person.location}</p>
        </div>
        <ul className={styles.stats}>{<List data={person.stats} />}</ul>
      </div>
    </>
  );
};
export default Profile;
