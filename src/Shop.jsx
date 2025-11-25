import React from "react";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="shop">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
