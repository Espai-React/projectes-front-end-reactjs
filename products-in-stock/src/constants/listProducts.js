import ProductCatRow from "../components/ProductCatRow/ProductCatRow";
import ProductRow from "../components/ProductRow/ProductRow";

export const listProducts = (searchText, inStock, products) => {
  const rows = [];
  let lastCategory = "";
  products.forEach((product) => {
    if (product.name.indexOf(searchText) === -1) return;
    if (inStock && !product.stocked) return;
    if (product.category !== lastCategory)
      rows.push(
        <ProductCatRow category={product.category} key={product.category} />
      );
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });
  return rows;
};
