var express = require('express');
var router = express.Router();

const zone = require("../controller/zonecontroller")

router.get('/', async function(req, res, next) {
    try {
        const zones = await zone.getAllZone()
        console.log(zones)
        res.status(200).json({ message: zones})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

router.get('/:id', async function(req, res, next) {
    try {
        const id = req.params.id
        const zone = await zone.getZoneById(id)
        console.log(zone)
        res.status(200).json({ message: zone})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

router.get('/festival/:id', async function(req, res, next) {
    try {
        const id = req.params.id
        const zone = await zone.getZoneByIdFestival(id)
        console.log(zone)
        res.status(200).json({ message: zone})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

module.exports = router;