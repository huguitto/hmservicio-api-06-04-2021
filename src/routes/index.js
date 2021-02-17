const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");
const articleController = require("../controllers/articleController");

module.exports = function () {
  router.get(
    "/api/search/:search",
    courseController.findCoursesBySearchInController
  );

  router.get("/api/articles", articleController.listAllArticlesInController);
  router.get("/api/article/:id", articleController.listArticleById);

  router.post(
    "/api/new-course",
    courseController.saveNewCourseInDatabaseInController
  );

  router.post(
    "/api/new-article",
    articleController.saveArticleOnDatabasaInController
  );

  return router;
};
