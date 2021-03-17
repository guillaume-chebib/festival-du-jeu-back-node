var express = require('express');
var router = express.Router();

const reservation_controller = require("../controller/reservation_controller")

router.get('/:id', async function(req, res, next) {

    try {
        const reservation = await reservation_controller.getReservationById(req.params)
        res.status(200).json({ message: reservation})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});


module.exports = router;
