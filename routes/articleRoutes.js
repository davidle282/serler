const router = require("express").Router();
const requireLogin = require("../middlewares/requireLogin");
const { Article } = require("../models/Article");

router.route("/").get((req, res) => {
  Article.find({ article_status: "Approved" }).exec((err, articles) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, articles: articles });
  });
});

router.get("/getMyArticles", requireLogin, (req, res) => {
  Article.find({
    article_posted_by: req.user._id,
  }).exec((err, articles) => {
    // if (err) return res.json({ success: false, error: err });
    // return res.json({ success: true, articles });
    if (err) return res.status(400).json({ success: false, err });
    res.status(200).json({ success: true, articles });
  });
});

// set route to add data to database
router.route("/add").post((req, res) => {
  let addArticle = new Article(req.body);
  addArticle
    .save()
    .then(() => {
      res.status(200).json({ addArticle: "article added" });
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
});

// set route to get data by id from database
router.get("/detail/:id", (req, res) => {
  let id = req.params.id;

  Article.findById(id, function (err, article) {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, article });
  });
});

router.put("/update/:id", requireLogin, (req, res) => {
  Article.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.json(data);
      }
    }
  );
});

router.delete("/delete/:id", (req, res) => {
  Article.findByIdAndRemove(req.params.id).exec((error, deletedItem) => {
    if (error) {
      res.send(error);
    }
    return res.json(deletedItem);
  });
});

module.exports = router;
