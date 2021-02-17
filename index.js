const app = require("./api");

app.listen(process.env.PORT || 4000, () => {
  console.log("Servidor activo en la puerta: ", process.env.PORT || 4000);
});
