const Oferta = require("../entities/Oferta");

class OfertaRepository {
  async findBySearch(search) {
    const ofertasFounded = await Oferta.find({
      $or: [
        { titulo: { $regex: search[0], $options: "i" } },
        { description: { $regex: search[0], $options: "i" } },
        { localidad: { $regex: search[0], $options: "i" } },
        { categoria: { $regex: search[0], $options: "i" } },
        { anunciante: { $regex: search[0], $options: "i" } },
        { url: { $regex: search[0], $options: "i" } },
      ],
    });

    return ofertasFounded;
  }

  async allOfertas() {
    const ofertas = await Oferta.find({});
    return ofertas;
  }
}

module.exports = OfertaRepository;
