const express = require("express");

const router = express.Router();

const {
  getAllCourses,
  getCourseById,
  searchCourses,
} = require("../controllers/courseController");

// Get all courses
router.get("/", getAllCourses);

// Search courses
router.get("/search", searchCourses);

// Get single course
router.get("/:id", getCourseById);

module.exports = router;