const readLocal = (key) => {
  return JSON.parse(localStorage.getItem(key))
}

export default readLocal;