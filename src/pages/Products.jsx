import { Link } from "react-router-dom";

function Products({ addToCart }) {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 2499,
      description:
        "Comfortable wireless headphones with clear sound and long battery life.",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 3499,
      description:
        "A modern smartwatch with fitness tracking and notification support.",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Mechanical Keyboard",
      price: 2999,
      description:
        "A durable mechanical keyboard suitable for work and gaming.",
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Wireless Mouse",
      price: 1299,
      description: "A comfortable wireless mouse with accurate tracking.",
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      name: "Laptop Stand",
      price: 999,
      description:
        "An adjustable laptop stand designed for comfortable working.",
      image:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <main className="section">
      <h1>Products</h1>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>

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
