import express from "express";
import router from "./router/router";
import {sequelize} from "./db/db";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

(async () => {
    await sequelize.sync();
})();

export default app;