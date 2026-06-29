import { useParams } from "react-router-dom";
import { courses } from "../data/courses";

function ModelPapersPage() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === Number(id));

  return (
    <div className="page">
      <h1>{course.courseName} - Model Papers</h1>

      {course.modelPapers.length === 0 ? (
        <p>No model papers added yet.</p>
      ) : (
        course.modelPapers.map((paper, index) => (
          <div className="resource-box" key={index}>
            <h3>{paper.title}</h3>
            <a href={paper.url} target="_blank">Open Model Paper</a>
          </div>
        ))
      )}
    </div>
  );
}

export default ModelPapersPage;