import React from "react";
import styles from "./hero.module.css";
import { Button } from "../../button/button";
import { Heading } from "./headingContent";
import { SubHeading } from "./subjeading";

const HomePageHero = () => {
  return (
    <div className={styles.flexWrapper}>
      <div className={styles.homeHero}>
        <div className={styles.textContainer}>
          <Heading />
          <SubHeading />
          <Button />
        </div>
      </div>
    </div>
  );
};

export default HomePageHero;
