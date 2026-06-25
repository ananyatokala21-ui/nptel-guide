const express = require("express");

const router = express.Router();

const {
  getAllCourses,
  getCourseById,
  searchCourses,
  addCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/courseController");

// Get all courses
router.get("/", getAllCourses);

// Add new course
router.post("/", addCourse);

// Search courses
router.get("/search", searchCourses);

// Get single course
router.get("/:id", getCourseById);

// Update course
router.put("/:id", updateCourse);

// Delete course
router.delete("/:id", deleteCourse);

module.exports = router;