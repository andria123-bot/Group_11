import { useState } from "react";

const AdminPanel = () => {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')) || [])
  const [newProduct, setnewProduct] = useState({ title: '', price: ''})

  const addProduct = () => {
    if (newProduct.title && newProduct.price) {
      const updatedProducts = [...products, newProduct];
      setProducts(updatedProducts);
      localStorage.setItem('products', JSON.stringify(updatedProducts));
      setNewProduct({ title: '', price: '' });
    } else {
      alert('Please fill in both title and price.');
    }
  };

  const deleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  return(
    <>
      <input type="text" value={newProduct.title} onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })} placeholder="Product Title" required />
      <input type="number" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} placeholder="Product Price" required />
      <button onClick={addProduct}>Add Product</button>
      {products.map((product, index) => (
        <div key={index}>
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <button onClick={() => deleteProduct(index)}>Delete</button>
        </div>
      ))}
    </>
  )
}

export default AdminPanel;