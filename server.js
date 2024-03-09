//imports
require('dotenv').config()

//external
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const path = require("path");
const port = 8080;
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
//internal
const {users} = require("./data/users");
const { authenticate, getUserByEmail } = require("./helper/helpers");

// view engine
app.set("view engine", "ejs");

// middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: "session",
    keys: ["trees and birds look so beautiful"],
  })
);

// Good example on when to use non-encrypted cookies
app.use((req, res, next) => {
    res.cookie("lastVisitedIn", JSON.stringify(new Date()))
    next();
})


//Routes
//GET
app.get("/", (req, res) => {
  const error = req.session?.loginStatus?.error;
  res.render("app", { error });
});

app.get("/winners", (req, res) => {
    const email = req.session?.loginStatus?.email
    const {user} = getUserByEmail(users,email)

    if(!email){
        res.redirect('/')
    }

  res.render("winners", {user});
});

app.get("/add", (req, res) => {
  res.render("add");
});

// common way to find routes in real world applications
app.get("/api/users", (req, res) => {
    return res.json(users)
})

//POST
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const loginStatus = authenticate(users, email, password);

  if (!loginStatus.error) {
    req.session.loginStatus = loginStatus
    res.redirect("/winners");
  }

  if (loginStatus.error) {
    req.session.loginStatus = loginStatus;
    res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
