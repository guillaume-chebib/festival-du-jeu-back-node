var express = require('express');
var router = express.Router();

const prise_contact_controller = require("../controller/prise_contact_controller")

//======================= POST ========================//

router.post('/', async function(req, res, next) {
    try {
        await prise_contact_controller.createPriseContact(req.body)
        res.status(200).json({message:"success"})

    }
    catch (e) {
        res.status(500).json({ message: "can't add data" });
    }

});

router.put('/:id_festival/:id_exposant', async function(req, res, next) {
    try {

        await prise_contact_controller.updatePriseContact(req.params)
        res.status(200).json({message:"success"})

    }
    catch (e) {
        res.status(500).json({ message: "can't modify data" });
    }

});

router.get('/:id_festival/:id_exposant', async function(req, res, next) {
    try {

        const prise_contacts = await prise_contact_controller.getPriseContactById(req.params,req.body)
        res.status(200).json({message:prise_contacts})

    }
    catch (e) {
        res.status(500).json({ message: "can't modify data" });
    }

});



module.exports = router;

