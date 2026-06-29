import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import branches from "../data/courses";
import "../styles/Home.css";

function Courses() {
  const location = useLocation();

  const defaultBranch =
    branches.find((branch) => branch.id === location.state?.selectedBranchId) ||
    null;

  const [selectedBranch, setSelectedBranch] = useState(defaultBranch);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courseSearch, setCourseSearch] = useState("");

  const filteredCourses = selectedBranch
    ? selectedBranch.courses.filter((course) =>
        course.toLowerCase().includes(courseSearch.toLowerCase())
      )
    : [];

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

      {!selectedBranch && !selectedCourse && (
        <section className="branches-section">
          <div className="section-header">
            <h2>Choose a Branch</h2>
            <p>Select a branch to view all related courses.</p>
          </div>

          <div className="card-grid">
            {branches.map((branch) => (
              <div
                className="glass-card"
                key={branch.id}
                onClick={() => {
                  setSelectedBranch(branch);
                  setCourseSearch("");
                }}
              >
                <h3>{branch.name}</h3>
                <span className="branch-badge">{branch.short}</span>
                <p>{branch.courses.length} Courses</p>
                <button className="view-btn">View Courses →</button>
              </div>
            ))}
          </div>
        </section>
      )}

      {selectedBranch && !selectedCourse && (
        <section className="branches-section">
          <button
            className="back-btn"
            onClick={() => {
              setSelectedBranch(null);
              setSelectedCourse(null);
              setCourseSearch("");
            }}
          >
            ← Back to Branches
          </button>

          <div className="section-header">
            <h2>{selectedBranch.name}</h2>
            <p>Choose a course to view resources.</p>
          </div>

          <input
            className="search-box course-search"
            placeholder={`Search ${selectedBranch.short} courses...`}
            value={courseSearch}
            onChange={(e) => setCourseSearch(e.target.value)}
          />

          <div className="card-grid">
            {filteredCourses.map((course, index) => (
              <div
                className="glass-card"
                key={index}
                onClick={() => setSelectedCourse(course)}
              >
                <h3>{course}</h3>
                <span className="branch-badge">{selectedBranch.short}</span>
                <p>Videos • PYQs • Model Papers • Quiz</p>
                <button className="view-btn">View Course →</button>
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <p className="no-results">No course found in this branch.</p>
          )}
        </section>
      )}

      {selectedCourse && (
        <section className="course-details">
          <button className="back-btn" onClick={() => setSelectedCourse(null)}>
            ← Back to Courses
          </button>

          <h1>{selectedCourse}</h1>

          <p>
            Complete learning resources for {selectedCourse}. This page includes
            course information, YouTube lecture links, previous year question
            papers, model papers, quizzes and reference books.
          </p>

          <div className="resource-grid">
            <div className="resource-card">
              <h3>ℹ️ Course Info</h3>
              <p>
                Course Name: {selectedCourse}
                <br />
                Branch: {selectedBranch.name}
                <br />
                Platform: NPTEL
                <br />
                Type: Online Certification Course
              </p>
            </div>

            <div className="resource-card">
              <h3>📺 YouTube Links</h3>
              <a
                href={`https://www.youtube.com/results?search_query=NPTEL ${selectedCourse}`}
                target="_blank"
                rel="noreferrer"
              >
                Open NPTEL {selectedCourse} Videos
              </a>
            </div>

            <div className="resource-card">
              <h3>📄 Previous Year Questions</h3>
              <p>PYQs will be uploaded here.</p>
              <button className="view-btn">View PYQs</button>
            </div>

            <div className="resource-card">
              <h3>📝 Model Papers</h3>
              <p>Model papers will be uploaded here.</p>
              <button className="view-btn">View Model Papers</button>
            </div>

            <div className="resource-card">
              <h3>❓ Quizzes</h3>
              <p>Practice quiz questions for this course.</p>
              <button className="view-btn">Start Quiz</button>
            </div>

            <div className="resource-card">
              <h3>📚 Reference Books</h3>
              <p>Reference books and suggested reading material.</p>
              <button className="view-btn">View Books</button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Courses;