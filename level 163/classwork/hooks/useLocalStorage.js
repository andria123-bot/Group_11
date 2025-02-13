import { readLocal, writeLocal } from "../utils/localStorageUtils";
import { useState } from "react";

const useLocalStorage = () => {
  const [products, setProducts] = useState(null)
  const register = (formData) => {
    const accounts = readLocal("accounts");
    const account = accounts.find((obj) => obj.email === formData.email);

    if (account) {
      console.log("Account exists");
      return;
    }

    writeLocal("accounts", formData);
    console.log("Added successfully");
  };

  const login = (formData) => {
    const accounts = readLocal("accounts");
    const account = accounts.find(
      (obj) => obj.email === formData.email && obj.pass === formData.pass
    );

    if (!account) {
      console.log("Credentials wrong");
      return;
    }

    setAccount(account);
  };

  const addProduct = (FormData) => {
    FormData.id = Date.now()
    writeLocal("products", FormData);
  }

  return { register, login, addProduct };
};

export default useLocalStorage;