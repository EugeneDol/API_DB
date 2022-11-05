const express = require('express');
const router = express.Router();

const answerController = require('../controllers/answer.controller.js');

//get all answers
router.get('/', answerController.getAnswerslist);

//get answer by id
router.get('/:id', answerController.getAnswerById)

//create new answer record
router.post('/', answerController.createNewAnswer)

//update answer record
router.patch('/:id', answerController.updateAnswer);

//delete answer record
router.delete('/:id', answerController.deleteAnswer);

module.exports = router;