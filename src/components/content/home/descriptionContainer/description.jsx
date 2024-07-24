import styles from "../home.module.css";
import { descriptionData } from "./descriptionData";

export const BlueDescription = () => {
  return descriptionData.map((data) => (
    <div key={data.id} className={styles.flexWrapper}>
      <div key={data.id} className={styles.blueLayer}>
        <div key={data.id} className={styles.textContent}>
          <h1>{data.heading}</h1>
          <p>{data.descriptionText}</p>
        </div>
      </div>
    </div>
  ));
};
