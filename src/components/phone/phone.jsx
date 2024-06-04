import { Link } from "react-router-dom";
import "./phone..css";

const Phone = () => {
  return (
    <Link className="phone" to="tel:077777">
      phone number
    </Link>
  );
};

export default Phone;
