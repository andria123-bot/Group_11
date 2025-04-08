import React, { useContext } from "react";
import { FirstContext } from "../contexts/FirstContext";
import { SecondContext } from "../contexts/SecondContext";

const ChildComponent = () => {
  const first = useContext(FirstContext);
  const second = useContext(SecondContext);

  return (
    <div>
      <p>{first}</p>
      <p>{second}</p>
    </div>
  );
};

export default ChildComponent;
