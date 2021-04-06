const express = require("express");
const router = express.Router();
const ofertaController = require("../controllers/ofertaController");
const articuloController = require("../controllers/articulosController");

module.exports = function () {
  router.get(
    "/api/search/:search",
    ofertaController.findOfertasBySearchInController
  );

  router.get("/api/all/ofertas", ofertaController.findAllOfertas);

  router.post("/api/publicar", articuloController.saveArticleInController);

  router.get("/api/articulos", articuloController.findAllArticlesInController);

  router.get(
    "/api/articulo/:id",
    articuloController.findArticleByIdInController
  );

  return router;
};
