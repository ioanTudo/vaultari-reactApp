import { Link } from "react-router-dom";
import { ourPartnersLogosData } from "./ourPartnersLogosourPartnersLogosData";

export const OurPartnersList = () => {
  return ourPartnersLogosData.map((ourPartnersData) => (
    <Link key={ourPartnersData.id} to={ourPartnersData.path}>
      <img src={ourPartnersData.logo} />
    </Link>
  ));
};
