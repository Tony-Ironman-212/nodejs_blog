const Course = require('../models/Course');

class CourseController {
  // [GET] /courses/:slug
  show(req, res, next) {
    const slug = req.params.slug;
    Course.findOne({ slug })
      .lean()
      .then((course) => {
        console.log(course);
        res.render('./courses/show', {
          title: 'Example App: Courses',
          course,
        });
      })
      .catch(next);
  }
}

module.exports = new CourseController();
