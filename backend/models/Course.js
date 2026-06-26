const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      required: true,
    },

    courseCode: {
      type: String,
      required: true,
      unique: true,
    },

    category: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    instructor: {
      type: String,
      default: "NPTEL",
    },

    duration: {
      type: String,
      default: "12 Weeks",
    },

    difficulty: {
      type: String,
      default: "Beginner",
    },

    thumbnail: {
      type: String,
      default: "",
    },

    youtubeLinks: [
      {
        title: String,
        url: String,
      },
    ],

    notes: [
      {
        title: String,
        pdfUrl: String,
      },
    ],

    previousPapers: [
      {
        year: Number,
        pdfUrl: String,
      },
    ],

    modelPapers: [
      {
        title: String,
        pdfUrl: String,
      },
    ],

    quizzes: [
      {
        question: String,
        options: [String],
        answer: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", courseSchema);