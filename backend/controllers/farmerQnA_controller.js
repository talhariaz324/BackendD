const QuestionAnswer = require("../models/farmerQnA_model");
const catchAsyncError = require("../middleware/catchAsyncError");
exports.question = catchAsyncError(async (req, res, next) => {
  const { name, email, phone, question } = req.body;
  const Question = await QuestionAnswer.create({
    name,
    email,
    phone,
    question,
  });
  res.status(201).json({
    success: true,
    Question,
  });
});

exports.getAllQuestions = catchAsyncError(async (req, res, next) => {
  const questions = await QuestionAnswer.find();
  // console.log(contacts);
  res.status(200).json({
    success: true,
    questions,
  });
});


// Update Question's Answers array

exports.updateQuestionAnswers= catchAsyncError(async (req, res, next) => {
    // We will add avatar etc later.
    // console.log("I am here")
    const newAnswer = {
    //   email: req.body.email,
    //   name: req.body.name,
      answers: req.body.answers
    };
  
    const updatedQuestion = await QuestionAnswer.findByIdAndUpdate(
      req.params.id, // in case of req.user.id,, it will update admin itself
      { $push: { answers: { $each: [newAnswer.answers] } } },
      {
        new: true, // new value true
        runValidators: true, // validate
        useFindAndModify: false, // This is false because by default mongodb do find and do some change maybe
      }
    );
  
    res.status(200).json({
      success: true,
      updatedQuestion,
    });
  });
