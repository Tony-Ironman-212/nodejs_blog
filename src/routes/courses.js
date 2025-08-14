// thêm template để làm route cho /courses
const express = require('express');
const router = express.Router();

// thêm courseController
const courseController = require('../app/controllers/CourseController');

router.get('/:slug', courseController.show);

module.exports = router;
