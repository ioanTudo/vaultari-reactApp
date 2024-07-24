import { feedbackData } from "./feedbackData";
import Feedback from "./feedbackUsers";

export const FeedbackUsersContainer = () => {
  return (
    <>
      {feedbackData.map((data, index) => (
        <Feedback
          key={index}
          user={data.user}
          role={data.role}
          text={data.text}
          rating={data.rating}
        />
      ))}
    </>
  );
};
