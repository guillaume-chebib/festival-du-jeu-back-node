var express = require('express');
var router = express.Router();

const prise_contact_controller = require("../controller/prise_contact_controller")

//======================= POST ========================//

router.post('/', async function(req, res, next) {
    try {
        await prise_contact_controller.cre(req.body)
        res.status(200).json({message:"success"})

    }
    catch (e) {
        res.status(500).json({ message: "can't modify data" });
    }

});

//======================= PUT ========================//

router.put('/:id', async function(req, res, next) {
    try {
        await type_jeu_controller.updateTypeJeu(req.body)
        res.status(200).json({message:"success"})

    }
    catch (e) {
        res.status(500).json({ message: "can't add data" });
    }

});



module.exports = router;

