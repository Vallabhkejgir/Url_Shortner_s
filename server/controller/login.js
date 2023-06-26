// Login Controller
const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const loginController = {
  // GET request for the login page
  getLoginPage: (req, res) => {
    res.render("login.ejs");
  },

  // POST request for submitting the login form
  submitLogin: async (req, res) => {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }

    // Validate if user exists in our database
    const user = await userModel.fetchUserByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = await jwt.sign(
        { email: user.email, objectID: user._id },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      // Set the token as a cookie
      res.cookie("token", token, {
        maxAge: 2 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true,
        sameSite: 'none'
      }); // Expires in 2 hours

      res.redirect("/");
    } else {
      res.status(400).send("Invalid Credentials");
    }
  },
};

module.exports = loginController;
