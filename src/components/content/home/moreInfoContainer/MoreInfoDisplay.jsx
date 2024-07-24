import style from "./moreInfo.module.css";
import { MoreInfoList } from "./moreInfoList";

export const MoreInfoDisplay = () => {
  return (
    <div className={style.moreInfoContainer}>
      <div className={style.moreInfoGridWrapper}>
        <MoreInfoList />
      </div>
    </div>
  );
};
