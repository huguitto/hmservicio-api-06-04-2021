const ArticleRepository = require("../repository/articleRepository");
const sanitizedHtml = require("sanitize-html");
const AppError = require("../error");

class ArticleService {
  constructor() {
    this.articleRepository = new ArticleRepository();
  }

  async sanitizeArticle(article) {
    const sanitizedArticle = {
      id: sanitizedHtml(article.id),
      title: sanitizedHtml(article.title),
      url_image: sanitizedHtml(article.url_image),
      content: sanitizedHtml(article.content),
      category: sanitizedHtml(article.category),
    };

    return sanitizedArticle;
  }

  async saveNewArticle(article) {
    const sanitizedArticle = await this.sanitizeArticle(article);

    const articleClean = await this.articleRepository.saveArticleOnDatabase(
      sanitizedArticle
    );
    return articleClean;
  }

  async listAll() {
    const articles = await this.articleRepository.listAllArticles();
    return articles;
  }

  async listArticleById(id) {
    const article = await this.articleRepository.listArticleById(id);

    if (article.length === 0) {
      throw new AppError("Article not found.", 404);
    }

    return article;
  }
}
module.exports = ArticleService;
