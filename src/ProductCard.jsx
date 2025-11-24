import { useState } from "react";
import { useCart } from "../hooks/useCart";

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);

  return (
    <div className="card">
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} width="100" />

      <div>
        <button onClick={() => setQty(q => Math.max(1, q - 1))}>-</button>
        <input
          type="number"
          value={qty}
          onChange={e => setQty(Number(e.target.value))}
          min={1}
        />
        <button onClick={() => setQty(q => q + 1)}>+</button>
      </div>

      <button onClick={() => addItem(product, qty)}>Add to Cart</button>
    </div>
  );
}
