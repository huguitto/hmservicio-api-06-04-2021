const cors = require("cors");
const express = require("express");
const routes = require("./src/routes");
const limiter = require("./src/limiter");
const bodyParser = require("body-parser");
const Conection = require("./src/database/conection");
const AppError = require("./src/error");

const conection = new Conection();
const app = express();

conection.conectToDataBase();

app.use((err, request, response, next) => {
  ///si o err é uma instancia da classe app error quer dizer que é meu
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }
  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
}); //MIDDLEWARE pra tratar erros

app.use(limiter);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes());

module.exports = app;
