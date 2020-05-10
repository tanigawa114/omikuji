import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("?");

  const handleClick = () => {
    const n = Math.random();
    if (n < 0.01) {
      setValue("");
    } else if (n < 0.05) {
      setValue("大吉");
    } else if (n < 0.2) {
      setValue("中吉");
    } else {
      setValue("凶");
    }
  };

  return (
    <div className="container">
      <div id="btn" onClick={handleClick}>
        {value}
      </div>
    </div>
  );
}

export default App;
