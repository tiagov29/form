const mongoose = require("mongoose");
require("dotenv").config;
const config = require("../config");
const mongo = config.module.mongo;
const { postUser, button, values } = require("../src/js/index");

(async function main() {
  await mongoose.connect(mongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    console.log("db connected");
  });

  const formSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    typeDocument: String,
    idDocument: String,
    email: String,
    phone: String,
    birthDate: Date,
  });

  const Form = mongoose.model("form", formSchema);

  const postUser = new Form(values);
})();
