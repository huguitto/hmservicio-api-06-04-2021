const Courses = require("../entities/Courses");

class CourseRepository {
  async findBySearch(search) {
    const coursesFounded = await Courses.find({
      $or: [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
        { tags: { $regex: search, $options: "i" } },
        { url: { $regex: search, $options: "i" } },
        { image_url: { $regex: search, $options: "i" } },
        { url: { $regex: search, $options: "i" } },
      ],
    });

    return coursesFounded;
  }

  async newCourse(courseUnique) {
    const courseToSave = new Courses(courseUnique);
    try {
      await courseToSave.save();
      return courseToSave;
    } catch (e) {
      console.log("Error newCourse", e);
    }
  }
}

module.exports = CourseRepository;
