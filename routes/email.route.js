const express = require("express");
const router = express.Router();

const Email = require("../controllers/sendEmail.controller");
const email = new Email();

/* Creating a route for the post request. */
router.post("/", email.send);
router.post("/send2/", email.send2);

module.exports = router;
