import { useState } from "react";
import { Link } from "react-router-dom";
import branches from "../data/courses";
import "../styles/Home.css";

import otbiLogo from "../assets/otbiLogo.jpg";
import ouLogo from "../assets/ouLogo.jpg";

function Home() {
  const [search, setSearch] = useState("");

  const filteredBranches = branches.filter((branch) => {
    const branchMatch =
      branch.name.toLowerCase().includes(search.toLowerCase()) ||
      branch.short.toLowerCase().includes(search.toLowerCase());

    const courseMatch = branch.courses.some((course) =>
      course.toLowerCase().includes(search.toLowerCase())
    );

    return branchMatch || courseMatch;
  });

  return (
    <div className="app-bg">
      <nav className="glass-navbar">
        <div className="logo">
          <h2>NPTEL Guide</h2>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/login">Login / Register Now</Link>
        </div>
      </nav>

      <section className="hero-glass">
        <div className="hero-left">
          <div className="tag">🚀 Your Complete NPTEL Study Platform</div>

          <h1>NPTEL Course Companion</h1>

          <p>
            Access high-quality YouTube lectures, Notes, Previous Year Question
            Papers, Model Papers, Reference Books and Quizzes for all NPTEL
            courses in one place.
          </p>

          <input
            className="search-box"
            placeholder="Search 100+ Courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="hero-actions">
            <Link to="/courses">
              <button className="primary-btn">Explore Courses</button>
            </Link>
          </div>

          <div className="stats-row">
            <div className="stat-card">
              <h2>100+</h2>
              <p>Courses</p>
            </div>

            <div className="stat-card">
              <h2>{branches.length}</h2>
              <p>Branches</p>
            </div>

            <div className="stat-card">
              <h2>500+</h2>
              <p>Resources</p>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <h2>Powered By</h2>

          <div className="logo-glass">
            <img src={otbiLogo} alt="OTBI" />
          </div>

          <div className="logo-glass">
            <img src={ouLogo} alt="Osmania University" />
          </div>
        </div>
      </section>

      <section className="branches-section">
        <div className="section-header">
          <h2>Explore Branches</h2>
          <p>Select a branch to explore all available NPTEL courses.</p>
        </div>

        <div className="card-grid">
          {filteredBranches.map((branch) => (
            <Link
              key={branch.id}
              to="/courses"
              state={{ selectedBranchId: branch.id }}
              className="glass-card"
            >
              <h3>{branch.name}</h3>

              <span className="branch-badge">{branch.short}</span>

              <p>{branch.courses.length} Courses</p>

              <button className="view-btn">Explore →</button>
            </Link>
          ))}
        </div>

        {filteredBranches.length === 0 && (
          <p className="no-results">No branch or course found.</p>
        )}
      </section>
    </div>
  );
}

export default Home;