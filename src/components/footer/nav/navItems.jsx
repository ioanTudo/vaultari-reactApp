import { NavLink } from "react-router-dom";
import { navData } from "./navData";

function BottomNavItems() {
  return navData.map((navItems) => (
    <NavLink
      className={navItems.className}
      key={navItems.id}
      to={navItems.path}
    >
      {navItems.name}
    </NavLink>
  ));
}

export default BottomNavItems;
