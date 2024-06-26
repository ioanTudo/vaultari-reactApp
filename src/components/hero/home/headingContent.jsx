import React from "react";
import styles from "./hero.module.css";
import { headingData } from "./headingtext";

export const Heading = () => {
  return headingData.map((text) => (
    <h1 className={styles.heading} key={text.id}>
      {text.content}
    </h1>
  ));
};
