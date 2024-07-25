import { NavLink } from "react-router-dom";
import logo from "../../images/logos/logo copy.png";
import style from "./logo.module.css";

const Logo = () => {
  return (
    <NavLink className={style.logo} to="/">
      <img className={style.logoImg} src={logo} alt="logo" />
    </NavLink>
  );
};

export default Logo;
