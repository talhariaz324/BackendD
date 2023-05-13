const mongoose = require("mongoose");

const QnA = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
    // unique: true,
  },
  phone: {
    type: String,
    // maxlength: 11,
  },
  question: {
    type: String,
    // required: true,
  },
  answers: [{
    type: String,
    // required: true,
  },]
});

const QuestionAnswer = mongoose.model("QuestionAnswer", QnA);

module.exports = QuestionAnswer;
