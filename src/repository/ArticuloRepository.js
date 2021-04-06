const Articulo = require("../entities/Articulo");

class ArticuloRepository {
  async findArticleById(id) {
    const articulo = Articulo.find({ id: id });
    return articulo;
  }

  async saveArticle(articulo) {
    const article = new Articulo(articulo);
    await article.save();
    return article;
  }

  async findAllArticles() {
    const articulos = await Articulo.find({});

    return articulos;
  }
}

module.exports = ArticuloRepository;
