const express = require("express");
const { check, validationResult } = require("express-validator");

const authController = require("../controllers/auth");
const auth = require("../middleware/auth");

const router = express.Router();

// @route         POST api/auth
// @description   Register a user
// @access        Public
router.post(
  "/",
  [
    check("name", "Please add name").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  authController.signup
);

// @route         GET api/auth
// @description   Log in user
// @access        Public
router.post(
  "/login",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  authController.login
);

// @route         GET api/auth
// @description   Get logged in user
// @access        Private
router.get("/", auth, authController.getLoggedInUser);

module.exports = router;
