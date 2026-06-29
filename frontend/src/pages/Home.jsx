import { useState } from "react";
import { Link } from "react-router-dom";
import { courses } from "../data/courses";

import ouLogo from "../assets/ouLogo.jpg";
import otbiLogo from "../assets/otbiLogo.jpg";

function Home() {
  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.courseName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">

      <section className="hero">

        <div className="hero-left">

          <h1>NPTEL Course Companion</h1>

          <p>
            Find videos, notes, previous year question papers,
            model papers and quizzes for all courses.
          </p>

          <input
            type="text"
            placeholder="Search for a course..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        <div className="hero-right">

          <h3>Powered By</h3>

          <img src={ouLogo} alt="OU Logo" />

          <img src={otbiLogo} alt="OTBI Logo" />

        </div>

      </section>

      <h2>All Courses</h2>

      <div className="course-grid">

        {filteredCourses.map((course) => (

          <Link
            key={course.id}
            to={`/course/${course.id}`}
            className="course-card"
          >

            <h3>{course.courseName}</h3>

            <p>{course.description}</p>

            <b>{course.category}</b>

          </Link>

        ))}

      </div>

    </div>
  );
}

export default Home;