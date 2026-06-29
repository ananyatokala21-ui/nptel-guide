import { useParams } from "react-router-dom";
import { courses } from "../data/courses";

function NotesPage() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === Number(id));

  return (
    <div className="page">
      <h1>{course.courseName} - Notes</h1>

      {course.notes.length === 0 ? (
        <p>No notes added yet.</p>
      ) : (
        course.notes.map((note, index) => (
          <div className="resource-box" key={index}>
            <h3>{note.title}</h3>
            <a href={note.url} target="_blank">Open Notes</a>
          </div>
        ))
      )}
    </div>
  );
}

export default NotesPage;