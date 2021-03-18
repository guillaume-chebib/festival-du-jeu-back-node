var express = require('express');
var router = express.Router();

const reservation_controller = require("../controller/reservation_controller")
const jeu_reserve_controller = require("../controller/jeu_reserve_controller")

router.get('/:id', async function(req, res, next) {

    try {
        const reservation = await reservation_controller.getReservationById(req.params)
        const jeux = await jeu_reserve_controller.getJeuReserveByIdReservation(req.params)
        res.status(200).json({ message: reservation, jeux : jeux})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

router.put('/:id', async function(req, res, next) {

    try {
        await reservation_controller.updateReservation(req.body)
        res.status(200).json({ message: "success"})
    }
    catch (e) {
        res.status(500).json({ message: "can't modify data" });
    }

});

router.post('/', async function(req, res, next) {

    try {
        await reservation_controller.createReservation(req.body)
        res.status(200).json({ message: "success"})
    }
    catch (e) {
        res.status(500).json({ message: "can't add data" });
    }

});



module.exports = router;
