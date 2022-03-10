const router = require("express").Router();
const Material = require("../models/Material.model");

//Listado Material

router.get("/listado", (req, res) => {

  Material
    .find()
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
});

//Listado Libros

router.get("/libros", (req, res) => {

  Material
    .find({ type: 'Book' })
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
});

// Listado Coworking

router.get("/coworking", (req, res) => {

  Material
    .find({ type: 'Coworking' })
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
});

// Coworking - listado

router.get("/coworking", (req, res) => {

  Material
    .find({ type: 'Coworking' })
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
});

module.exports = router;
