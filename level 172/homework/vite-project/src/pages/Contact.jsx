import { useState } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: ''})

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Form Submitted!")
  }

  return(
    <>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter The Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
        <input type="email" placeholder="Enter The Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
        <input type="text" placeholder="Enter The Message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required />
        <button>Submit</button>
      </form>
    </>
  )
}

export default Contact