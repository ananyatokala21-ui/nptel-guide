import { useParams } from "react-router-dom";
import { courses } from "../data/courses";

function YoutubePage() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === Number(id));

  return (
    <div className="page">
      <h1>{course.courseName} - YouTube Videos</h1>

      {course.youtubeLinks.length === 0 ? (
        <p>No YouTube links added yet.</p>
      ) : (
        course.youtubeLinks.map((video, index) => (
          <div className="resource-box" key={index}>
            <h3>{video.title}</h3>
            <a href={video.url} target="_blank">Open Video</a>
          </div>
        ))
      )}
    </div>
  );
}

export default YoutubePage;