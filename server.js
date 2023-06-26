if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const app = express();

require("dotenv").config();

const mongoString = process.env.DATABASE_URI;

mongoose.connect(mongoString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const loginRouter = require("./server/router/login");
const registerRouter = require("./server/router/register");
const logoutRouter = require("./server/router/logout");
const dashboardRouter = require("./server/router/dashboard");
const searchRouter = require("./server/router/search");
app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use("/logout", logoutRouter);
app.use("/", dashboardRouter);
app.use("/search",searchRouter);
app.listen(process.env.PORT || 4000);
