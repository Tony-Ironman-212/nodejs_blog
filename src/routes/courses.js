// thêm template để làm route cho /courses
const express = require('express');
const router = express.Router();

// thêm courseController
const courseController = require('../app/controllers/CourseController');

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:id/edit', courseController.edit);
router.delete('/:id', courseController.destroy);
router.delete('/:id/force', courseController.forceDestroy);
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore);
router.get('/:slug', courseController.show);

module.exports = router;
