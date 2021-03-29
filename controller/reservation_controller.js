
const reservation_model = require("../model/reservation_model")
const jeu_reserve_controller = require("../controller/jeu_reserve_controller")
const allocation_espace_controller = require("../controller/allocation_espace_controller")
const commentaire_controller = require("../controller/commentaire_controller")

async function getReservationById(params) {

    try{
        let reservation =  (await reservation_model.getReservationById(params.id))[0]
        console.log(reservation)
        const jeux = await jeu_reserve_controller.getJeuReserveByIdReservation(params.id)
        const allocations_espace = await allocation_espace_controller.getAllocationsByIdReservation(params.id)
        const commentaires = await commentaire_controller.getCommentairesByIdReservation(params.id)

        reservation = {...reservation, jeux : jeux, allocations_espace : allocations_espace,  commentaires : commentaires}

        return reservation
    }
    catch (e) {
        throw e
    }

}


async function getReservationsByIdFestival(params) {
    try{

        return await reservation_model.getReservationByIdFestival(params.id)
    }
    catch (e) {
        throw e
    }
}

async function updateReservation(body){
    try{
        await reservation_model.updateReservation(body.id,body.besoin_benevole_reservation,body.deplacement_reservation,
                                                   body.apport_jeux_reservation, body.reduction_reservation, body.cr_envoye_reservation,
                                                    body.date_envoi_facture, body.date_paye_facture, body.commentaire_reservation
        )
    }
    catch (e) {
        throw e
    }
}

async function createReservation(body){
    try{
        await reservation_model.createReservation(body.id_reservation,body.besoin_benevol_reservation,body.deplacement_reservation,
            body.apport_jeux_reservation, body.reduction_reservation, body.cr_envoye_reservation,
            body.date_envoi_facture, body.date_paye_facture
        )
    }
    catch (e) {
        throw e
    }
}

async function deleteReservation(params) {
    try{
        await reservation_model.deleteReservation( params.id)
    }
    catch (e) {
        throw e
    }
}

module.exports = {getReservationById,getReservationsByIdFestival,updateReservation,createReservation,deleteReservation}
