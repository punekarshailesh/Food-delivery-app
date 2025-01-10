const express = require("express");

const router = express.Router();

const User = require("../models/User");

const { body, validationResult } = require("express-validator");

router.post(
  "/createuser",
  [
    body("email",'Incorrect email').isEmail(),
    body("name").isLength({ min: 5 }),
    body("password",'Incorrect password').isLength({ min: 5 }),
  ],
  async (req, res) => {
    //  validation thing
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // await is must
      await User.create({
        // taking user input -> name, password(Encrypt krenge (not yet encrypted)), email, location etc.
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        location: req.body.location,
      });

      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, errors: [{ msg: "An error occurred during user creation" }] });
    }
  }
);

module.exports = router;
