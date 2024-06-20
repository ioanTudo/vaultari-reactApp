import { mooreInfoData } from "./moreInfoData";
import style from "./moreInfo.module.css";

export const MoreInfoList = () => {
  return mooreInfoData.map((moreInfoData) => (
    <div className={style.moreInfoTextContainer} key={moreInfoData.id}>
      <h1 className={style.heading}>{moreInfoData.heading}</h1>
      <p>{moreInfoData.text}</p>
    </div>
  ));
};
