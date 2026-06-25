const Course = require("../models/Course");

// Get all courses
const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();

    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching courses",
      error: error.message,
    });
  }
};

// Get single course by ID
const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching course",
      error: error.message,
    });
  }
};

// Search courses
const searchCourses = async (req, res) => {
  try {
    const search = req.query.q;

    const courses = await Course.find({
      courseName: {
        $regex: search,
        $options: "i",
      },
    });

    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({
      message: "Error searching courses",
      error: error.message,
    });
  }
};

module.exports = {
  getAllCourses,
  getCourseById,
  searchCourses,
};