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
const { authenticate, getUserByEmail } = require("./helper/helpers");
const {users} = require("./data/users")

// view engine
app.set("view engine", "ejs");

// middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieSession({
  name: 'session',
  keys: ["sometimes live coding is tricky"],
}))

//Routes
//GET
app.get("/", (req, res) => {
  res.render("app", {error: undefined});
});

app.get("/winners", (req, res) => {
  const email = req.session?.loginStatus?.email
  const {userInfo} = getUserByEmail(users, email)

  res.render("winners", {user: userInfo});
});

app.get("/add", (req, res) => {
  res.render("add");
});


//POST
app.post("/login", (req, res) => {
  const {email, password} = req.body
  // const email = req.body.email
  // const password = req.body.password

  const loginStatus = authenticate(users,email, password)

  // if error
  if(loginStatus.error){
    req.session.loginStatus = loginStatus
    res.redirect("/")
  }

  // if we don't have an error
  if(!loginStatus.error){
    req.session.loginStatus = loginStatus
    res.redirect("/winners")

  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
