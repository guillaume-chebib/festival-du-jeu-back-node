var express = require('express');
var router = express.Router();

const type_jeu_controller = require("../controller/type_jeu_controller")

//======================= GET ========================//

router.get('/', async function(req, res, next) {
    try {
        const types = await type_jeu_controller.getAllTypeJeu()
        res.status(200).json({ message: types})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

router.get('/:id', async function(req, res, next) {
    try {
        const type = await type_jeu_controller.getTypeJeuById(req.params)
        res.status(200).json({ message: type})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

//======================= POST ========================//

router.post('/', async function(req, res, next) {
    try {
        await type_jeu_controller.createTypeJeu(req.body)
        res.status(200).json({message:"success"})

    }
    catch (e) {
        res.status(500).json({ message: "can't modify data" });
    }

});

//======================= PUT ========================//

router.put('/:id', async function(req, res, next) {
    try {
        await type_jeu_controller.updateTypeJeu(req.params,req.body)
        res.status(200).json({message:"success"})

    }
    catch (e) {
        res.status(500).json({ message: "can't add data" });
    }

});

//======================= DELETE ========================//

router.delete('/:id', async function(req, res, next) {
    try {
        await type_jeu_controller.deleteTypeJeu(req.params)
        res.status(200).json({message:"success"})

    }
    catch (e) {
        res.status(500).json({ message: "can't delete data" });
    }

});

module.exports = router;

