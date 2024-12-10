/* eslint-disable react/prop-types */
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          name={product.name} 
          description={product.description} 
          price={product.price} 
          likes={product.likes} 
        />
      ))}
    </div>
  );
}

export default ProductList;
