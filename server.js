// Dependencies
// ==================================================

const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const flash = require('express-flash-messages')
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
const app = express();
const passportSetup = require("./config/passport");
const PORT = process.env.PORT || 3002;


// Middleware
// ==================================================

// // Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets
// app.use(express.static("client/build"));

// app.use(express.static("public"));

// Static assets for production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Cookie parser
app.use(cookieParser());
app.use(flash())
// app.use(expressValidator(middlewareOptions)); - is this needed?

// Express session
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 2592000000,
    httpOnly: false
  }
}));

// Connect to Mongoose
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://heroku_n5v16qw5:4ii9aboqrdu3lh7p1chvkg5is2@ds129045.mlab.com:29045/heroku_n5v16qw5");

// Init passport authentication 
app.use(passport.initialize());

// Persistent login sessions. Session expires after 6 months, or when deleted by user.
app.use(passport.session());

// enable CORS so that browsers don't block requests.
app.use((req, res, next) => {
  //access-control-allow-origin http://localhost:3000
  res.header('Access-Control-Allow-Origin', 'https://project3-test.herokuapp.com');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


// Routes
// ==================================================

// Authentication routes
const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);

// API routes
const apiRoutes = require("./routes");
app.use(apiRoutes);


// Start the API server
// ==================================================

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});