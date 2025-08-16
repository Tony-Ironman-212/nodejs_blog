// thêm template để làm route cho /courses
const express = require('express');
const router = express.Router();

// thêm meController
const meController = require('../app/controllers/MeController');

router.get('/stored/courses', meController.storedCourses);
router.get('/stored/news', meController.storedNews);

router.get('/trash/courses', meController.trashCourses);

module.exports = router;
