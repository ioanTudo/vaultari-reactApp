import { feedbackContainerData } from "./feedBackContainerdata.js";
import style from "./feedbackContainer.module.css";

export const TextContentFeedback = () => {
  return feedbackContainerData.map((data) => (
    <div className={style.textContent} key={data.id}>
      <h1 className={style.heading}>{data.heading}</h1>
      <p className={style.description}>{data.content}</p>
    </div>
  ));
};
