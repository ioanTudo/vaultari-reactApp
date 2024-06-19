import React from "react";
import { BlueDescription } from "./description";
import { SelectionImages } from "./selectionImages";
import style from "./home.module.css";

export const HomeContent = () => {
  return (
    <>
      <body className="home">
        <BlueDescription />
        <div className={style.selectionGridWrapper}>
          <SelectionImages />
        </div>
      </body>
    </>
  );
};
