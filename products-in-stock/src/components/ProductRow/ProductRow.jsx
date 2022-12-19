import { Container } from "./ProductRowStyled";

const ProductRow = ({ product }) => (
  <Container>
    {(product.stocked) ? <div>{product.name}</div> : <div style={{ color: "red" }}>{product.name}</div>}
    <div>{product.price}</div>
  </Container>
);

export default ProductRow;
