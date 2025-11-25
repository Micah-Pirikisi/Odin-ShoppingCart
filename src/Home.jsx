import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

export default function Home() {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    // fetch a few products to surface as featured cards
    fetch("https://fakestoreapi.com/products?limit=4")
      .then((res) => res.json())
      .then((data) => setFeatured(data))
      .catch(() => setFeatured([]));
  }, []);

  return (
    <div>
      <section className="hero container" role="region" aria-label="Welcome">
        <div className="hero-inner">
          <div>
            <h1>Welcome to the Fake Store!</h1>
            <p className="text-muted">
              Curated picks, fast checkout, and free returns — shop with confidence. Explore our
              newest products and find something you love.
            </p>

            <div className="hero-ctas">
              <Link className="cta" to="/shop">Shop now</Link>
              <Link className="cta secondary" to="/cart">View Cart</Link>
            </div>
          </div>

          <div className="hero-visual" aria-hidden>
            <div className="hero-card">
              <h4>Customer favorite</h4>
              <p className="text-muted">Top picks for everyday use.</p>
            </div>
          </div>
        </div>
      </section>

      {featured.length > 0 && (
        <section className="container">
          <h2>Featured for you</h2>
          <div className="shop" aria-live="polite">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      <section className="container benefits">
        <div className="benefit">
          <strong>Free returns</strong>
          <div className="text-muted">Easy 30-day returns</div>
        </div>
        <div className="benefit">
          <strong>Secure checkout</strong>
          <div className="text-muted">Payment options you trust</div>
        </div>
        <div className="benefit">
          <strong>Dedicated support</strong>
          <div className="text-muted">We're here to help</div>
        </div>
      </section>
    </div>
  );
}
