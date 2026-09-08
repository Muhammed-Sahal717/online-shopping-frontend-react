import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Checkout({ cart, clearCart }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    payment: "",
  });

  const [error, setError] = useState("");

  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, address, phone, payment } = formData;

    if (!name || !email || !address || !phone || !payment) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    setSuccess(true);

    clearCart();

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  if (cart.length === 0 && !success) {
    return <Navigate to="/cart" />;
  }

  if (success) {
    return (
      <main className="section success-page">
        <h1>Order Placed Successfully</h1>

        <p>Thank you for your order!</p>

        <p>Redirecting to the home page...</p>
      </main>
    );
  }

  return (
    <main className="section">
      <div className="checkout-card">
        <h1>Checkout</h1>

        {error && <div className="error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <label>Name</label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />

          <label>Email</label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />

          <label>Address</label>

          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
            rows="4"
          ></textarea>

          <label>Phone</label>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />

          <label>Payment Method</label>

          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="payment"
                value="Cash on Delivery"
                checked={formData.payment === "Cash on Delivery"}
                onChange={handleChange}
              />
              Cash on Delivery
            </label>

            <label>
              <input
                type="radio"
                name="payment"
                value="Card"
                checked={formData.payment === "Card"}
                onChange={handleChange}
              />
              Card
            </label>

            <label>
              <input
                type="radio"
                name="payment"
                value="UPI"
                checked={formData.payment === "UPI"}
                onChange={handleChange}
              />
              UPI
            </label>
          </div>

          <button type="submit" className="button checkout-button">
            Place Order
          </button>
        </form>
      </div>
    </main>
  );
}

export default Checkout;
