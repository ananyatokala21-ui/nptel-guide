import { useParams } from "react-router-dom";
import { courses } from "../data/courses";

function PreviousPapersPage() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === Number(id));

  return (
    <div className="page">
      <h1>{course.courseName} - Previous Year Questions</h1>

      {course.previousPapers.length === 0 ? (
        <p>No PYQs added yet.</p>
      ) : (
        course.previousPapers.map((paper, index) => (
          <div className="resource-box" key={index}>
            <h3>{paper.title}</h3>
            <a href={paper.url} target="_blank">Open Paper</a>
          </div>
        ))
      )}
    </div>
  );
}

export default PreviousPapersPage;