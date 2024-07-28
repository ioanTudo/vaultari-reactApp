import React from "react";
import styles from "./detailContainers.module.css";

export const DetailContainerList = ({
  heading,
  content,
  imgSrc,
  altImg,
  isLeft,
  id,
}) => {
  const positionImgClass = isLeft
    ? styles.imagePositionLeft
    : styles.imagePositionRight;

  return (
    <div key={id} className={styles.detailContainerGridWrapper}>
      <div className={styles.containerTextContent}>
        <h2 className={styles.descriptionHeader}>{heading}</h2>
        <p className={styles.descriptionText}>{content}</p>
      </div>
      <img
        className={`${styles.imageSize} ${positionImgClass}`}
        src={imgSrc}
        alt={altImg}
      />
    </div>
  );
};
