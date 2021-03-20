var express = require('express');
var router = express.Router();

const zone_controller = require("../controller/zone_controller")

//======================= GET ========================//

router.get('/', async function(req, res, next) {
    try {
        const zones = await zone_controller.getAllZone()
        res.status(200).json({ message: zones})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

//======================= POST ========================//

router.post('/', async function(req, res, next) {
    try {
        await zone_controller.createZone(req.body)
        res.status(200).json({message:"success"})

    }
    catch (e) {
        res.status(500).json({ message: "can't modify data" });
    }

});

//======================= PUT ========================//

router.put('/:id', async function(req, res, next) {
    try {
        await zone_controller.updateZone(req.body)
        res.status(200).json({message:"success"})

    }
    catch (e) {
        res.status(500).json({ message: "can't add data" });
    }

});

//======================= DELETE ========================//

router.delete('/:id', async function(req, res, next) {
    try {
        await zone_controller.deleteZone(req.params)
        res.status(200).json({message:"success"})

    }
    catch (e) {
        res.status(500).json({ message: "can't delete data" });
    }

});

module.exports = router;
