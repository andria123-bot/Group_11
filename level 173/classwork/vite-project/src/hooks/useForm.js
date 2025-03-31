const useForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const infoObj = {}

    const data = formData(e.target.value)

    for([key, value] of data.entries()){
      infoObj[key] = value
    }
  }
}

export default useForm;