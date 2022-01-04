const Usuario = require("../schema/schema");

exports.GetUsers = async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
};

exports.createUser = async (req, res) => {
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
};

exports.updateUser = async (req, res) => {
  const usuario = await Usuario.findById({ _id: req.params.id });
  usuario.nombre = req.body.nombre ? req.body.nombre : usuario.nombre;
  usuario.apellido = req.body.apellido ? req.body.apellido : usuario.apellido;
  usuario.documento = req.body.documento
    ? req.body.documento
    : usuario.documento;
  usuario.correoElectronico = req.body.correoElectronico
    ? req.body.correoElectronico
    : usuario.correoElectronico;
  usuario.celular = req.body.celular ? req.body.celular : usuario.celular;
  usuario.fechaNacimiento = req.body.fechaNacimiento
    ? req.body.fechaNacimiento
    : usuario.fechaNacimiento;
  usuario.save();
  res.json(usuario);
};

exports.deleteUser = async (req, res) => {
  const eliminarUsuario = await Usuario.findByIdAndDelete({
    _id: req.params.id,
  });
  res.json(await Usuario.find());
};
