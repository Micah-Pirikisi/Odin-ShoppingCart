import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "../ProductCard";
import { CartContext } from "../useCart";
import { vi } from "vitest";

// Mock product
const product = { id: 1, title: "Hat", image: "test.png", price: 12.5 };

test("adds item to cart when clicking Add to Cart", () => {
  const addItem = vi.fn();
  const mockCartContext = {
    cart: [],
    addItem,
    updateQuantity: vi.fn(),
    totalItems: 0,
  };

  render(
    <CartContext.Provider value={mockCartContext}>
      <ProductCard product={product} />
    </CartContext.Provider>
  );

  // Only one price should render
  const prices = screen.queryAllByText(/\$12.50/);
  expect(prices.length).toBe(1);

  fireEvent.click(screen.getByText(/add to cart/i));

  expect(addItem).toHaveBeenCalledWith(product, 1);
});
