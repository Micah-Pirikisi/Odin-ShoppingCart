import { render, screen, waitFor } from "@testing-library/react";
import Shop from "../Shop";
import { CartContext } from "../useCart";
import { vi } from "vitest";

// Mock products
const mockProducts = [
  { id: 1, title: "Mock Product 1", image: "p1.png" },
  { id: 2, title: "Mock Product 2", image: "p2.png" },
];

// Mock fetch
beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockProducts),
    })
  );
});

afterEach(() => {
  vi.restoreAllMocks();
});

// Mock CartContext
const mockCartContext = {
  cart: [],
  addItem: vi.fn(),
  updateQuantity: vi.fn(),
  totalItems: 0,
};

test("loads and displays products", async () => {
  render(
    <CartContext.Provider value={mockCartContext}>
      <Shop />
    </CartContext.Provider>
  );

  // Wait for products to appear
  for (const product of mockProducts) {
    await waitFor(() => {
      expect(screen.getByText(product.title)).toBeInTheDocument();
    });
  }
});
