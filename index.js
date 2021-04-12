//https://hmservicios-api-06-04-2021.herokuapp.com/

const app = require("./api");

app.listen(process.env.PORT || 4000, () => {
  console.log("Servidor activo en la puerta: ", process.env.PORT || 4000);
});
