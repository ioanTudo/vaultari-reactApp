import React from "react";
import styles from "./feedbackContainer.module.css";

const Feedback = ({ user, role, text, rating }) => {
  const stars = Array(rating)
    .fill(0)
    .map((_, id) => <span key={id} className="fa fa-star checked"></span>);

  return (
    <div className={styles.feedbackZone}>
      {stars}
      <p className={styles.feedbackText}>{text}</p>
      <h2 className={styles.feedbackUser}>{user}</h2>
      <span className={styles.userJob}>{role}</span>
    </div>
  );
};

export default Feedback;
