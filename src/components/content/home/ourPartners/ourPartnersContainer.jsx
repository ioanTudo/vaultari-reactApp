import { OurPartnersList } from "./ourPartnersList";
import style from "./ourPartners.module.css";

export const OurPartners = () => {
  return (
    <div className={style.ourPartnersContainerFlexWrapper}>
      <h1 className={style.heading}>our partners</h1>

      <div className={style.ourPartnetsGridWrapper}>
        <OurPartnersList />
      </div>
    </div>
  );
};
