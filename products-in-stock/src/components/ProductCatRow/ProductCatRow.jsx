import { Container } from "./ProductCatRowStyled";

const ProductCatRow = ({category}) => (
  <Container>
    <div>{category}</div>
  </Container>
)

export default ProductCatRow;
