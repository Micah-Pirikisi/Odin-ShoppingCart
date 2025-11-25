import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";
import { CartProvider } from "./useCart";

export default function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <Navbar />
          <main className="page container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
        </Router>
      </CartProvider>
    </>
  );
}
