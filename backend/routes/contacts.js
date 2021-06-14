const express = require("express");
const { check, validationResult } = require("express-validator");

const contactsController = require("../controllers/contacts");
const auth = require("../middleware/auth");

const router = express.Router();

// @route         GET api/contacts
// @description   Get all user's contacts
// @access        Private
router.get("/", auth, contactsController.getContacts);

// @route         POST api/contacts
// @description   Add new contacts
// @access        Private
router.post(
  "/",
  [auth, [check("name", "Name is required").not().isEmpty()]],
  contactsController.addContact
);

// @route         PUT api/contacts
// @description   Update contact
// @access        Private
router.put("/:id", auth, contactsController.updateContact);

// @route         Delete api/contacts
// @description   Delete contact
// @access        Private
router.delete("/:id", auth, contactsController.deleteContact);

module.exports = router;
