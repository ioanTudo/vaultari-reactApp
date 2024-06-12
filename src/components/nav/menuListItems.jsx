import { Menu } from "./menuData";
import "./Navbar.css";
import { Link } from "react-router-dom";

function MenuListItems() {
  return Menu.map((menuItem) => (
    <Link to={menuItem.path}>
      <li className="nav--list " key={menuItem.id}>
        {menuItem.name}
      </li>
    </Link>
  ));
}

export default MenuListItems;
