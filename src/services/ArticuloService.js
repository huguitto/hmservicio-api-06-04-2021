const ArticuloRepository = require("../repository/ArticuloRepository");
const sanitizeHtml = require("sanitize-html");

class ArticuloService {
  constructor() {
    this.articuloRepository = new ArticuloRepository();
  }

  async saveArticleService(article) {
    const buildId = sanitizeHtml(article.title)
      .replace(/\?|\¡|\¿|\!/g, "")
      .trim()
      .replace(/ - /g, "")
      .replace(/ /g, "-")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    const sanitizedArticle = {
      id: buildId,
      title: sanitizeHtml(article.title),
      url_image: sanitizeHtml(article.url_image),
      content: sanitizeHtml(article.content),
      category: sanitizeHtml(article.category),
    };

    const articulo = await this.articuloRepository.saveArticle(
      sanitizedArticle
    );

    return articulo;
  }

  async findArticuloByIdInService(id) {
    const article = await this.articuloRepository.findArticleById(id);
    return article;
  }

  async allArticulosInService() {
    const articles = await this.articuloRepository.findAllArticles();
    return articles;
  }
}

module.exports = ArticuloService;
