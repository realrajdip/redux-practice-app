import React from "react";
import Home from "./pages/Home.jsx";
import Cart from './pages/Cart.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-red-200">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
