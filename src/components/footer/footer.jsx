import ProductListItems from "./products/productListItems";
import ContactListItems from "./contact/contactListItems";
import "./footer.css";

import FooterLogosItems from "./logos/footerLogos";
import BottomNavItems from "./nav/navItems";

const Footer = () => {
  return (
    <>
      <div className="contact-container dark-blue">
        <div className="grid-wrapper">
          <div className="logo-grid-wrapper">
            <FooterLogosItems />
          </div>
          <div className="products-container-bottom">
            <h1>products</h1>
            <ul>
              <ProductListItems />
            </ul>
          </div>
          <div className="contact-container-bottom">
            <h1>contact</h1>
            <ul>
              <ContactListItems />
            </ul>
          </div>
        </div>
      </div>

      <div className="bottom-nav-container">
        <div className="grid-wrapper">
          <BottomNavItems />
        </div>
      </div>

      <div className="copyright-container dark-blue">
        <p>
          Copyright 2021@ <strong>vaultari insurance group</strong>.All rights
          reserved
        </p>
      </div>
    </>
  );
};
export default Footer;
