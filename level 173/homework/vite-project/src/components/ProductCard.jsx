const ProductCard = ({ product }) => {
  return(
    <>
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </>
  )
}

export default ProductCard