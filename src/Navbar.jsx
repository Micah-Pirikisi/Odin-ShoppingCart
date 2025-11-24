import { Link } from "react-router-dom";
import { useCart } from "./useCart";

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart ({totalItems})</Link>
    </nav>
  );
}
