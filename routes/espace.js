var express = require('express');
var router = express.Router();

const espace_controller = require("../controller/espace_controller")

router.get('/', async function(req, res, next) {
    try {
        const espaces = await espace_controller.getAllEspace()

        res.status(200).json({ message: espaces})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

router.get('/:id', async function(req, res, next) {
    try {
        const id = req.params.id
        const espace = await espace_controller.getEspaceById(id)

        res.status(200).json({ message: espace})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

router.post('/', async function(req, res, next) {

    try {
        await espace_controller.createEspace(req.body,req.params)
        res.status(200).json({ message: "success"})
    }
    catch (e) {
        res.status(500).json({ message: "can't add data" });
    }

});

router.put('/:id', async function(req, res, next) {

    try {
        await espace_controller.updateEspace(req.body,req.params)
        res.status(200).json({ message: "success"})
    }
    catch (e) {
        res.status(500).json({ message: "can't modify data" });
    }

});

router.delete('/:id', async function(req, res, next) {

    try {
        await espace_controller.deleteEspace(req.params)
        res.status(200).json({ message: "success"})
    }
    catch (e) {
        res.status(500).json({ message: "can't delete data" });
    }

});
module.exports = router;
