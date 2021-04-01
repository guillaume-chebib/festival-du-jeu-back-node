
const reservation_model = require("../model/reservation_model")
const jeu_reserve_controller = require("../controller/jeu_reserve_controller")
const commentaire_controller = require("../controller/commentaire_controller")
const espace_controller = require("../controller/espace_controller")
const allocation_espace_controller = require("../controller/allocation_espace_controller")



async function getReservationById(params) {

    try{
        let reservation =  (await reservation_model.getReservationById(params.id))[0]
        const jeux = await jeu_reserve_controller.getJeuReserveByIdReservation(params)
        const allocations_espace = await allocation_espace_controller.getAllocationsByIdReservation(params)
        const commentaires = await commentaire_controller.getCommentairesByIdReservation(params)

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

async function getCAPrevuByIdFestival(params) {
    try {
        return await reservation_model.getCAPrevuByIdFestival(params.id)
    }
    catch (e) {
        throw e
    }
}

async function getCAReelByIdFestival(params) {
    try {
        return await reservation_model.getCAReelByIdFestival(params.id)
    }
    catch (e) {
        throw e
    }
}

async function updateReservation(body){
    try{
        await reservation_model.updateReservation(body.id,body.besoin_benevole_reservation,body.deplacement_reservation,
                                                   body.apport_jeux_reservation, body.reduction_reservation, body.cr_envoye_reservation,
                                                    body.commentaire_reservation
        )
    }
    catch (e) {
        throw e
    }
}
async function updateDateReservation(body){
    try{
        await reservation_model.updateReservationDate(body.id,body.date_envoi_facture, body.date_paye_facture)
    }
    catch (e) {
        throw e
    }
}

async function createReservation(body){
    try{
        const id_reservation  = await reservation_model.createReservation(body.id_festival,body.id_societe,body.besoin_benevol_reservation,body.deplacement_reservation,
            body.apport_jeux_reservation, body.reduction_reservation, body.cr_envoye_reservation,
            body.date_envoi_facture, body.date_paye_facture
        )

        const list_Espace = await espace_controller.getEspaceByIdFestival({id : body.id_festival})



        list_Espace.forEach( e => {
            allocation_espace_controller.createAllocationEspace({
                nb_table_allocation_espace : 0,m2_allocation_espace : 0,
                remise_allocation_espace : 0, id_espace_allocation_espace : e.id_espace

            },{id_reservation_allocation_espace : id_reservation})
        })

        return id_reservation

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

module.exports = {updateDateReservation,getReservationById,getCAPrevuByIdFestival,getCAReelByIdFestival,getReservationsByIdFestival,updateReservation,createReservation,deleteReservation}
