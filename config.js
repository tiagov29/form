const { config } = require("dotenv");

config();

exports.module = { mongo: process.env.mongo };
