var express = require('express');
var router = express.Router();

const festival_controller = require("../controller/festival_controller")
const reservation_controller = require("../controller/reservation_controller")
const jeu_reserve_controller = require("../controller/jeu_reserve_controller")
const zone_controller = require("../controller/zone_controller")
const societe_controller = require("../controller/societe_controller")
const prise_contact_controller = require("../controller/prise_contact_controller")
const espace_controller = require("../controller/espace_controller")

router.get('/', async function(req, res, next) {
    try {
        const festivals = await festival_controller.getAllFestival()
        res.status(200).json({ message: festivals})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

router.get('/courant', async function(req, res, next) {
    try {
        const festival = await festival_controller.getFestivalCourant()
        res.status(200).json({ message: festival})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});


router.post('/', async function(req, res, next) {
    try {
        await festival_controller.createFestival(req.body)
        res.status(200).json({message:"success"})

    }
    catch (e) {
        res.status(500).json({ message: "can't add data" });
    }

});

router.get('/:id', async function(req, res, next) {
    try {
        const festival = await festival_controller.getFestivalById(req.params)
        res.status(200).json({message:festival})

    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

/**
 * =========================================================================================================================
 * Partie reservation
 * =========================================================================================================================
 */
router.get('/:id/reservation', async function(req, res, next) {
    try {
        const reservation = await reservation_controller.getReservationsByIdFestival(req.params)
        res.status(200).json({message:reservation})

    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

/**
 * =========================================================================================================================
 * Partie jeu
 * =========================================================================================================================
 */
router.get('/:id/jeu', async function(req, res, next) {
    try {
        const jeux = await jeu_reserve_controller.getJeuReserveByIdFestival(req.params)
        res.status(200).json({message:jeux})

    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

/**
 * =========================================================================================================================
 * Partie zone
 * =========================================================================================================================
 */
router.get('/:id/zone', async function(req, res, next) {
    try {
        const zones = await zone_controller.getZoneByIdFestival(req.params)
        res.status(200).json({message:zones})


    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

/**
 * =========================================================================================================================
 * Partie exposant / editeur
 * =========================================================================================================================
 */
router.get('/:id/exposant', async function(req, res, next) {
    try {
        res_json = []
        const societes = await societe_controller.getAllExposantActif(req.params)

        res.status(200).json({message:societes})

    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

router.get('/:id/exposant', async function(req, res, next) {
    try {
        res_json = []
        const societes = await societe_controller.getAllExposantActif(req.params)

        res.status(200).json({message:societes})

    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});


router.get('/:id/reservation/exposant', async function(req, res, next) {
    try {
        res_json = []
        const editeurs = await societe_controller.getSocieteWithReservationByIdFestival(req.params)

        res.status(200).json({message:editeurs})

    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

router.get('/:id_festival/editeur/:id_societe/jeu', async function(req, res, next) {
    try {
        res_json = []
        const jeux = await jeu_reserve_controller.getJeuReserveByIdSocieteFestival(req.params)

        res.status(200).json({message:jeux})

    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

router.get('/:id_festival/prise_contact', async function(req, res, next) {
    try {
        const prise_contacts = await prise_contact_controller.getPriseContactByIdFestival(req.params)

        res.status(200).json({message:prise_contacts})

    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});


/**
 * =========================================================================================================================
 * Partie exposant
 * =========================================================================================================================
 */
router.get('/:id/exposant/:id_exposant/priseContact', async function(req, res, next) {
    try {
        const prisecontacts = await prise_contact_controller.getPriseContactById(req.params)

        res.status(200).json({ message: prisecontacts})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

router.get('/:id/exposant/priseContact/statut/:statut', async function(req, res, next) {
    try {
        const prisecontact = await prise_contact_controller.getPriseContactByStatus(req.params)

        res.status(200).json({ message: prisecontact})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});


/**
 * =========================================================================================================================
 * Partie espace
 * =========================================================================================================================
 */

router.get('/:id/espace', async function(req, res, next) {
    try {
        const espace = await espace_controller.getEspaceByIdFestival(req.params)
        res.status(200).json({message:espace})

    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

router.put('/:id', async function(req, res, next) {
    try {

        const festival = await festival_controller.updateFestival(req.body)
        res.status(200).json({ message: "ok"})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});

module.exports = router;
