//imports

//external
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const path = require("path");
const port = 8080;
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
//internal


// view engine
app.set("view engine", "ejs");

// middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(bodyparser.urlencoded({ extended: true }));

//Routes
//GET
app.get("/", (req, res) => {
  res.render("app", {error: undefined});
});

app.get("/winners", (req, res) => {
  const user = {category: 'none'}
  res.render("winners", {user});
});

app.get("/add", (req, res) => {
  res.render("add");
});


//POST


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
