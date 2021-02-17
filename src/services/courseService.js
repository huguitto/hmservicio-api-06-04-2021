const CourseRepository = require("../repository/courseRepository");
const AppError = require("../error");
class CourseService {
  constructor() {
    this.courseRepository = new CourseRepository();
  }

  async findCoursesBySearch(search) {
    //devolver cursos uni
    const courses = await this.courseRepository.findBySearch(search);

    const uniqueCourses = this.giveUniqueCourses(courses);

    return uniqueCourses;
  }

  async saveCourseOnDataBase(course) {
    const { name } = course;
    const courseExists = await this.findCoursesBySearch(name);

    if (courseExists.length > 0) {
      throw new AppError("This course already exists.", 403);
    }

    const courseUnique = await this.courseRepository.newCourse(course);

    return courseUnique;
  }

  giveUniqueCourses(duplicateCourses) {
    let uniqueCourses = duplicateCourses.reduce((accumulator, currentValue) => {
      const existsIndex = accumulator.findIndex(
        (item) => item.name === currentValue.name
      );
      if (existsIndex === -1) {
        accumulator.push(currentValue);
      }
      return accumulator;
    }, []);

    return uniqueCourses;
  }
}
module.exports = CourseService;
