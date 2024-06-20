import React from "react";
import styles from "./feedbackContainer.module.css";

const Feedback = ({ user, role, text, rating }) => {
  const stars = Array(rating)
    .fill(0)
    .map((_, id) => <span key={id} className="fa fa-star checked"></span>);

  return (
    <div className={styles["feedback-zone-container"]}>
      {stars}
      <p className={styles["feedback-text"]}>{text}</p>
      <h2 className={styles["feedback-user"]}>{user}</h2>
      <span>{role}</span>
    </div>
  );
};

export default Feedback;
