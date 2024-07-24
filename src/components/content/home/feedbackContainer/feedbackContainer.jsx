import React from "react";
import { TextContentFeedback } from "./feedbackContainerContentList.jsx";
import { FeedbackUsersContainer } from "./listFeedback.jsx";
import style from "./feedbackContainer.module.css";

export const FeedbackContainer = () => {
  return (
    <div className={style.feedbackContainer}>
      <div className={style.flexWrapper}>
        <TextContentFeedback />
        <h2 className={style.testimonialHeader}>testimonials</h2>
        <div className={style.gridWrapper}>
          <FeedbackUsersContainer />
        </div>
      </div>
    </div>
  );
};
