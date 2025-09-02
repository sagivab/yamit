import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";

function App() {
  return (
    <div
      dir="rtl"
      className="min-h-screen w-full flex flex-col items-center px-4 py-10"
    >
      <Home />
    </div>
  );
}

export default App;
