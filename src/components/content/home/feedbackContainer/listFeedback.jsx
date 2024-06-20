import { feedbackData } from "./feedbackData";
import Feedback from "./feedbackUsers";
import styles from "./feedbackContainer.module.css";

export const ListFeedback = () => {
  return (
    <div className={styles.feedbackGridWrapper}>
      {feedbackData.map((feedback, index) => (
        <Feedback
          key={index}
          user={feedback.user}
          role={feedback.role}
          text={feedback.text}
          rating={feedback.rating}
        />
      ))}
    </div>
  );
};
