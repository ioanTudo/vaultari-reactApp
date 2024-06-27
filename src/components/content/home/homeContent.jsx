import React from "react";
import { BlueDescription } from "./descriptionContainer/description.jsx";
import { SelectionImages } from "./selectionImg/selectionImages.jsx";
import style from "./home.module.css";
import { FeedBackContainer } from "./feedbackContainer/feedbackContainer";
import { MoreInfoList } from "./moreInfoContainer/moreInfoList";
import { GetQuoteList } from "../../getQuoteContainer/getQuoteList";

import { OurPartners } from "./ourPartners/ourPartnersContainer";

export const HomeContent = () => {
  return (
    <>
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

      <GetQuoteList />

      <div className={style.ourPartnersContainer}>
        <OurPartners />
      </div>
    </>
  );
};
