import { NavLink } from "react-router-dom";
import { navData } from "./navData";

const BottomNavItems = () => {
  return navData.map((navItems) => (
    <NavLink
      onMouseOver={(e) => {
        e.target.style.color = " #fdde55";
      }}
      onMouseLeave={(e) => {
        e.target.style.color = "white";
      }}
      className={navItems.className}
      key={navItems.id}
      to={navItems.path}
    >
      {navItems.name}
    </NavLink>
  ));
};

export default BottomNavItems;
