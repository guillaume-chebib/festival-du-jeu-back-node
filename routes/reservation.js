var express = require('express');
var router = express.Router();

const reservation_controller = require("../controller/reservation_controller")
const jeu_reserve_controller = require("../controller/jeu_reserve_controller")
const allocation_espace_controller = require("../controller/allocation_espace_controller")
const commentaire_controller = require("../controller/commentaire_controller")

router.get('/:id', async function(req, res, next) {

    try {
        const reservation = await reservation_controller.getReservationById(req.params)
        const jeux = await jeu_reserve_controller.getJeuReserveByIdReservation(req.params)
        const allocations_espace = await allocation_espace_controller.getAllocationsByIdReservation(req.params)
        const commentaires = await commentaire_controller.getCommentairesByIdReservation(req.params)
        res.status(200).json({ message: reservation, jeux : jeux, allocations_espace : allocations_espace, commentaires : commentaires})
    }
    catch (e) {
        res.status(500).json({ message: "can't load data" });
    }

});


router.put('/:id', async function(req, res, next) {

    try {
        await reservation_controller.updateReservation(req.body)
        res.status(200).json({ message: "success"})
    }
    catch (e) {
        res.status(500).json({ message: "can't modify data" });
    }

});

router.post('/', async function(req, res, next) {

    try {
        await reservation_controller.createReservation(req.body)
        res.status(200).json({ message: "success"})
    }
    catch (e) {
        res.status(500).json({ message: "can't add data" });
    }

});

router.delete('/:id', async function(req, res, next) {

    try {
        await reservation_controller.deleteReservation(req.params)
        res.status(200).json({ message: "success"})
    }
    catch (e) {
        res.status(500).json({ message: "can't delete data" });
    }

});

/**
 * =========================================================================================================================
 * Partie allocation espace
 * =========================================================================================================================
 */
router.post('/:id/allocation_espace/', async function(req, res, next) {

    try {
        await allocation_espace_controller.createAllocationEspace(req.body,req.params)
        res.status(200).json({ message: "success"})
    }
    catch (e) {
        res.status(500).json({ message: "can't add data" });
    }

});

//======================= PUT ========================//

router.put('/:id/jeuxReserve/:id_jeu', async function(req, res, next) {
    try {
        await jeu_reserve_controller.updateJeuReserve(req.params,req.body)
        res.status(200).json({message:"success"})

    }
    catch (e) {
        res.status(500).json({ message: "can't add data" });
    }

});

router.put('/:id/allocation_espace/:id_espace', async function(req, res, next) {

    try {
        await allocation_espace_controller.updateAllocationEspace(req.body,req.params)
        res.status(200).json({ message: "success"})
    }
    catch (e) {
        res.status(500).json({ message: "can't modify data" });
    }

});

router.delete('/:id/allocation_espace/:id_espace', async function(req, res, next) {

    try {
        await allocation_espace_controller.deleteAllocationEspace(req.params)
        res.status(200).json({ message: "success"})
    }
    catch (e) {
        res.status(500).json({ message: "can't delete data" });
    }

});



/**
 * =========================================================================================================================
 * Partie commentaire
 * =========================================================================================================================
 */




module.exports = router;
