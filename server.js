const express = require("express");

const app = express();

const courses = [
  {
    id: 1,
    name: "DBMS",
    youtubeLinks: [
      "https://youtube.com/dbms1",
      "https://youtube.com/dbms2"
    ],
    previousPapers: [
      "DBMS_PYQ_2024.pdf",
      "DBMS_PYQ_2023.pdf"
    ],
    modelPapers: [
      "DBMS_Model_1.pdf",
      "DBMS_Model_2.pdf"
    ]
  },

  {
    id: 2,
    name: "Java Programming",
    youtubeLinks: [
      "https://youtube.com/java1"
    ],
    previousPapers: [
      "Java_PYQ_2024.pdf"
    ],
    modelPapers: [
      "Java_Model_1.pdf"
    ]
  }
];

app.get("/", (req, res) => {
  res.send("NPTEL Backend is Running!");
});

app.get("/courses", (req, res) => {
  res.json(courses);
});

app.get("/courses/:id", (req, res) => {

  const courseId = parseInt(req.params.id);

  const course = courses.find(
    c => c.id === courseId
  );

  if (!course) {
    return res.status(404).json({
      message: "Course not found"
    });
  }

  res.json(course);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});