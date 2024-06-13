import { Link } from "react-router-dom";
import { navData } from "./navData";

function BottomNavItems() {
  return navData.map((navItems) => (
    <Link className={navItems.className} key={navItems.id} to={navItems.path}>
      {navItems.name}
    </Link>
  ));
}

export default BottomNavItems;
