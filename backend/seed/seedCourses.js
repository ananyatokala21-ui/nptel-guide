const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connectDB = require("../config/db");
const Course = require("../models/Course");

dotenv.config();

connectDB();

const courses = [
  {
    courseName: "Database Management Systems",
    courseCode: "DBMS",
    category: "Computer Science",
    description: "Complete DBMS course resources",
    instructor: "NPTEL",
    duration: "12 Weeks",
    difficulty: "Intermediate",
    thumbnail: "",
    youtubeLinks: [],
    notes: [],
    previousPapers: [],
    modelPapers: [],
    quizzes: []
  },

  {
    courseName: "Java Programming",
    courseCode: "JAVA",
    category: "Computer Science",
    description: "Complete Java programming resources",
    instructor: "NPTEL",
    duration: "12 Weeks",
    difficulty: "Beginner",
    thumbnail: "",
    youtubeLinks: [],
    notes: [],
    previousPapers: [],
    modelPapers: [],
    quizzes: []
  },

  {
    courseName: "Operating Systems",
    courseCode: "OS",
    category: "Computer Science",
    description: "Operating Systems resources",
    instructor: "NPTEL",
    duration: "12 Weeks",
    difficulty: "Intermediate",
    thumbnail: "",
    youtubeLinks: [],
    notes: [],
    previousPapers: [],
    modelPapers: [],
    quizzes: []
  }
];

const importCourses = async () => {
  try {

    await Course.deleteMany();

    await Course.insertMany(courses);

    console.log("✅ Courses Imported Successfully");

    process.exit();

  } catch (error) {

    console.log(error);

    process.exit(1);

  }
};

importCourses();