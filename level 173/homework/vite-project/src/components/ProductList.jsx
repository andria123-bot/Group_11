import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  return (
    <>
      <>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </>
    </>
  );
};

export default ProductList;