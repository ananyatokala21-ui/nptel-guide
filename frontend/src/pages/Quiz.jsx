import { useParams } from "react-router-dom";
import { courses } from "../data/courses";

function Quiz() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === Number(id));

  if (!course) {
    return <h1 className="page">Quiz not found</h1>;
  }

  return (
    <div className="page">
      <h1>{course.courseName} - Quiz</h1>

      {course.quiz.length === 0 ? (
        <p>No quiz added yet.</p>
      ) : (
        course.quiz.map((q, index) => (
          <div className="resource-box" key={index}>
            <h3>{index + 1}. {q.question}</h3>
            {q.options.map((option, i) => (
              <p key={i}>• {option}</p>
            ))}
            <p><b>Answer:</b> {q.answer}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Quiz;