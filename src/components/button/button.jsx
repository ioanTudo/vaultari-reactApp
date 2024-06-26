import style from "./button.module.css";
import { buttonData } from "./buttonData";

export const Button = () => {
  return buttonData.map((data) => (
    <button className={style.button} key={data.id}>
      {data.name}
    </button>
  ));
};
