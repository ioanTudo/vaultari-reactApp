import { selectionImages } from "./selectionBar";
import styles from "../home.module.css";

export const SelectionImages = () => {
  return selectionImages.map((selection) => (
    <div key={selection.id} className={styles[selection.styleImg]}>
      <div className={styles.selectionTextContent}>
        <h1>{selection.name}</h1>
        <p>{selection.content}</p>
      </div>
    </div>
  ));
};
