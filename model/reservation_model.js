const db = require('../db')

async function getReservationById(id_reservation) {
    try {

        const query = 'SELECT * FROM public."Reservation" WHERE id_reservation = $1;'
        const {rows} = await db.query(query, [id_reservation])

        return rows
    }
    catch (e) {
        throw e
    }
}


module.exports = {getReservationById}
