import React from "react";
import { useCart } from "./useCart";

export default function Cart() {
  const { cart, updateQuantity } = useCart();

  if (cart.length === 0) {
    return (
      <div>
        <h2>Your cart is empty</h2>
        <p className="text-muted">
          Add some items from the shop to get started.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2>Your Cart</h2>
      <div className="cart-list">
        {cart.map((item) => (
          <div className="cart-row" key={item.id}>
            <div>
              <h3>{item.title}</h3>
              <p className="text-muted">${item.price?.toFixed(2) || "0.00"}</p>
            </div>

            <div>
              <button
                type="button"
                className="secondary"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <span style={{ padding: "0 0.8rem" }}>{item.quantity}</span>
              <button
                type="button"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
