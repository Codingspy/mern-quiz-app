const express = require('express');
const router = express.Router();
const {
  getQuestions,
  createQuestion,
} = require('../controllers/questionController');

router.get('/api/questions', getQuestions);
router.post('/api/questions', createQuestion);

module.exports = router;
// This code sets up the routes for handling questions in a quiz application.