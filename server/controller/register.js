const express = require("express");
const bcrypt = require("bcrypt");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userModel = require("../models/user");

exports.registerPage = async(req,res) => {
    res.render("register.ejs");
}
exports.register = async (req, res) => {
  // Get user input
  const { email, password } = req.body;
  // Validate user input
  if (!(email && password)) {
    return res.status(400).send("All input is required");
  }
  // Validate if user exist in our database
  const oldUser = await userModel.fetchUserByEmail(email);
  if (oldUser) {
    return res.status(409).send("User Already Exist. Please Login");
  }
  //Encrypt user password
  const hashPassword = await bcrypt.hash(password, 10);

  // Create user in our database
  const newUser = userModel.registerUser(email, hashPassword);
  if (newUser) {
    res.redirect("/login");
  } else {
    res.status(400).send("Some error occured");
  }
};
