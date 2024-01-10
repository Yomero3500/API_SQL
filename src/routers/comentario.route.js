const routerComentario = require("express").Router();
const Comentario = require("../models/Comentario.model");
const { literal } = require('sequelize');

routerComentario.get("/", async (req, res) => {
  try {
    const comentario = await Comentario.findAll()
    res.send(comentario);
  } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
  }
});

routerComentario.get("/:publicacion_id", async (req, res) => {
  const publicacion_id = req.params.publicacion_id;
  try {
    const comentario = await Comentario.findAll({where: {publicacion_id : publicacion_id}}) 
    res.send(comentario);
  } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
    console.log(error);
  }
});

routerComentario.post("/add", async (req, res) => {
  const { comentario_id, contenido, fecha_creacion, publicacion_id, usuario_id } = req.body;
  try { 
    await Comentario.sync()
    const comentario = await Comentario.create({
      comentario_id: comentario_id,
      contenido:contenido,
      fecha_creacion: fecha_creacion,
      publicacion_id: publicacion_id,
      usuario_id: usuario_id
    });
    res.json(comentario);
  } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
    console.log(error);
  }
});


routerComentario.put("/modificar/:id", async (req,res)=>{
  const comentario_id = req.params.id
  const contenido = req.body.contenido;
  try{
      const usuario_actualizado = await Comentario.update({
        contenido: contenido
      }, {
          where: {
              comentario_id: comentario_id
          }
      })
      res.send(usuario_actualizado);
  }catch(error){
      res.status(500).json({error: "Error al modificar los datos"});
      console.log(error);
  }
});


routerComentario.delete("/delete", async (req, res) => {
  const fecha_creacion = req.body.fecha_creacion;
  const publicacion_id = req.body.publicacion_id;
  try { 
    const comentario = await Comentario.destroy({
      where: literal(`DATE(fecha_creacion) = '${fecha_creacion}' AND publicacion_id = '${publicacion_id}'`) });
    res.send("Comentario eliminado correctamente");
  } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
    console.log(error);
  }
});
module.exports = routerComentario;