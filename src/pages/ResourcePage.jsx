import { useParams } from "react-router-dom";

function ResourcePage() {
  const { id, type } = useParams();

  return (
    <div className="page">
      <h1>Resource Page</h1>
      <p>Course ID: {id}</p>
      <p>Resource Type: {type}</p>
    </div>
  );
}

export default ResourcePage;