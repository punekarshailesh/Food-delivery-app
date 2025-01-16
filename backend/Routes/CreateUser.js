const express = require("express");

const router = express.Router();

const User = require("../models/User");

const { body, validationResult } = require("express-validator");

const bcrypt = require("bcryptjs"); // for hashing the password

router.post(
  "/createuser",
  [
    body("email", "Incorrect email").isEmail(),
    body("name").isLength({ min: 5 }),
    body("password", "Incorrect password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    //  validation thing
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt);
    try {
      // await is must
      await User.create({
        // taking user input -> name, password(Encrypt krenge (not yet encrypted)), email, location etc.
        name: req.body.name,
        password: secPassword,
        email: req.body.email,
        location: req.body.location,
      });

      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res
        .status(400)
        .json({
          success: false,
          errors: [{ msg: "An error occurred during user creation" }],
        });
    }
  }
);

router.post(
  "/loginuser",
  [
    body("email", "Incorrect email").isEmail(),
    // body("name").isLength({ min: 5 }),
    body("password", "Incorrect password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    //  validation thing
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;
    try {
      // await is must
      let user_data = await User.findOne({ email });
      if (!user_data) {
        return res
          .status(400)
          .json({ errors: "Try logging with correct credentials" });
      }

      if (req.body.password !== user_data.password) {
        return res
          .status(400)
          .json({ errors: "Try logging with correct credentials" });
      }

      return res.json({ success: true, user_data });
      // })

      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res
        .status(400)
        .json({
          success: false,
          errors: [{ msg: "An error occurred during user creation" }],
        });
    }
  }
);

module.exports = router;
