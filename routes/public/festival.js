var express = require('express');
var router = express.Router();
const jeu_reserve_controller = require("../../controller/jeu_reserve_controller")

router.get('/:id/jeu', async function(req, res, next) {
    try {
        const jeux = await jeu_reserve_controller.getJeuReserveByIdFestivalPublic(req.params)
        res.status(200).json({message:jeux})

    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});
module.exports = router;
