const mongoose = require("mongoose");

const users = mongoose.model("users");

module.exports = app => {
  app.get("/api/users", (req, res) =>
    users.findAll().then(result => res.json(result))
  );
};
// module.exports = app => {
//   app.get("/api/users", async (req, res) => {
//     const users = await User.find((err, users) => {
//       if (err) return res.json({ success: false, error: err });
//     });
//     res.send(users);
//   });
// };

// userRouter.route("/users").get((req, res) => {
//   user.find((err, users) => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true, users: users });
//   });
// });

// set route to add data to database
// router.route("/add").post((req, res) => {
//   let addArticle = new article(req.body);
//   addArticle
//     .save()
//     .then(() => {
//       res.status(200).json({ addArticle: "article added" });
//     })
//     .catch(err => {
//       res.status(400).send("unable to save to database");
//     });
// });

// set route to get data by id from database
// userRouter.route("/profile/:id").get(function(req, res) {
//   let id = req.params.id;
//   user.findById(id, function(err, user) {
//     res.json(user);
//   });
// });

// module.exports = userRouter;
