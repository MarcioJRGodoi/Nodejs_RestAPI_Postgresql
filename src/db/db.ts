const Sequelize = require('sequelize');
require("dotenv").config();

export const sequelize = new Sequelize(process.env.POSTGRESQL_USER, process.env.POSTGRESQL_DBNAME, 
  process.env.POSTGRESQL_PASSWORD, {
  host: process.env.POSTGRESQL_HOSTNAME,
  dialect: process.env.POSTGRESQL_DIALECT,
  port: process.env.POSTGRESQL_PORT,
});

