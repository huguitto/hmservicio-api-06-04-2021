const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const articuloSchema = new Schema(
  {
    id: {
      type: String,
    },
    title: {
      type: String,
    },
    url_image: {
      type: String,
    },
    content: {
      type: String,
    },
    category: {
      type: String,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = mongoose.model("articulos", articuloSchema);
