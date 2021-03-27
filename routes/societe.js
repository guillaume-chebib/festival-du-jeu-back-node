var express = require('express');
var router = express.Router();

const jeu_controller = require("../controller/jeu_controller")
const societe_controller = require("../controller/societe_controller")
const prise_contact_controller = require("../controller/prise_contact_controller")
const contact_controller = require("../controller/contact_controller")

//======================= GET ========================//

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

router.get('/exposant_seulement', async function(req, res, next) {
    try {
        const societes = await societe_controller.getAllExposantSeulement()
        res.status(200).json({ message: societes})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

router.get('/editeur_seulement', async function(req, res, next) {
    try {
        const societes = await societe_controller.getAllEditeurSeulement()
        res.status(200).json({ message: societes})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

router.get('/editeurs', async function(req, res, next) {
    try {
        const societes = await societe_controller.getAllEditeurs()
        res.status(200).json({ message: societes})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

router.get('/editeurExposant', async function(req, res, next) {
    try {
        const societes = await societe_controller.getAllEditeurExposant()
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

router.get('/:id/prise_contact', async function(req, res, next) {
    try {
        const prise_contact = await prise_contact_controller.getPriseContactByIdExposant(req.params)
        res.status(200).json({ message: prise_contact})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

router.get('/:id/contact', async function(req, res, next) {
    try {
        const contact = await contact_controller.getContactByIdSociete(req.params)
        res.status(200).json({ message: contact})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

//======================= PUT ========================//

router.put('/:id', async function(req, res, next) {

    try {
        await societe_controller.updateSociete(req.params,req.body)
        res.status(200).json({ message: "success"})
    }
    catch (e) {
        res.status(500).json({ message: "can't modify data" });
    }

});

router.put('/:id/priseContact/festival/:id_festival', async function(req, res, next) {
    try {
        await prise_contact_controller.updatePriseContact(req.params,req.body)
        res.status(200).json({message:"success"})

    }
    catch (e) {
        res.status(500).json({ message: "can't modify data" });
    }

});

//======================= POST ========================//

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
        await societe_controller.deleteSociete(req.params)
        res.status(200).json({message:"success"})

    }
    catch (e) {
        res.status(500).json({ message: "can't delete data" });
    }

});

module.exports = router;
