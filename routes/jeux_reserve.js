var express = require('express');
var router = express.Router();

const jeu_reserve_controller = require("../controller/jeu_reserve_controller")

//======================= POST ========================//

router.post('/', async function(req, res, next) {
    try {
        await jeu_reserve_controller.createJeuReserve(req.body)
        res.status(200).json({message:"success"})

    }
    catch (e) {
        res.status(500).json({ message: "can't modify data" });
    }

});

//======================= PUT ========================//

router.put('/:id', async function(req, res, next) {
    try {
        await jeu_reserve_controller.updateJeuReserve(req.body)
        res.status(200).json({message:"success"})

    }
    catch (e) {
        res.status(500).json({ message: "can't add data" });
    }

});

//======================= DELETE ========================//

router.delete('/:id', async function(req, res, next) {
    try {
        await jeu_reserve_controller.deleteJeuReserve(req.params)
        res.status(200).json({message:"success"})

    }
    catch (e) {
        res.status(500).json({ message: "can't delete data" });
    }

});

module.exports = router;

