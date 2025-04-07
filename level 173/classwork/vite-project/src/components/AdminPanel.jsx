import { useState } from 'react'
import AddProductForm from './AddProductForm'

const AdminPannel = () => {
  const [products, setProducts] = useState([])

  const addProduct = (product) => {
    setProducts([...products, product])
  }

  const deleteProduct = (index) => {
    const newLsit = products.filter((_, i) => i !== index)
    setProducts(newList)
  }

  return(
    <>
      <h1>Admin Pannel</h1>

      <AddProductForm onAdd={addProduct} />

      <table border={1}>
        <thead>
          <tr>
            <th>Product</th>
            <th>moqmedeba</th>
          </tr>
        </thead>
        <tbody>
          {products.map((x, i) => (
            <tr key={i}>
              <td>{x.name}</td>
              <td>
                <button onClick={() => deleteProduct(i)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default AdminPannel;