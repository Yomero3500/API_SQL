const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const Usuario = require('../routers/usuario.route');
const Producto = require('../routers/product.router');
const NotificationRouter = require('../routers/notification.router');
const ClientRouter = require('../routers/Client.routes');

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use("/users", Usuario);
app.use("/products", Producto);
app.use("/notifications", NotificationRouter); 
app.use("/clients", ClientRouter);



module.exports = app;