var express = require('express');
var router = express.Router();

const festival = require("../controller/festivalcontroller")

router.get('/', async function(req, res, next) {
    try {
        const festivals = await festival.getAllFestival()
        res.status(200).json({ message: festivals})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

router.post('/', async function(req, res, next) {
    try {
        await festival.createFestival(req.body)
        res.status(200).json({message:"success"})

    }
    catch (e) {
        res.status(500).json({ message: "can't add data" });
    }

});

module.exports = router;