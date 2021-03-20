var express = require('express');
var router = express.Router();

const jeu_controller = require("../controller/jeu_controller")

//======================= GET ========================//

router.get('/', async function(req, res, next) {
    try {
        const jeux = await jeu_controller.getAllJeu()
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

        const jeu = await jeu_controller.getJeuById(id)

        console.log(jeu)
        res.status(200).json({ message: jeu})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

router.get('/editeur/:id', async function(req, res, next) {
    try {
        const jeux = await jeu_controller.getJeuByIdEditeur(req.params)
        console.log(jeux)
        res.status(200).json({ message: jeux})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

router.get('/type/:id', async function(req, res, next) {
    try {
        const jeux = await jeu_controller.getJeuByIdType(req.params)
        console.log(jeux)
        res.status(200).json({ message: jeux})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

router.get('/type/:nom', async function(req, res, next) {
    try {
        const jeux = await jeu_controller.getJeuByTypeName(req.params)
        console.log(jeux)
        res.status(200).json({ message: jeux})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

//======================= POST ========================//

router.post('/', async function(req, res, next) {

    try {
        console.log("ici")
        await jeu_controller.createJeu(req.body)

        res.status(200).json({ message: "success"})
    }
    catch (e) {
        res.status(500).json({ message: "can't add data" });
    }

});

//======================= PUT ========================//

router.put('/:id', async function(req, res, next) {

    try {
        await jeu_controller.updateJeu(req.body)
        res.status(200).json({ message: "success"})
    }
    catch (e) {
        res.status(500).json({ message: "can't modify data" });
    }

});

//======================= DELETE ========================//

router.delete('/:id', async function(req, res, next) {
    try {
        await jeu_controller.deleteJeu(req.params)
        res.status(200).json({message:"success"})

    }
    catch (e) {
        res.status(500).json({ message: "can't delete data" });
    }

});

module.exports = router;
