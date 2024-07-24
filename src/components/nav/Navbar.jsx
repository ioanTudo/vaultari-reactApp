import MenuListItems from "./menuListItems";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav--ul">
        <MenuListItems />
      </ul>
    </nav>
  );
};

export default Navbar;
