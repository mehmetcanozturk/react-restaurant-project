import React, { useState } from "react";
import "./App.scss";
import Navbar from "./Navbar";
import Restaurant from "./Restaurant";

function App() {
  const [item, setItem] = useState([]);
  return (
    <div className="App">
      <Navbar item={item} setItem={setItem} />
      {item.map((index, key) => (
        <Restaurant key={key} item={index} id={item.uid} />
      ))}
    </div>
  );
}

export default App;
