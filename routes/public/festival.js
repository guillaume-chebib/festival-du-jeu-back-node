var express = require('express');
var router = express.Router();
const jeu_reserve_controller = require("../../controller/jeu_reserve_controller")
const zone_controller = require("../../controller/zone_controller")
const societe_controller = require("../../controller/societe_controller")


router.get('/jeu', async function(req, res, next) {
    try {
        const jeux = await jeu_reserve_controller.getJeuReserveForCurrentFestivalPublic()
        res.status(200).json(jeux)

    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

router.get('/zone', async function(req, res, next) {
    try {
        const zones_jeux = await zone_controller.getZoneForCurrentFestivalPublic()

        res.status(200).json(zones_jeux)

    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

router.get('/editeur', async function(req, res, next) {
    try {
        const editeurs_jeux = await societe_controller.getEditeurForCurrentFestivalPublic()
        res.status(200).json(editeurs_jeux)

    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

//editeur !!
module.exports = router;
