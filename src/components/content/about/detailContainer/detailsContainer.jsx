import { dataAbout } from "./detailContainerData.js";
import { DetailContainerList } from "./detailsContainerList.jsx";
import style from "./detailContainers.module.css";

export const DetailsContainer = () => {
  return (
    <div className={style.bigWrapper}>
      {dataAbout.map((item) => (
        <DetailContainerList
          key={item.id}
          heading={item.heading}
          content={item.content}
          imgSrc={item.imgSrc}
          altImg={item.altImg}
          isLeft={item.isLeft}
        />
      ))}
    </div>
  );
};
