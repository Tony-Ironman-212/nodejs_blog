const Course = require('../models/Course');

class SiteController {
  // [GET] /
  index(req, res, next) {
    Course.find()
      .lean()
      .then((courses) => {
        res.render('home', {
          title: 'Example App - Home',
          courses,
        });
      })
      .catch(next);
  }

  // [GET] /search
  search(req, res) {
    res.render('search', { title: 'Example App' });
  }
}

module.exports = new SiteController();
