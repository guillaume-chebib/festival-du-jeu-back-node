var express = require('express');
var router = express.Router();

const contact_controller = require("../controller/contact_controller")

router.get('/', async function(req, res, next) {
    try {
        const contacts = await contact_controller.getAllContact()
        console.log(contacts)
        res.status(200).json({ message: contacts})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

router.get('/:id', async function(req, res, next) {
    try {
        const id = req.params.id
        const contact = await contact_controller.getContactById(id)
        console.log(contact)
        res.status(200).json({ message: contact})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

router.get('/societe/:id', async function(req, res, next) {
    try {
        const id = req.params.id
        const contact = await contact_controller.getContactByIdSociete(id)
        console.log(contact)
        res.status(200).json({ message: contact})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

module.exports = router;
