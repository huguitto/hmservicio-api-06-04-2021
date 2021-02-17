const CourseService = require("../services/courseService");
const courseService = new CourseService();

exports.findCoursesBySearchInController = async (req, res) => {
  const { search } = req.params;
  const courses = await courseService.findCoursesBySearch(search);
  res.json(courses);
};

exports.saveNewCourseInDatabaseInController = async (req, res) => {
  const courseToSave = req.body;
  try {
    const courseSaved = await courseService.saveCourseOnDataBase(courseToSave);
    res.json(courseSaved);
  } catch (e) {
    res.status(e.statusCode).json(e);
  }
};
