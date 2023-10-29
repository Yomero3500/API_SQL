const routerPublicacion = require("express").Router();
const { literal } = require('sequelize');
const Publicacion = require("../models/Publicacion.model");

routerPublicacion.get("/", async (req, res) => {
  try { 
    const publicacion = await Publicacion.findAll()
    res.send(publicacion);
  } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
    console.log(error);
  }
});

routerPublicacion.get("/:usuario_id", async (req, res) => {
  const usuario_id = req.params.usuario_id;
  try { 
    const publicacion = await Publicacion.findAll({where: {usuario_id: usuario_id}})
    res.send(publicacion);
  } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
    console.log(error);
  }
});

routerPublicacion.post("/add", async (req, res) => {
  const { publicacion_id, titulo, contenido, fecha_creacion, usuario_id } = req.body;
  try { 
    await Publicacion.sync()
    const publicacion = await Publicacion.create({
      publicacion_id: publicacion_id,
      titulo: titulo,
      contenido: contenido,
      fecha_creacion: fecha_creacion,
      usuario_id: usuario_id
    });
    res.json(publicacion);
  } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
    console.log(error);
  }
});

routerPublicacion.put("/modificar/:id", async (req, res) => {
  const publicacion_id = req.params.id;
  const { titulo, contenido} = req.body;
  try { 
    const publicacion = await Publicacion.update({
      titulo: titulo,
      contenido: contenido
    },
    {
      where: {
        publicacion_id: publicacion_id
      }
    });
    res.send("Usuario actualizado");
  } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
  }
});

routerPublicacion.delete("/delete", async (req, res) => {
  const fecha_creacion = req.body.fecha_creacion;
  try { 
    const publicacion = await Publicacion.destroy({
      where: literal(`DATE(fecha_creacion) = '${fecha_creacion}'`) });
    res.send("Se elimino la publicacion correctamente");
  } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
    console.log(error);
  }
});
module.exports = routerPublicacion;