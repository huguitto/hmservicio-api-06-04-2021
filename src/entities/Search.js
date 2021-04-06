const mongoose = require("mongoose");

//Schema define la estrucutra de la base de datos

const searchSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = mongoose.model("searches", searchSchema);
