import { detailsContainer1Data } from "./detailsConatiner1Data";
import styles from "./detailsContainer1.module.css";

export const DetailContainer1List = () => {
  return detailsContainer1Data.map((dataContainer1) => (
    <div className={styles.detailContainer1GridWrapper} key={dataContainer1.id}>
      <div
        className={styles.detailContainer1TextContainer}
        key={dataContainer1.id}
      >
        <h1 className={styles.headingDetailContainer1}>
          {dataContainer1.heading}
        </h1>
        <p className={styles.contentDetailContainer1}>
          {dataContainer1.content}
        </p>
      </div>
      <img src={dataContainer1.source} alt={dataContainer1.alt} />
    </div>
  ));
};
