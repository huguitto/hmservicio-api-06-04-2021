const Article = require("../entities/Articles");

class ArticleRepository {
  async saveArticleOnDatabase(article) {
    const articleToSave = new Article(article);
    try {
      await articleToSave.save();
      return articleToSave;
    } catch (e) {
      console.log("saveArticleOnDatabase ERROR", e);
    }
  }

  async listAllArticles() {
    const articles = await Article.find({});
    return articles;
  }

  async listArticleById(id_article) {
    const article = await Article.find({ id: id_article });
    return article;
  }
}
module.exports = ArticleRepository;
