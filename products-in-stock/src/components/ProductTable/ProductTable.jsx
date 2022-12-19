import { Container } from "./ProductTableStyled";
import { listProducts } from "../../constants/listProducts";

const ProductTable = ({ searchText, inStock, products }) => {
  const rows = listProducts(searchText, inStock, products);

  return <Container>{rows}</Container>;
};

export default ProductTable;
