const express = require("express");
const router = express.Router();
const { question, getAllQuestions, updateQuestionAnswers } = require("../controllers/farmerQnA_controller");
router.route("/farmer-forum/create-question").post(question);
router.route("/farmer-forum/all-questions").get(getAllQuestions);
router.route("/farmer-forum/update-answers/:id").put(updateQuestionAnswers);

module.exports = router;
