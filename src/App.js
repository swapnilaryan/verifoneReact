import React from "react";
import "./styles.css";
import Login from "./components/Login";
import {Route, Routes} from "react-router-dom";
import Products from "./components/Products";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
};
export default App;