var express = require('express');
var router = express.Router();

const festival_controller = require("../controller/festival_controller")
const reservation_controller = require("../controller/reservation_controller")

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
        res.status(500).json({ message: "can't add data" });
    }

});

router.get('/:id/reservation', async function(req, res, next) {
    try {
        const festival = await reservation_controller.getReservationsByIdFestival(req.params)
        res.status(200).json({message:festival})

    }
    catch (e) {
        res.status(500).json({ message: "can't add data" });
    }

});

module.exports = router;
