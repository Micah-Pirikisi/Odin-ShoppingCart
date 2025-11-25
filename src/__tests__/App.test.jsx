import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import { CartProvider } from "../useCart";

test("renders Home page by default", () => {
  render(<App />);
  expect(screen.getByText(/welcome to the fake store/i)).toBeInTheDocument();
});

test("Navbar shows cart count", () => {
  render(<App />);
  expect(screen.getByText(/Cart \(0\)/i)).toBeInTheDocument();
});
