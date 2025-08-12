// thêm template để làm route cho /news
const express = require('express');
const router = express.Router();

// thêm newsController
const newsController = require('../app/controllers/NewsController');

router.get('/', newsController.index);
router.get('/:slug', newsController.show);

module.exports = router;
