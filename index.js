const mongoose = require("mongoose");
const express = require("express");
const config = require("./config");
const app = express();
const user = require("./controller/usuario.controller");
require("dotenv").config;
const MONGO = config.module.MONGO;

app.use(express.json());

(async () => {
  await mongoose.connect(MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = await mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    console.log("poniendo a correr mongo desde node, vamos!!!");
  });

  app.get("/obtenerUsuarios", user.GetUsers);

  app.post("/crearUsuario", user.createUser);

  app.put("/actualizarUsuario/:id", user.updateUser);

  app.delete("/eliminarUsuario/:id", user.deleteUser);

  app.listen(3000, () => {
    console.log("escuchando en el puerto " + 3000);
  });
})();
