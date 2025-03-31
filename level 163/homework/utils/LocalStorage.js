export const getLocalStorage = (key) => {
  const data = JSON.parse(localStorage.getItem(key));
  return data;
}


export const setLocalStorage = (key, value) => {
  if (getLocalStorage(key)) {
      alert('Account already exists');
      return;
  }
  localStorage.setItem(key, JSON.stringify(value));
}