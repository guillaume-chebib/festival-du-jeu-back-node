var express = require('express');
var router = express.Router();

const jeu_controller = require("../controller/jeu_controller")
const societe_controller = require("../controller/societe_controller")

router.get('/', async function(req, res, next) {
    try {
        const societes = await societe_controller.getAllSociete()
        console.log(societes)
        res.status(200).json({ message: societes})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

router.get('/:id', async function(req, res, next) {
    try {
        const societe = await societe_controller.getSocieteById(req.params)

        console.log(societe)
        res.status(200).json({ message: societe})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

router.get('/:id/jeu', async function(req, res, next) {
    try {
        const jeux = await jeu_controller.getJeuByIdEditeur(req.params)
        console.log(jeux)
        res.status(200).json({ message: jeux})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

router.put('/:id', async function(req, res, next) {

    try {
        await societe_controller.updateSociete(req.body)
        res.status(200).json({ message: "success"})
    }
    catch (e) {
        res.status(500).json({ message: "can't modify data" });
    }

});

router.post('/', async function(req, res, next) {

    try {
        await societe_controller.createSociete(req.body)
        res.status(200).json({ message: "success"})
    }
    catch (e) {
        res.status(500).json({ message: "can't add data" });
    }

});

//======================= DELETE ========================//

router.delete('/:id', async function(req, res, next) {
    try {
        await societe_controller.dele(req.params)
        res.status(200).json({message:"success"})

    }
    catch (e) {
        res.status(500).json({ message: "can't delete data" });
    }

});

module.exports = router;
