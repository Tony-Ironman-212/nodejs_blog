const newsRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./courses');

function route(app) {
  // route site
  app.use('/', siteRouter);
  // route news
  app.use('/news', newsRouter);
  // route courses
  app.use('/courses', courseRouter);
}

module.exports = route;
