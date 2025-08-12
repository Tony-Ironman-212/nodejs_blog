// thêm template để làm route cho /
const express = require('express');
const router = express.Router();

// thêm siteController
const siteController = require('../app/controllers/SiteController');

router.get('/', siteController.index);
router.get('/search', siteController.search);

module.exports = router;
