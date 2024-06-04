import "./header.css";
import Navbar from "../../nav/navbar";
import Logo from "../logo/logo";
import Phone from "../phone/phone";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Navbar />
      <Phone />
    </header>
  );
};

export default Header;
