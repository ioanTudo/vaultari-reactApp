import { Menu } from "./menuData";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function MenuListItems() {
  return Menu.map((menuItem) => (
    <li className="nav--list ">
      <NavLink key={menuItem.id} to={menuItem.path}>
        {menuItem.name}
      </NavLink>
    </li>
  ));
}

export default MenuListItems;
