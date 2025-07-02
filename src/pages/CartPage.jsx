// pages/CartPage.jsx
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, totalAmount } = useCart();

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center py-4 border-b"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded"
                />
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p>${item.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button onClick={() => updateQuantity(item.id, "decrease")}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, "increase")}>
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 ml-4"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="text-right mt-6 text-xl font-bold">
            Total: ${totalAmount.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
