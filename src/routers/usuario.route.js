const router = require("express").Router();
const Usuario = require("../models/Usuario.model");

router.get("/", async (req, res) => {
  try { 
    const user = await Usuario.findAll();
    res.send(user);
  } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
  }
});

router.get("/buscar", async (req, res) => {
  const email = req.body.email;
  try { 
    const user = await Usuario.findOne({where: {email: email}})
    res.send(user);
  } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
  }
});

router.post("/add", async (req, res) => {
  const { usuario_id, nombre, email } = req.body;
  try { 
    await Usuario.sync()
    const usuario = await Usuario.create({
      usuario_id: usuario_id,
      nombre: nombre,
      email: email
    });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
    console.log(error);
  }
});
router.put("/update/:usuario_id", async (req, res) => {
  const usuario_id = req.params.usuario_id;
  const { nombre, email } = req.body;
  try { 
    const usuario = await Usuario.update({
      nombre: nombre,
      email: email
    }, { where: { usuario_id: usuario_id} });
    res.send("Usuario modificado correctamente");
  } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
  }
});

router.delete("/delete/:usuario_id", async (req, res) => {
  try { 
    const usuario = await Usuario.destroy({ where: { usuario_id: req.params.usuario_id} });
    res.send("Usuario eliminado correctamente");
  } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
    console.log(error);
  }
});
module.exports = router;