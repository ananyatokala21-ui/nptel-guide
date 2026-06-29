import { Link, useParams } from "react-router-dom";
import { courses } from "../data/courses";

function CourseDetails() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === Number(id));

  if (!course) {
    return <h1 className="page">Course not found</h1>;
  }

  return (
    <div className="page">
      <h1>{course.courseName}</h1>
      <p>{course.description}</p>
      <p><b>Category:</b> {course.category}</p>

      <div className="section-grid">
        <Link to={`/course/${course.id}/youtubeLinks`} className="section-card">
          <h2>🎥 YouTube Videos</h2>
          <p>Open video resources</p>
        </Link>

        <Link to={`/course/${course.id}/notes`} className="section-card">
          <h2>📝 Notes</h2>
          <p>Open course notes</p>
        </Link>

        <Link to={`/course/${course.id}/previousPapers`} className="section-card">
          <h2>📄 Previous Year Questions</h2>
          <p>Open PYQs</p>
        </Link>

        <Link to={`/course/${course.id}/modelPapers`} className="section-card">
          <h2>📋 Model Papers</h2>
          <p>Open model papers</p>
        </Link>

        <Link to={`/course/${course.id}/quiz`} className="section-card">
          <h2>❓ Quiz</h2>
          <p>Practice quiz questions</p>
        </Link>
      </div>
    </div>
  );
}

export default CourseDetails;