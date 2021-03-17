var express = require('express');
var router = express.Router();

const festival_controller = require("../controller/festival_controller")
const reservation_controller = require("../controller/reservation_controller")
const jeu_reserve_controller = require("../controller/jeu_reserve_controller")
const zone_controller = require("../controller/zone_controller")

router.get('/', async function(req, res, next) {
    try {
        const festivals = await festival_controller.getAllFestival()
        res.status(200).json({ message: festivals})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

router.post('/', async function(req, res, next) {
    try {
        await festival_controller.createFestival(req.body)
        res.status(200).json({message:"success"})

    }
    catch (e) {
        res.status(500).json({ message: "can't add data" });
    }

});

router.get('/:id', async function(req, res, next) {
    try {
        const festival = await festival_controller.getFestivalById(req.params)
        res.status(200).json({message:festival})

    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

router.get('/:id/reservation', async function(req, res, next) {
    try {
        const reservation = await reservation_controller.getReservationsByIdFestival(req.params)
        res.status(200).json({message:reservation})

    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

router.get('/:id/jeu', async function(req, res, next) {
    try {
        const jeux = await jeu_reserve_controller.getJeuReserveByIdFestival(req.params)
        res.status(200).json({message:jeux})

    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

router.get('/:id/zone/jeu', async function(req, res, next) {
    try {
        res_json = []
        const zones = await zone_controller.getZoneByIdFestival(req.params)
        console.log(zones)
        for (i = 0; i < zones.length; i++) {
            let jeuxZone = await jeu_reserve_controller.getJeuReserveByIdZone(zones[i].id_zone)
            json_temp = {zone : zones[i], jeux : jeuxZone}
            res_json = res_json.concat(json_temp);
        }

        res.status(200).json({message:res_json})

    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

module.exports = router;
