var express = require('express');
var router = express.Router();

const contact_controller = require("../controller/contact_controller")

//======================= GET ========================//

router.get('/', async function(req, res, next) {
    try {
        const contacts = await contact_controller.getAllContact()

        res.status(200).json({ message: contacts})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

router.get('/:id', async function(req, res, next) {
    try {
        const contact = await contact_controller.getContactById(req.params)

        res.status(200).json({ message: contact})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

router.get('/societe/:id_societe', async function(req, res, next) {
    try {
        const contact = await contact_controller.getContactByIdSociete(req.params)
        res.status(200).json({ message: contact})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

//======================= POST ========================//

router.post('/', async function(req, res, next) {
    try {
        await contact_controller.createContact(req.body)
        res.status(200).json({message:"success"})

    }
    catch (e) {
        res.status(500).json({ message: "can't add data" });
    }

});

//======================= PUT ========================//

router.put('/:id', async function(req, res, next) {
    try {
        await contact_controller.updateContact(req.params,req.body)
        res.status(200).json({message:"success"})

    }
    catch (e) {
        res.status(500).json({ message: "can't modify data" });
    }

});

//======================= DELETE ========================//

router.delete('/:id', async function(req, res, next) {
    try {
        await contact_controller.deleteContact(req.params)
        res.status(200).json({message:"success"})

    }
    catch (e) {
        res.status(500).json({ message: "can't delete data" });
    }

});

module.exports = router;

