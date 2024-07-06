import React from "react";
import { BlueDescription } from "./descriptionContainer/description.jsx";
import { SelectionImages } from "./selectionImg/selectionImages.jsx";
import style from "./home.module.css";
import {
  FeedBackContainer,
  FeedbackContainer,
} from "./feedbackContainer/feedbackContainer";
import { MoreInfoList } from "./moreInfoContainer/moreInfoList";
import { GetQuoteList } from "../../getQuoteContainer/getQuoteList";

import { OurPartners } from "./ourPartners/ourPartnersContainer";
import { MoreInfoDisplay } from "./moreInfoContainer/MoreInfoDisplay.jsx";

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

      <FeedbackContainer />
      <MoreInfoDisplay />
      <GetQuoteList />

      <div className={style.ourPartnersContainer}>
        <OurPartners />
      </div>
    </>
  );
};
