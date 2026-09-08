import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          ShopEasy
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>

          <Link to="/products">Products</Link>

          <Link to="/cart">Cart ({cartCount})</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
