import { productsData } from "./productsData";
import { Link } from "react-router-dom";

function ProductListItems() {
  return productsData.map((productItem) => (
    <li>
      <Link key={productItem.id} to={productItem.path}>
        {productItem.name}
      </Link>
    </li>
  ));
}

export default ProductListItems;
