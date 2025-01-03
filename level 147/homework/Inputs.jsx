import { useState } from 'react'

const Inputs = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  return(
    <div>
      <form>
        <input type="text" onChange={handleChange} name='firstname' value={formData.firstname || ""} />
        <input type="text" onChange={handleChange} name='lastname'  value={formData.lastname  || ""} />
        <input type="text" onChange={handleChange} name='age'       value={formData.age       || ""} />
        <input type="text" onChange={handleChange} name='number'    value={formData.number    || ""} />
        <input type="text" onChange={handleChange} name='email'     value={formData.email     || ""} />
      </form>

      <p>Firstname: {formData.firstname || ""}</p>
      <p>lastname: {formData.lastname || ""}</p>
      <p>age: {formData.age || ""}</p>
      <p>number: {formData.number || ""}</p>
      <p>email: {formData.email || ""}</p>
    </div>
  )
}

export default Inputs;