const Question = require('../models/question');

// GET all questions
exports.getQuestions = async (req, res) => {
  const questions = await Question.find();
  res.json(questions);
};

// POST a new question
exports.createQuestion = async (req, res) => {
  const { question, options, correctAnswer } = req.body;
  const newQuestion = new Question({ question, options, correctAnswer });
  await newQuestion.save();
  res.status(201).json(newQuestion);
};
