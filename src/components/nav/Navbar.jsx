import { Outlet, Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <Link to="">
        <img src="../../images/logos/logo copy.png" alt="" />
      </Link>
      <nav className="nav">
        <ul className="nav--ul">
          <li className="nav--list">
            <Link to="/products">products</Link>
          </li>
          <li className="nav--list">
            <Link to="/client-resources">client resources</Link>
          </li>
          <li className="nav--list">
            <Link to="/risk-management">risk management</Link>
          </li>
          <li className="nav--list">
            <Link to="/contact">contact</Link>
          </li>
          <li className="nav--list">
            <Link to="/about">about</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
