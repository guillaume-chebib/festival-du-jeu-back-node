
const reservation_model = require("../model/reservation_model")

async function getReservationById(params) {

    try{
        return await reservation_model.getReservationById(params.id)
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
        await reservation_model.updateReservation(body.id,body.besoin_benevol,body.deplacement,
                                                   body.apport_jeux, bodu.reduction, body.cr_envoye,
                                                    body.date_envoi_facture, body.date_paye_facture
        )
    }
    catch (e) {
        throw e
    }
}

async function createReservation(body){
    try{
        await reservation_model.createReservation(body.id,body.besoin_benevol,body.deplacement,
            body.apport_jeux, bodu.reduction, body.cr_envoye,
            body.date_envoi_facture, body.date_paye_facture
        )
    }
    catch (e) {
        throw e
    }
}

module.exports = {getReservationById,getReservationsByIdFestival,updateReservation,createReservation}
