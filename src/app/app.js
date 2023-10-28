const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const Usuario = require('../routers/usuario.route');
const Publicacion = require('../routers/pubicacion.route');
const Comentario = require('../routers/comentario.route')

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use("/usuario", Usuario);
app.use("/publicacion", Publicacion);
app.use("/comentario", Comentario);

app.get('/', (req, res) => {
  res.json("server initialized");
});

module.exports = app;