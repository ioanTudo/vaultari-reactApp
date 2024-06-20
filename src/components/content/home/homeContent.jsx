import React from "react";
import { BlueDescription } from "./description";
import { SelectionImages } from "./selectionImages";
import style from "./home.module.css";
import { FeedBackContainer } from "./feedbackContainer/feedbackContainer";
import { MoreInfoList } from "./moreInfoContainer/moreInfoList";

export const HomeContent = () => {
  return (
    <body className={style.home}>
      <div className="blueDescription">
        <BlueDescription />
      </div>

      <div className={style.selectionImage}>
        <div className={style.selectionGridWrapper}>
          <SelectionImages />
        </div>
      </div>

      <div className={style.feedbackContainer}>
        <FeedBackContainer />
      </div>

      <div className={style.moreInfoContainer}>
        <div className={style.moreInfoGridWrapper}>
          <MoreInfoList />
        </div>
      </div>
    </body>
  );
};
