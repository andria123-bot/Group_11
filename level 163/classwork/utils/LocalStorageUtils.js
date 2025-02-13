export const readLocal = (key) => {
  return JSON.parse(localStorage.getItem(key) || [])
}

export const writeLocal = (key, value) => {
  localStorage.setItem(key, JSON.stringify([...(readLocal(key) || []), value]));
};