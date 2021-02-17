const mongoose = require("mongoose");
class Conection {
  async conectToDataBase() {
    mongoose.Promise = global.Promise;
    try {
      mongoose.connect(
        "mongodb+srv://root:root@cluster0-t4baf.mongodb.net/hmcursos",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
        }
      );
      console.log("Conection succeed.");
    } catch (e) {
      console.log("Error database conection", e);
    }
  }
}
module.exports = Conection;
