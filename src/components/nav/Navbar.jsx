import MenuListItems from "./menuListItems";
import style from "./Navbar.module.css";

const Navbar = ({ navRef }) => {
  return (
    <nav ref={navRef} className={style.nav}>
      <MenuListItems />
    </nav>
  );
};

export default Navbar;
