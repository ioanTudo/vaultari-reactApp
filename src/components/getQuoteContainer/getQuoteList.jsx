import { Button } from "../button/button";
import { getQuoteData } from "./getQouteData";
import style from "./getQuote.module.css";

export const GetQuoteList = () => {
  return getQuoteData.map((menuItem) => (
    <div className={style.getQuoteContainer}>
      <div key={menuItem.id} className={style.getQuoteFlexWrapper}>
        <h1 className={style.heading}>{menuItem.heading}</h1>
        <p className={style.content}>{menuItem.content}</p>
        <Button />
      </div>
    </div>
  ));
};
