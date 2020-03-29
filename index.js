// const express = require("express");
// var cors = require("cors");
// const mongoose = require("mongoose");
// const cookieSession = require("cookie-session");
// const passport = require("passport");
// const bodyParser = require("body-parser");
// const keys = require("./config/keys");
// const logger = require("morgan");

// require("./models/Article");
// require("./models/User");
// require("./services/passport");

// const app = express();

// app.use(cors());
// app.use(express.json());

// mongoose.connect(keys.mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });
// let connection = mongoose.connection;

// app.use(bodyParser.json());
// app.use(
//   cookieSession({
//     maxAge: 30 * 24 * 60 * 60 * 1000,
//     keys: [keys.cookieKey]
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

// require("./routes/authRoutes")(app);

// // (optional) only made for logging and
// // bodyParser, parses the request body to be a readable json format
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(logger("dev"));

// const articlesRouter = require("./routes/articleListRoutes");
// app.use("/articles", articlesRouter);

// if (process.env.NODE_ENV == "production") {
//   app.use(express.static("client/build"));
//   const path = require("path");
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

// const PORT = process.env.PORT || 5000;
// app.listen(PORT);

const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
require("./models/Article");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/articleListRoutes")(app);

// app.use(cors());
// app.use("/myarticles", articlesRouter);

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
