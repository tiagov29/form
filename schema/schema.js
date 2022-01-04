const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
  nombre: {
    required: true,
    type: String,
  },
  apellido: {
    required: true,
    type: String,
  },
  documento: {
    required: true,
    type: String,
  },
  correoElectronico: {
    required: true,
    type: String,
  },
  celular: {
    required: true,
    type: String,
  },
  fechaNacimiento: {
    required: true,
    type: Date,
  },
});

const Usuario = mongoose.model("Usuario", usuarioSchema);

module.exports = Usuario;
