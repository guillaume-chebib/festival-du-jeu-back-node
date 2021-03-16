var express = require('express');
var router = express.Router();

const jeu = require("../controller/jeu_controller")

router.get('/', async function(req, res, next) {
    try {
        const jeux = await jeu.getAllJeu()
        console.log(jeux)
        res.status(200).json({ message: jeux})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

router.get('/:id', async function(req, res, next) {
    try {
        const id = req.params.id
        const jeu = await jeu.getJeuById(id)
        console.log(jeu)
        res.status(200).json({ message: jeu})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

router.get('/editeur/:id', async function(req, res, next) {
    try {
        const id = req.params.id
        const jeux = await jeu.getJeuByIdEditeur(id)
        console.log(jeux)
        res.status(200).json({ message: jeux})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

router.get('/type/:id', async function(req, res, next) {
    try {
        const id = req.params.id
        const jeux = await jeu.getJeuByType(id)
        console.log(jeux)
        res.status(200).json({ message: jeux})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

router.get('/type/:nom', async function(req, res, next) {
    try {
        const nom = req.params.nom
        const jeux = await jeu.getJeuByTypeName(nom)
        console.log(jeux)
        res.status(200).json({ message: jeux})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

module.exports = router;
