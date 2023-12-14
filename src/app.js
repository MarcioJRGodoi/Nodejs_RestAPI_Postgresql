const express = require("express");
const router = require("./router/router");
const sequelize = require("./db/db")

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

(async () => {
    await sequelize.sync();
})();

module.exports = app;