
const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const loginController = {

  getLoginPage: (req, res) => {
    res.render("login.ejs");
  },

  submitLogin: async (req, res) => {

    const { email, password } = req.body;


    if (!(email && password)) {
      res.status(400).send("All input is required");
    }

 
    const user = await userModel.fetchUserByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {

      const token = await jwt.sign(
        { email: user.email, objectID: user._id },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );


      res.cookie("token", token, {
        maxAge: 2 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true,
        sameSite: 'none'
      }); 

      res.redirect("/");
    } else {
      res.status(400).send("Invalid Credentials");
    }
  },
};

module.exports = loginController;
