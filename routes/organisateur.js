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

router.post('/', async function(req, res, next) {
    try {
        const rep = await organisateur_controller.createOrganisateur(req.body)
        res.status(200).json({ message: "succes"})
    }
    catch (e) {
        console.log(e.code)
        if(e.code === '23505'){
            res.status(500).json({ message: "Adresse mail déjà existante, veuillez reesayer avec une adresse differente." });
        }
        else {
            res.status(500).json({message: "Une erreur est survenue, veuillez reesayer plus tard."});
        }
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
