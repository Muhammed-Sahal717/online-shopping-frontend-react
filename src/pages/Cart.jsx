import { Link } from "react-router-dom";

function Cart({ cart, removeFromCart }) {
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  if (cart.length === 0) {
    return (
      <main className="section empty-cart">
        <h1>Your Cart is Empty</h1>

        <p>Add some products to your cart first.</p>

        <Link to="/products" className="button">
          Browse Products
        </Link>
      </main>
    );
  }

  return (
    <main className="section">
      <h1>Shopping Cart</h1>

      <div className="cart-container">
        {cart.map((product) => (
          <div className="cart-item" key={product.id}>
            <div>
              <h3>{product.name}</h3>

              <p className="price">₹{product.price}</p>
            </div>

            <button
              className="delete-button"
              onClick={() => removeFromCart(product.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Total: ₹{totalPrice}</h2>

        <Link to="/checkout" className="button">
          Proceed to Checkout
        </Link>
      </div>
    </main>
  );
}

export default Cart;
