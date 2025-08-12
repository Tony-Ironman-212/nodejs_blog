class NewsController {
  // [GET] /news
  index(req, res) {
    res.render('news', {
      title: 'Example App: News',
    });
  }

  show(req, res) {
    const course = req.query.course;
    const price = req.query.price;
    res.render('news', {
      title: 'Example App: News',
      course,
      price,
    });
  }
}

module.exports = new NewsController();
