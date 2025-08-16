const Course = require('../models/Course');

class MeController {
  // [GET] /me/stored/courses
  storedCourses(req, res, next) {
    Course.find()
      .lean()
      .then((courses) => {
        res.render('me/stored-courses', {
          title: 'Example App: Stored Courses',
          courses,
        });
      })
      .catch(next);
  }

  // [GET] /me/trash/courses
  trashCourses(req, res, next) {
    Course.findWithDeleted({ deleted: true })
      .lean()
      .then((courses) => {
        res.render('me/trash-courses', {
          title: 'Example App: Trash Courses',
          courses,
        });
      })
      .catch(next);
  }

  // [GET] /me/stored/news
  storedNews(req, res, next) {
    res.render('me/stored-news', {
      title: 'Example App: Stored News',
    });
  }
}

module.exports = new MeController();
