import { selectionImages } from "./selectionBar";
import styles from "../home.module.css";
import { Link } from "react-router-dom";

export const SelectionImages = () => {
  return selectionImages.map((selection) => (
    <Link
      to={selection.path}
      key={selection.id}
      className={styles[selection.styleImg]}
    >
      <div key={selection.id}>
        <div className={styles.selectionTextContent}>
          <h1>{selection.name}</h1>
          <p>{selection.content}</p>
        </div>
      </div>
    </Link>
  ));
};
