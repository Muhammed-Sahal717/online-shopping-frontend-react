import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <section className="hero">
        <div>
          <h1>Welcome to Online Shopping</h1>

          <p>Find quality products at affordable prices.</p>

          <Link to="/products" className="button">
            Shop Now
          </Link>
        </div>
      </section>

      <section className="section">
        <h2>Why Shop With Us?</h2>

        <div className="features">
          <div className="feature-card">
            <h3>Quality Products</h3>
            <p>We offer carefully selected products.</p>
          </div>

          <div className="feature-card">
            <h3>Affordable Prices</h3>
            <p>Get great products at reasonable prices.</p>
          </div>

          <div className="feature-card">
            <h3>Easy Shopping</h3>
            <p>Simple and convenient online shopping.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
