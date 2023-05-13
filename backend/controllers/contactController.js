const Contact = require("../models/contactModel");
const catchAsyncError = require("../middleware/catchAsyncError");
exports.contact = catchAsyncError(async (req, res, next) => {
  const { name, email, phone, message } = req.body;
  const contact = await Contact.create({
    name,
    email,
    phone,
    message,
  });
  res.status(201).json({
    success: true,
    contact,
  });
});

exports.getAllContacts = catchAsyncError(async (req, res, next) => {
  const contacts = await Contact.find();
  // console.log(contacts);
  res.status(200).json({
    success: true,
    contacts,
  });
});
