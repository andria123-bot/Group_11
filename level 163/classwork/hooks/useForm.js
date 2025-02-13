import { useState, useEffect } from "react";

const useForm = (initialState = null) => {
  const [inputedInfo, setInputedInfo] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("fullname", inputedInfo.fullname);
    localStorage.setItem("email", inputedInfo.email);
    localStorage.setItem("password", inputedInfo.password);
  }, [inputedInfo]);


  const handleSubmit = (e) => {
    e.preventDefault();

    const info = new FormData(e.target);
    const infoObj = {};
    for (let [key, value] of info.entries()) {
      infoObj[key] = value;
    }
    setInputedInfo(infoObj);
    return [inputedInfo, handleSubmit];
  };
  return [inputedInfo, handleSubmit];
};

export default useForm;