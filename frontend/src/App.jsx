import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CourseDetails from "./pages/CourseDetails";
import ResourcePage from "./pages/ResourcePage";
import Quiz from "./pages/Quiz";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/course/:id/:type" element={<ResourcePage />} />
        <Route path="/course/:id/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;