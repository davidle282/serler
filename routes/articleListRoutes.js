const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const Article = mongoose.model("col_articles");

module.exports = app => {
  app.get("/api/myarticles", requireLogin, async (req, res) => {
    const articles = await Article.find({
      article_posted_by: req.user._id
    });
    res.send(articles);
  });

  // app.get("/api/detail/:id", async (req, res) => {
  //   const articles = await Article.findById(req.params.id);
  //   res.send(articles);
  // });

  app.get("/api/detail/:id", (req, res) => {
    let id = req.params.id;
    Article.findById(id, function(err, article) {
      res.json(article);
    });
  });

  // aRouter.route("/detail/:id").get(function(req, res) {
  //   let id = req.params.id;
  //   article.findById(id, function(err, article) {
  //     res.json(article);
  //   });
  // });

  app.delete("/api/delete/:id"),
    async (req, res, next) => {
      Article.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.status(200).json({
            msg: data
          });
        }
      });
    };
};
