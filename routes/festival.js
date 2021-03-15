var express = require('express');
var router = express.Router();

const festival = require("../controller/festivalcontroller")

router.get('/', async function(req, res, next) {
    try {
        const festivals = await festival.getAllFestival()
        console.log(festivals)
        res.status(200).json({ message: festivals})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

module.exports = router;