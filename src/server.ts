import app from "./app";
import("dotenv").then((dotenv) => dotenv.config());

const port = process.env.PORT || 3333;

app.listen(port, 
    ()=> console.log(`Servidor na porta ${port}`));