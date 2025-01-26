const router = require('express').Router();
const Product = require('../models/Product.model');
const multer = require("multer");


router.get("/", async (req, res) => {
    try {
      const product = await Product.findAll();
      res.send(product);
    } catch (error) {
      res.status(500).json({ error: "Ha ocurrido un error" });
    }
  });
  
  router.get("/:nombre", async (req, res) => {
    try {
      const product = await Product.findOne({ where: { nombre: req.params.nombre } });
      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ error: "Producto no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: "Ha ocurrido un error" });
    }
  });

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/", upload.single("image"), async (req, res) => {
  console.log(req.body);
  console.log(req.file);
  const { nombre, precio } = req.body;
  const imagenBuffer = req.file ? req.file.buffer : null;

  try {
    await Product.sync();
    const producto = await Product.create({
      nombre: nombre,
      precio: precio,
      imagen: imagenBuffer,
    });
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
    console.log(error);
  }
});

router.put("/", async (req, res) => {
  const { nombre, nuevoNombre, precio, imagen } = req.body;
  try {
    const product = await Product.findOne({ where: { nombre: nombre } });
    if (product) {
      product.nombre = nuevoNombre || product.nombre;
      product.precio = precio || product.precio;
      product.imagen = imagen || product.imagen;
      await product.save();
      res.json(product);
    } else {
      res.status(404).json({ error: "Producto no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
  }
});

router.delete("/", async (req, res) => {
  const { nombre } = req.body;
  try {
    const product = await Product.findOne({ where: { nombre: nombre } });
    if (product) {
      await product.destroy();
      res.json({ message: "Producto eliminado" });
    } else {
      res.status(404).json({ error: "Producto no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
  }
});

module.exports = router;