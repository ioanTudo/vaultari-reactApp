import Navbar from "../nav/Navbar";
import Logo from "../logo/logo";
import Phone from "../phone/phone";
import BurgerMenu from "../burger-menu/burgerMenu";
import style from "./header.module.css";

const Header = ({ navRef, bodyNoScrollRef }) => {
  return (
    <header className={style.header}>
      <BurgerMenu navRef={navRef} bodyNoScrollRef={bodyNoScrollRef} />
      <Logo />
      <Navbar navRef={navRef} />
      <Phone />
    </header>
  );
};

export default Header;
