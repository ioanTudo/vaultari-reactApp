import { logosData } from "./logoData";
import { Link } from "react-router-dom";

const FooterLogosItems = () => {
  return logosData.map((logoItem) => (
    <Link className={logoItem.className} to={logoItem.path}>
      <img src={logoItem.imgLink} alt={logoItem.alt}></img>
    </Link>
  ));
};

export default FooterLogosItems;
