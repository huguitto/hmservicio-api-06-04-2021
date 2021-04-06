const OfertaService = require("../services/OfertaService");
const ofertaService = new OfertaService();

exports.findOfertasBySearchInController = async (req, res) => {
  const { search } = req.params;
  const ofertas = await ofertaService.findOfertasBySearch(search);
  res.json(ofertas);
};

exports.findAllOfertas = async (req, res) => {
  const ofertas = await ofertaService.allOfertasInService();
  res.json(ofertas);
};
