import { Link } from "react-router-dom";
import { Container } from "./HeaderStyled";

const Header = () => (
  <Container classNameName="container">
    <h2>Search your product...</h2>
    <ul>
      <li>
        <Link classNameName="link" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link classNameName="link" to="/products">
          Product Table
        </Link>
      </li>
    </ul>
  </Container>
);

export default Header;
