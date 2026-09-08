import { Link } from "react-router-dom";

function Products({ addToCart }) {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 2499,
      description:
        "Comfortable wireless headphones with clear sound and long battery life.",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 3499,
      description:
        "A modern smartwatch with fitness tracking and notification support.",
    },
    {
      id: 3,
      name: "Mechanical Keyboard",
      price: 2999,
      description:
        "A durable mechanical keyboard suitable for work and gaming.",
    },
    {
      id: 4,
      name: "Wireless Mouse",
      price: 1299,
      description: "A comfortable wireless mouse with accurate tracking.",
    },
    {
      id: 5,
      name: "Laptop Stand",
      price: 999,
      description:
        "An adjustable laptop stand designed for comfortable working.",
    },
  ];

  return (
    <main className="section">
      <h1>Products</h1>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image">{product.name.charAt(0)}</div>

            <h2>{product.name}</h2>

            <p className="price">₹{product.price}</p>

            <p>{product.description}</p>

            <div className="product-buttons">
              <Link to={`/product/${product.id}`} className="button secondary">
                View Details
              </Link>

              <button className="button" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Products;
