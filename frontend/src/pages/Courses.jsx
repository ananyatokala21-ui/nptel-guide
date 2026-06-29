import { Link } from "react-router-dom";
import { courses } from "../data/courses";

function Courses() {
  return (
    <div className="page">
      <h1>All Courses</h1>

      <div className="course-grid">
        {courses.map((course) => (
          <Link to={`/course/${course.id}`} className="course-card" key={course.id}>
            <h3>{course.courseName}</h3>
            <p>{course.description}</p>
            <span>{course.category}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Courses;