const express = require('express');

const router = express.Router();

const db = require('../database');

router.get('/', (req, res) => {

  const productos = db.prepare(
    'SELECT * FROM productos ORDER BY id DESC'
  ).all();

  res.json(productos);
});

router.post('/', (req, res) => {

  const { nombre, precio, categoria, stock } = req.body;

  const resultado = db.prepare(`
    INSERT INTO productos
    (nombre, precio, categoria, stock)
    VALUES (?, ?, ?, ?)
  `).run(
    nombre,
    precio,
    categoria,
    stock
  );

  const nuevo = db.prepare(
    'SELECT * FROM productos WHERE id = ?'
  ).get(resultado.lastInsertRowid);

  res.json(nuevo);
});

router.put('/:id', (req, res) => {

  const { nombre, precio, categoria, stock } = req.body;

  db.prepare(`
    UPDATE productos
    SET nombre = ?,
        precio = ?,
        categoria = ?,
        stock = ?
    WHERE id = ?
  `).run(
    nombre,
    precio,
    categoria,
    stock,
    req.params.id
  );

  res.json({
    mensaje: 'Producto actualizado'
  });
});

router.delete('/:id', (req, res) => {

  db.prepare(
    'DELETE FROM productos WHERE id = ?'
  ).run(req.params.id);

  res.json({
    mensaje: 'Producto eliminado'
  });
});

module.exports = router;