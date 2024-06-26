import React from "react";
import styles from "./hero.module.css";
import { subHeadingData } from "./subHeadingText";

export const SubHeading = () => {
  return subHeadingData.map((text) => (
    <p className={styles.subHeading} key={text.id}>
      {text.content}
    </p>
  ));
};
