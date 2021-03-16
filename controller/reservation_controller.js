const reservation_model = require("../model/reservation_model")

async function getReservationById(id_reservation) {

    try{
        return await reservation_model.getReservationById(id_reservation)
    }
    catch (e) {
        throw e
    }

}

module.exports = {getReservationById}
