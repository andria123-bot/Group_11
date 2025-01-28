import React from "react";
import NameList from "./NameList";

function App() {
  const myName = "Andria";
  const friends = ["Giorgi", "Dato", "Gabtriel"];

  return (
    <div>
      <h1>Welcome, {myName}!</h1>
      <NameList names={friends} />
    </div>
  );
}

export default App;
