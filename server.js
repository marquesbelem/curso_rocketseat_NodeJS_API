const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const requireDir = require("require-dir");

//iniciando o app
const app = express();
app.use(express.json());
app.use(cors()); //Disponivel para ser acessada por qualquer dominio, publicamente

//iniciando o DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {useNewUrlParser: true});
requireDir("./src/models");

//Rotas
app.use('/api', require("./src/routes"));

app.listen(3001);  //Ouvir a porta 3001 do navegador