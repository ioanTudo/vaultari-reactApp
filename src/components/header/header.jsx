import "./header.css";
import Navbar from "../nav/Navbar";
import Logo from "../logo/logo";
import Phone from "../phone/phone";
import BurgerMenu from "../burger-menu/burgerMenu";

const Header = () => {
  return (
    <header className="header">
      <BurgerMenu />
      <Logo />
      <Navbar />
      <Phone />
    </header>
  );
};

export default Header;
