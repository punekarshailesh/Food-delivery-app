const express = require("express");

const router = express.Router();

const User = require("../models/User");

const { body, validationResult } = require("express-validator");

// jwt
const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs"); // for hashing the password

const jwtSecret = "PornimaMarotiMadnePadminbaiDattatrayMadne"


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


// login
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

      const pwdCompare = await bcrypt.compare(req.body.password, user_data.password);
      if(!pwdCompare) {
        return res
          .status(400)
          .json({ errors: "Try logging with correct credentials" });
      }

      // for authentication token we are using id 
      const data = {
        user: {
          id: user_data.id,
        },
      };

      const authToken = jwt.sign(data, jwtSecret);
      return res.json({ success: true,  authToken : authToken });
      // })

      // res.json({ success: true });
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
