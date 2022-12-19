import { Container } from './SearchBarStyled';

const SearchBar = ({onSearchChange, onInStockChange}) => {

    

  return (
  <Container>
      <input type="text" placeholder="Search..." onChange={onSearchChange} />
      <label htmlFor="check"><input type="checkbox" id="check" onClick={onInStockChange} />Only show products in stock</label>
  </Container>
)
}

export default SearchBar;

