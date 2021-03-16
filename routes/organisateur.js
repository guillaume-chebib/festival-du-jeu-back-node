var express = require('express');
var router = express.Router();

const organisateur_controller = require("../controller/organisateur_controller")

router.get('/', async function(req, res, next) {
    try {
        const organisateurs = await organisateur_controller.getAllOrganisateur()
        console.log(organisateurs)
        res.status(200).json({ message: organisateurs})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

router.get('/profil/:id', async function(req, res, next) {
    try {
        const id = req.params.id
        const organisateur = await jeu.getOrganisateurById(id)
        console.log(organisateur)
        res.status(200).json({ message: organisateur})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});


module.exports = router;
