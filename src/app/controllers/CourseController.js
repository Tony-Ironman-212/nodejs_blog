const Course = require('../models/Course');

class CourseController {
  // [GET] /courses/:slug
  show(req, res, next) {
    const slug = req.params.slug;
    Course.findOne({ slug })
      .lean()
      .then((course) => {
        res.render('./courses/show', {
          title: 'Example App: Courses',
          course,
        });
      })
      .catch(next);
  }

  // [GET] /courses/create
  create(req, res, next) {
    res.render('./courses/create', {
      title: 'Example App: Create Course',
    });
  }

  // [POST] /courses/store
  store(req, res, next) {
    const formData = req.body;
    formData.image = `http://i3.ytimg.com/vi/${formData.videoId}/hqdefault.jpg`;
    const course = new Course(formData);
    course
      .save()
      .then(() => {
        res.redirect('/');
      })
      .catch(next);
  }

  // [GET] /courses/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .lean()
      .then((course) => {
        res.render('./courses/edit', {
          title: 'Example App: Edit Course',
          course,
        });
      })
      .catch(next);
  }

  // [DELETE] /courses/:id
  destroy(req, res, next) {
    Course.delete({ _id: req.params.id }) //soft delete
      .then(() => {
        res.redirect('/me/stored/courses');
      })
      .catch(next);
  }

  // [DELETE] /courses/:id/force
  forceDestroy(req, res, next) {
    Course.deleteOne({ _id: req.params.id }) //hard delete
      .then(() => {
        res.redirect('/me/trash/courses');
      })
      .catch(next);
  }

  // [PATCH] /courses/:id/restore
  restore(req, res, next) {
    Course.restore({ _id: req.params.id }) //restore
      .then(() => {
        res.redirect('/me/trash/courses');
      })
      .catch(next);
  }

  // [PUT] /courses/:id
  update(req, res, next) {
    const formData = req.body;
    formData.image = `http://i3.ytimg.com/vi/${formData.videoId}/hqdefault.jpg`;
    Course.updateOne({ _id: req.params.id }, formData)
      .then(() => {
        res.redirect('/me/stored/courses');
      })
      .catch(next);
  }

  //[POST] /courses/handle-form-action
  handleFormAction(req, res, next) {
    switch (req.body.action) {
      case 'delete':
        Course.delete({ _id: { $in: req.body.courseIds } }) //soft delete
          .then(() => {
            res.redirect('/me/stored/courses');
          })
          .catch(next);
        break;
      default:
        res.json({ message: 'Action is invalid' });
    }
  }
}

module.exports = new CourseController();
