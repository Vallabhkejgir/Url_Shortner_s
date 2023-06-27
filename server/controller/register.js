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

  const { email, password } = req.body;

  if (!(email && password)) {
    return res.status(400).send("All input is required");
  }

  const oldUser = await userModel.fetchUserByEmail(email);
  if (oldUser) {
    return res.status(409).send("User Already Exist. Please Login");
  }

  const hashPassword = await bcrypt.hash(password, 10);


  const newUser = userModel.registerUser(email, hashPassword);
  if (newUser) {
    res.redirect("/login");
  } else {
    res.status(400).send("Some error occured");
  }
};
