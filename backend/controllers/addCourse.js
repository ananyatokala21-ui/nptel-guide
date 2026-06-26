const Course = require("../models/Course");
const connectDB = require("../config/db");
require("dotenv").config();

connectDB();

const addCourse = async () => {
  try {
    const course = new Course({
      courseName: "Database Management Systems",
      courseCode: "DBMS",

      category: "Computer Science",

      description: "Complete DBMS course resources",

      instructor: "NPTEL",

      duration: "12 Weeks",

      difficulty: "Intermediate",

      thumbnail: "",

      youtubeLinks: [
        {
          title: "DBMS Playlist",
          url: "https://youtube.com"
        }
      ],

      notes: [],

      previousYearPapers: [],

      modelPapers: [],

      quizzes: []
    });

    await course.save();

    console.log("✅ Course Added");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

addCourse();