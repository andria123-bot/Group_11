import { useState } from "react";

const useToggle = (initialState = false) => {
  const [lightMode, setLightMode] = useState(initialState);

  const toggle = () => {
    setLightMode((prevMode) => !prevMode);
  };

  return [lightMode, toggle];
};

export default useToggle;
