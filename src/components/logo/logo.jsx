import { NavLink } from "react-router-dom";
import logo from "../../images/logos/logo copy.png";

const Logo = () => {
  return (
    <NavLink className="logo" to="/">
      <img src={logo} alt="logo" />
    </NavLink>
  );
};

export default Logo;
