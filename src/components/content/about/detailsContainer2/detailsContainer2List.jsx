import { detailsContainer2Data } from "./detailsContainer2";
import styles from "./detailsContainer2.module.css";

export const DetailsContainer2List = () => {
  return detailsContainer2Data.map((dataContainer2) => (
    <div className={styles.DetailsContainer2Background}>
      <div
        className={styles.detailContainer1FlexWrapper}
        key={dataContainer2.id}
      >
        <div className={styles.detailContainer2TextContainer}>
          <h1 className={styles.headingDetailContainer2}>
            {dataContainer2.heading}
          </h1>
          <p className={styles.contentDetailContainer2}>
            {dataContainer2.content}
          </p>
        </div>
      </div>
    </div>
  ));
};
