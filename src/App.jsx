import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <hr />
      <h1>Hello Knowledge-Cafe</h1>
    </div>
  );
}

export default App;
