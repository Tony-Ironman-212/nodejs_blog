const newsRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./courses');
const meRouter = require('./me');

function route(app) {
  // route site
  app.use('/', siteRouter);
  // route news
  app.use('/news', newsRouter);
  // route courses
  app.use('/courses', courseRouter);
  // route me
  app.use('/me', meRouter);
}

module.exports = route;
