import { Link } from "react-router-dom";
import logo from "../../images/logos/logo copy.png";

const Logo = () => {
  return (
    <Link className="logo" to="/">
      <img src={logo} alt="logo" />
    </Link>
  );
};

export default Logo;
