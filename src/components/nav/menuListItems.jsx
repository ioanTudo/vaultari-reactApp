import { Menu } from "./menuData";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function MenuListItems() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (id) => {
    setSelectedIndex(id);
  };

  return (
    <ul className={style.navUl}>
      {Menu.map((menuItem, index) => (
        <li className={style.navLi} key={menuItem.id}>
          <NavLink
            key={menuItem.id}
            style={{
              color: selectedIndex === index ? menuItem.selected : "white",
            }}
            onMouseOver={(e) => {
              if (selectedIndex !== index) {
                e.target.style.color = "#fdde55";
              }
            }}
            onMouseOut={(e) => {
              if (selectedIndex !== index) {
                e.target.style.color = "white";
              }
            }}
            onClick={() => handleClick(index)}
            to={menuItem.path}
          >
            {menuItem.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default MenuListItems;
