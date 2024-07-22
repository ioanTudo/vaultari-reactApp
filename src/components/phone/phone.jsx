import { NavLink } from "react-router-dom";
import "./phone..css";

const Phone = () => {
  return (
    <NavLink
      onMouseOver={(e) => {
        e.target.style.color = "#fdde55";
      }}
      onMouseLeave={(e) => {
        e.target.style.color = "white";
      }}
      className="phone"
      to="tel:077777"
    >
      phone number
    </NavLink>
  );
};

export default Phone;
