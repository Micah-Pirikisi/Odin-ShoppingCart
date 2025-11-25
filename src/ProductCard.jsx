import React from "react";
import { useState, useRef } from "react";
import { useCart } from "./useCart";
import LazyImage from "./LazyImage";
import PlusIcon from "./icons/PlusIcon";
import MinusIcon from "./icons/MinusIcon";

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [toast, setToast] = useState(null);
  const imgRef = useRef(null);

  return (
    <div className="card" role="article" aria-label={product.title}>
      <h3 className="card-title">{product.title}</h3>
      <LazyImage ref={imgRef} src={product.image} alt={product.title} />
      <div className="price">${product.price?.toFixed(2)}</div>

      <div className="card-actions">
        <div className="qty-controls" aria-hidden="false">
          <button
            type="button"
            className="secondary"
            aria-label="Decrease quantity"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
          >
            <MinusIcon />
          </button>
          <input
            aria-label="Quantity"
            type="number"
            value={qty}
            onChange={(e) => setQty(Number(e.target.value))}
            min={1}
          />
          <button
            type="button"
            aria-label="Increase quantity"
            onClick={() => setQty((q) => q + 1)}
          >
            <PlusIcon />
          </button>
        </div>

        <button
          type="button"
          onClick={(e) => {
            addItem(product, qty);
            animateToCart(imgRef.current, qty);
            setToast(`${qty} ${product.title} added`);
            setTimeout(() => setToast(null), 1800);
          }}
        >
          Add to Cart
        </button>
      </div>
      {toast && (
        <div className="toast" role="status" aria-live="polite">
          {toast}
        </div>
      )}
    </div>
  );
}

function animateToCart(imgEl, qty = 1) {
  if (!imgEl) return;
  const cartEl = document.querySelector(".cart-link");
  if (!cartEl) return;

  const imgRect = imgEl.getBoundingClientRect();
  const cartRect = cartEl.getBoundingClientRect();

  const clone = imgEl.cloneNode(true);
  const style = clone.style;
  style.position = "fixed";
  style.left = `${imgRect.left}px`;
  style.top = `${imgRect.top}px`;
  style.width = `${imgRect.width}px`;
  style.height = `${imgRect.height}px`;
  style.transition =
    "transform 700ms cubic-bezier(.2,.9,.2,1), opacity 700ms ease";
  style.zIndex = 9999;
  style.pointerEvents = "none";
  document.body.appendChild(clone);

  requestAnimationFrame(() => {
    const destX =
      cartRect.left + cartRect.width / 2 - (imgRect.left + imgRect.width / 2);
    const destY =
      cartRect.top + cartRect.height / 2 - (imgRect.top + imgRect.height / 2);
    style.transform = `translate(${destX}px, ${destY}px) scale(.2)`;
    style.opacity = "0.7";
  });

  clone.addEventListener(
    "transitionend",
    () => {
      clone.remove();
      cartEl.classList.add("cart-bounce");
      setTimeout(() => cartEl.classList.remove("cart-bounce"), 500);
    },
    { once: true }
  );
}
