import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar";
import { CartProvider } from "../useCart";

describe("Navbar component", () => {
  it("renders all links", () => {
    render(
      <CartProvider>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </CartProvider>
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Shop")).toBeInTheDocument();
    expect(screen.getByText(/Cart \(0\)/)).toBeInTheDocument();
  });
});
