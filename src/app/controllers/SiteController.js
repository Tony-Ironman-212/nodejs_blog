class SiteController {
  // [GET] /
  index(req, res) {
    const userName = req.query.name || 'Guest';
    const userHobby = req.query.hobby || 'Unknown';
    res.render('home', { title: 'Example App', userName, userHobby });
  }

  // [GET] /search
  search(req, res) {
    res.render('search', { title: 'Example App' });
  }
}

module.exports = new SiteController();
