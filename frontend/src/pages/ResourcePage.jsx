import { useParams } from "react-router-dom";
import { courses } from "../data/courses";

function ResourcePage() {
  const { id, type } = useParams();
  const course = courses.find((c) => c.id === Number(id));

  if (!course) {
    return <h1 className="page">Course not found</h1>;
  }

  const data = course[type] || [];

  const titles = {
    youtubeLinks: "YouTube Videos",
    notes: "Notes",
    previousPapers: "Previous Year Questions",
    modelPapers: "Model Papers"
  };

  return (
    <div className="page">
      <h1>{course.courseName} - {titles[type]}</h1>

      {data.length === 0 ? (
        <p>No resources added yet.</p>
      ) : (
        data.map((item, index) => (
          <div className="resource-box" key={index}>
            <h3>{item.title}</h3>
            <a href={item.url} target="_blank">Open</a>
          </div>
        ))
      )}
    </div>
  );
}

export default ResourcePage;