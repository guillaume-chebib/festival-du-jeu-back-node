var express = require('express');
var router = express.Router();

const espace = require("../controller/espace_controller")

router.get('/', async function(req, res, next) {
    try {
        const espaces = await espace.getAllEspace()
        console.log(espaces)
        res.status(200).json({ message: espaces})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

router.get('/:id', async function(req, res, next) {
    try {
        const id = req.params.id
        const espace = await espace.getEspaceById(id)
        console.log(espace)
        res.status(200).json({ message: espace})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

router.get('/festival/:id', async function(req, res, next) {
    try {
        const id = req.params.id
        const espace = await espace.getEspaceByIdFestival(id)
        console.log(espace)
        res.status(200).json({ message: espace})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

module.exports = router;
