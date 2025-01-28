import React, { useState } from "react";

function ChildComponent({ sendDataToParent }) {
  const handleClick = () => {
    sendDataToParent("This is data from the child!");
  };

  return (
    <button onClick={handleClick}>Send Data to Parent</button>
  );
}

function ParentComponent() {
  const [message, setMessage] = useState("");

  const handleChildData = (data) => {
    setMessage(data);
  };

  return (
    <div>
      <h1>Message from Child: {message}</h1>
      <ChildComponent sendDataToParent={handleChildData} />
    </div>
  );
}

export default ParentComponent;
