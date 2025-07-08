import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login"
import Service from "./pages/Service";
import Blog from "./pages/Blog";
import Signup from "./pages/Signup";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";
import "./CSS/main-module.css";
import Details from "./pages/Details";
import BlogDetail from "./pages/BlogDetail";

function Loader() {
  return (
    <div className="loader-overlay">
      <div className="loader-content">
        <svg
          className="loader-logo-svg"
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="40" cy="40" r="36" stroke="#2eb8b8" strokeWidth="6" fill="#fff" />
          <text x="50%" y="54%" textAnchor="middle" fill="#e73c7e" fontSize="22" fontWeight="bold" fontFamily="Montserrat,Arial,sans-serif" dy=".3em">D</text>
          <circle cx="60" cy="20" r="6" fill="#e73c7e" />
        </svg>
        <div className="loader-spinner"></div>
        <div className="loader-title">Dome.io</div>
      </div>
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />
          <Route path="details" element={<Details />} />
          <Route path="services" element={<Service />} />
          <Route path="services/:id" element={<div>Service Detail Page (Coming Soon)</div>} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogDetail />} />
          <Route path="signup" element={<Signup />} />
          <Route path="thank-you" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }
    return this.props.children;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

export default App;