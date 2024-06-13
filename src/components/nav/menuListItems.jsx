import { Menu } from "./menuData";
import "./Navbar.css";
import { Link } from "react-router-dom";

function MenuListItems() {
  return Menu.map((menuItem) => (
    <li className="nav--list ">
      <Link key={menuItem.id} to={menuItem.path}>
        {menuItem.name}
      </Link>
    </li>
  ));
}

export default MenuListItems;
