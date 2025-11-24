import { useCart } from "./useCart";

export default function Cart() {
  const { cart, updateQuantity } = useCart();

  if (cart.length === 0) {
    return <h2>Your cart is empty</h2>;
  }

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <div>
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
              -
            </button>

            <span>{item.quantity}</span>

            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
