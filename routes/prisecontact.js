var express = require('express');
var router = express.Router();

const prisecontact = require("../controller/prisecontact_controller")

router.get('/', async function(req, res, next) {
    try {
        const prisecontacts = await prisecontact.getAllPriseContact()
        console.log(prisecontacts)
        res.status(200).json({ message: prisecontacts})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

router.get('festival/:idFestival/societe/:idSociete', async function(req, res, next) {
    try {
        const idF = req.params.idFestival
        const idS = req.params.idSociete
        const prisecontact = await prisecontact.getPriseContactById(idF, idS)
        console.log(prisecontact)
        res.status(200).json({ message: prisecontact})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

router.get('/statut/:statut', async function(req, res, next) {
    try {
        const statut = req.params.statut
        const prisecontact = await prisecontact.getPriseContactByStatus(statut)
        console.log(prisecontact)
        res.status(200).json({ message: prisecontact})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

module.exports = router;