import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../../constants/products';
import { Container } from './MainTableStyled';
import SearchBar from '../SearchBar/SearchBar';
import ProductTable from '../ProductTable/ProductTable';


const MainTable = () => {
  const [searchText, setSearchText] = useState("");
  const [inStock, setInStock] = useState(false);
  const onSearchChange = (e) => setSearchText(e.target.value);
  const onInStockChange = (e) => setInStock(!inStock);
  const navega = useNavigate();

  return (
    <Container>
      <h2>Products</h2>
      <SearchBar
        onSearchChange={onSearchChange}
        onInStockChange={onInStockChange}
      />
      <ProductTable
        searchText={searchText}
        inStock={inStock}
        products={products}
      />
      <button onClick={() => navega("/")}>Home</button>
    </Container>
  );
}

export default MainTable;
