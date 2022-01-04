const mongoose = require("mongoose");
const express = require("express");
const config = require("./config");
const app = express();
require("dotenv").config;
const MONGO = config.module.MONGO;

app.use(express.json());

(async () => {
  const Usuario = await require("./schema/schema");

  await mongoose.connect(MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = await mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    console.log("poniendo a correr mongo desde node, vamos!!!");
  });

  app.get("/obtenerUsuarios", async (req, res) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  });

  app.post("/crearUsuario", async (req, res) => {
    const {
      nombre,
      apellido,
      documento,
      correoElectronico,
      celular,
      fechaNacimiento,
    } = req.body;
    const NuevoUsuario = await new Usuario({
      nombre: nombre,
      apellido: apellido,
      documento: documento,
      correoElectronico: correoElectronico,
      celular: celular,
      fechaNacimiento: fechaNacimiento,
    });
    await NuevoUsuario.save();
    res.json(NuevoUsuario);
  });

  app.put("/actualizarUsuario/:id", async (req, res) => {
    const usuario = await Usuario.findById({ _id: req.params.id });
    usuario.nombre = req.body.nombre;
    usuario.apellido = req.body.apellido;
    usuario.documento = req.body.documento;
    usuario.correoElectronico = req.body.correoElectronico;
    usuario.celular = req.body.celular;
    usuario.fechaNacimiento = req.body.fechaNacimiento;
    usuario.save();
    res.json();
  });

  app.delete("/borrarPlato/:id", async (req, res) => {
    const eliminarUsuario = await Usuario.findByIdAndDelete({
      _id: req.params.id,
    });
    res.json(await Usuario.find());
  });

  app.listen(3000, () => {
    console.log("escuchando en el puerto " + 3000);
  });
})();
