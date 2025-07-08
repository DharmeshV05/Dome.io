import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/Sign.css"; // Adjust the path as necessary

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }
    console.log("Login submitted:", formData);
    navigate("/dashboard");
  };

  return (
    <main className="container">
      <section className="form-container" aria-labelledby="login-title">
        <h2 id="login-title">Log In to Dome.io</h2>
        {error && <p className="error" role="alert">{error}</p>}
        <form onSubmit={handleSubmit} aria-describedby="login-desc">
          <p id="login-desc" className="sr-only">
            Enter your email and password to log in.
          </p>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Log In</button>
        </form>
        <p className="form-footer">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </section>
    </main>
  );
};

export default Login;