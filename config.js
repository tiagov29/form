const { config } = require("dotenv");

config();

exports.module = { MONGO: process.env.MONGO };
