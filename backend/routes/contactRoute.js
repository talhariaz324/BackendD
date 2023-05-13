const express = require("express");
const router = express.Router();
const { contact, getAllContacts } = require("../controllers/contactController");
router.route("/contact").post(contact);
router.route("/admin/messages").get(getAllContacts);

module.exports = router;
