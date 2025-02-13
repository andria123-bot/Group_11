import { useState } from "react"

const useForm = (initialState) => {
  const handleSubmit = (e, cb) => {
    e.preventDefault()
    const formObj = new formData(e.target).entries()
    const formData = {}

    for (const [key, value] of formObj){
      formData[key] = value
    }
    cb(formData)
  }
  return handleSubmit
}

export default useForm;