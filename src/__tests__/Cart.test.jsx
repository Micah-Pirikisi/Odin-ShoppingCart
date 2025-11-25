import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { CartContext } from "../useCart"; 
import Cart from "../Cart";
import { vi } from "vitest";

test("updates quantity on + and - buttons", () => {
  const mockCart = [
    { id: 1, title: "Test Product", quantity: 2 }
  ];

  const mockContext = {
    cart: mockCart,
    updateQuantity: vi.fn()
  };

  const MockCartProvider = ({ children }) => (
    <CartContext.Provider value={mockContext}>
      {children}
    </CartContext.Provider>
  );

  render(
    <MockCartProvider>
      <Cart />
    </MockCartProvider>
  );

  const plusBtn = screen.getByRole("button", { name: "+" });
  fireEvent.click(plusBtn);

  expect(mockContext.updateQuantity).toHaveBeenCalledWith(1, 3);
});
