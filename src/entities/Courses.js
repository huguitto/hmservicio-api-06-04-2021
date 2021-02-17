const mongoose = require("mongoose");

//Schema define la estrucutra de la base de datos

const cursosSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    precio: {
      type: String,
    },
    tags: {
      type: String,
    },
    category: {
      type: String,
    },
    image_url: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = mongoose.model("cursos", cursosSchema);
