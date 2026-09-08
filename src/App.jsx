import { useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((currentCart) => {
            const existingProduct = currentCart.find(
                (item) => item.id === product.id
            );

            if (existingProduct) {
                return currentCart;
            }

            return [...currentCart, product];
        });
    };

    const removeFromCart = (productId) => {
        setCart((currentCart) =>
            currentCart.filter(
                (item) => item.id !== productId
            )
        );
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <BrowserRouter>

            <Navbar cartCount={cart.length} />

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/products"
                    element={
                        <Products
                            addToCart={addToCart}
                        />
                    }
                />

                <Route
                    path="/product/:id"
                    element={
                        <ProductDetails
                            addToCart={addToCart}
                        />
                    }
                />

                <Route
                    path="/cart"
                    element={
                        <Cart
                            cart={cart}
                            removeFromCart={removeFromCart}
                        />
                    }
                />

                <Route
                    path="/checkout"
                    element={
                        <Checkout
                            cart={cart}
                            clearCart={clearCart}
                        />
                    }
                />

                <Route
                    path="*"
                    element={<NotFound />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;