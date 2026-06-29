import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Login() {
  const [signup, setSignup] = useState(false);

  return (
    <div className="app-bg">
      <nav className="glass-navbar">
        <h2>NPTEL Guide</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>

      <div className="login-glass">
        <h1>{signup ? "Create Account" : "Login"}</h1>

        {signup && <input type="text" placeholder="Full Name" />}

        <input type="email" placeholder="Email Address" />

        <input
          type="password"
          placeholder={signup ? "Create Password" : "Password"}
        />

        <button className="primary-btn">
          {signup ? "Sign Up" : "Login"}
        </button>

        <p>
          {signup ? "Already have an account?" : "Don't have an account?"}
          <span onClick={() => setSignup(!signup)}>
            {signup ? " Login" : " Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;