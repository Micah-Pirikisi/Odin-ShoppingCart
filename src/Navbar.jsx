import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./useCart";
import CartIcon from "./icons/CartIcon";
import { useState } from "react";

export default function Navbar() {
  const { totalItems } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <div className="brand">
          <Link to="/">Odin ShoppingCart</Link>
        </div>

        <button
          className="hamburger"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <nav
          id="main-nav"
          aria-label="Main navigation"
          className={open ? "open" : ""}
        >
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/shop" onClick={() => setOpen(false)}>
            Shop
          </Link>
          <Link className="cart-link" to="/cart" onClick={() => setOpen(false)}>
            <CartIcon />
            <span className="cart-text">Cart</span>
            <span className="cart-count" aria-live="polite" aria-atomic="true">
              {totalItems}
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
