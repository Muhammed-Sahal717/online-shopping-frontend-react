# React Online Shopping Frontend

A simple online shopping frontend application built with React to practice routing, state management, React Hooks, form handling, and component-based development.

## Features

- Responsive navigation bar
- Home page
- Products page with 5 products
- Product details page
- Dynamic product routing
- Add products to cart
- Remove products from cart
- Shopping cart total calculation
- Empty cart message
- Checkout form
- Form validation
- Multiple payment methods
- Order success message
- Automatic redirect after placing an order
- 404 page for invalid routes
- Responsive design

## Technologies Used

- React
- JavaScript
- HTML
- CSS
- React Router DOM
- React Hooks

## Project Structure

```text
src/
├── App.jsx
├── App.css
├── main.jsx
│
├── components/
│   └── Navbar.jsx
│
└── pages/
    ├── Home.jsx
    ├── Products.jsx
    ├── ProductDetails.jsx
    ├── Cart.jsx
    ├── Checkout.jsx
    └── NotFound.jsx
```

## Getting Started

Clone the repository:

```bash
git clone <repository-url>
cd online-shopping
```

Install dependencies:

```bash
npm install
```

Install React Router:

```bash
npm install react-router-dom
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in the terminal.

## React Concepts Used

- Functional components
- Component-based architecture
- Props
- `useState`
- `useParams`
- `useNavigate`
- Controlled form components
- Event handling
- Conditional rendering
- Dynamic rendering with `.map()`
- Array methods such as `filter()` and `reduce()`
- Client-side routing

## Purpose

This project was created as a learning mini project to practice building a multi-page-style shopping application with React and understand the fundamentals of routing, state management, form handling, and reusable components.
