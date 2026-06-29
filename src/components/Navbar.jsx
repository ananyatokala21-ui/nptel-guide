import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">NPTEL Guide</Link>

      <div>
        <Link to="/">Home</Link>
        <Link to="/">Courses</Link>
        <Link to="/">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;