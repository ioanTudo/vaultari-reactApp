import { detailsContainer3Data } from "./detailsContainer3";
import styles from "./detailsContainer3.module.css";

export const DetailsContainer3List = () => {
  return detailsContainer3Data.map((dataContainer3) => (
    <div className={styles.detailContainer3GridWrapper} key={dataContainer3.id}>
      <img src={dataContainer3.source} alt={dataContainer3.alt} />
      <div className={styles.detailContainer3TextContainer}>
        <h1 className={styles.headingDetailContainer3}>
          {dataContainer3.heading}
        </h1>
        <p className={styles.contentDetailContainer3}>
          {dataContainer3.content}
        </p>
      </div>
    </div>
  ));
};
