import { Link } from "react-router-dom";
import style from "./button.module.css";
import { buttonData } from "./buttonData";

export const Button = () => {
  return buttonData.map((data) => (
    <Link className={style.position} to={"/contact"}>
      <button className={style.button} key={data.id}>
        {data.name}
      </button>
    </Link>
  ));
};
