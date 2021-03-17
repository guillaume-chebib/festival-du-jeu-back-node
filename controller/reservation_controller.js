
const reservation_model = require("../model/reservation_model")

async function getReservationById(params) {

    try{
        return await reservation_model.getReservationById(params.id)
    }
    catch (e) {
        throw e
    }

}


async function getReservationsByFestivalId(params) {
    try{

        return await reservation_model.getReservationByIdFestival(params.id)
    }
    catch (e) {
        throw e
    }
}

module.exports = {getReservationById,getReservationsByIdFestival: getReservationsByFestivalId}
