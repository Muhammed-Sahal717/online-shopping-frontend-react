import { Link, useParams } from "react-router-dom";

function ProductDetails({ addToCart }) {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 2499,
      description:
        "Comfortable wireless headphones with clear sound and long battery life.",
      category: "Audio",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 3499,
      description:
        "A modern smartwatch with fitness tracking and notification support.",
      category: "Wearables",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Mechanical Keyboard",
      price: 2999,
      description:
        "A durable mechanical keyboard suitable for work and gaming.",
      category: "Computer Accessories",
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Wireless Mouse",
      price: 1299,
      description: "A comfortable wireless mouse with accurate tracking.",
      category: "Computer Accessories",
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      name: "Laptop Stand",
      price: 999,
      description:
        "An adjustable laptop stand designed for comfortable working.",
      category: "Computer Accessories",
      image:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <main className="section">
        <h1>Product Not Found</h1>

        <Link to="/products" className="button">
          Back to Products
        </Link>
      </main>
    );
  }

  return (
    <main className="section">
      <div className="details-card">
        <div className="details-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="details-content">
          <h1>{product.name}</h1>

          <p className="price">₹{product.price}</p>

          <p>
            <strong>Category:</strong> {product.category}
          </p>

          <p>{product.description}</p>

          <button className="button" onClick={() => addToCart(product)}>
            Add to Cart
          </button>

          <Link to="/products" className="back-link">
            ← Back to Products
          </Link>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;
