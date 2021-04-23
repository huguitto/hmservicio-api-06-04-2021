const mongoose = require("mongoose");

//Schema define la estrucutra de la base de datos

const ofertaSchema = mongoose.Schema(
  {
    titulo: {
      type: String,
    },
    fecha: {
      type: String,
    },
    description: {
      type: String,
    },
    precio: {
      type: String,
    },
    localidad: {
      type: String,
    },
    categoria: {
      type: String,
    },
    anunciante: {
      type: String,
    },
    telefono: {
      type: String,
    },
    tags: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = mongoose.model("ofertas", ofertaSchema);
