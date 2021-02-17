const ArticleService = require("../services/articlesService");
const articleService = new ArticleService();

exports.saveArticleOnDatabasaInController = async (req, res) => {
  try {
    const article = await articleService.saveNewArticle(req.body);
    res.json(article);
  } catch (e) {
    res.status(e.statusCode).json(e);
  }
};

exports.listAllArticlesInController = async (req, res) => {
  try {
    const articles = await articleService.listAll();
    res.json(articles);
  } catch (e) {
    res.status(500).json(e);
  }
};

exports.listArticleById = async (req, res) => {
  const { id } = req.params;
  try {
    const article = await articleService.listArticleById(id);
    res.json(article);
  } catch (e) {
    res.status(e.statusCode).json(e);
  }
};
