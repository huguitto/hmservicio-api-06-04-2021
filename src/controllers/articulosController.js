const ArticuloService = require("../services/ArticuloService");

const articuloService = new ArticuloService();

exports.findArticleByIdInController = async (req, res) => {
  const { id } = req.params;
  const article = await articuloService.findArticuloByIdInService(id);
  res.json(article);
};

exports.findAllArticlesInController = async (req, res) => {
  const articles = await articuloService.allArticulosInService();
  res.json(articles);
};

exports.saveArticleInController = async (req, res) => {
  const article = await articuloService.saveArticleService(req.body);
  res.json(article);
};
