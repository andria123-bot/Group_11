import React from "react";

function App() {
  const buttonStyle = {
    backgroundColor: "black",
    color: "white",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div className="app-container">
      <button style={{ backgroundColor: "red", color: "white", padding: "10px 20px", borderRadius: "5px", border: "none", cursor: "pointer" }}>
        Inline Styled Button
      </button>
      <button style={buttonStyle}>Style Object Button</button>
    </div>
  );
}

export default App;
