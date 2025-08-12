const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
  // route site
  app.use('/', siteRouter);
  // route news
  app.use('/news', newsRouter);
}

module.exports = route;
