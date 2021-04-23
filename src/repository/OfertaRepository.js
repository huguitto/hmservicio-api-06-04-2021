const Oferta = require("../entities/Oferta");

class OfertaRepository {
  async findBySearch(searchWords) {
    searchWords = searchWords.map((word) => ({
      $regex: new RegExp(word, "i"),
    }));
    searchWords = searchWords.map((item) => {
      return item["$regex"];
    });

    const ofertasFounded = await Oferta.find({
      tags: { $all: searchWords },
    });

    return ofertasFounded;
  }

  async allOfertas() {
    const ofertas = await Oferta.find({});
    return ofertas;
  }
}

module.exports = OfertaRepository;
