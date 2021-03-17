

const db = require('../db')

async function getReservationById(id_reservation) {
    try {
        console.log(id_reservation)
        const query = 'SELECT * FROM public."Reservation" INNER JOIN "Festival" F on F.id_festival = "Reservation".id_festival_reservation ' +
            'INNER JOIN "Societe" S on S.id_societe = "Reservation".id_societe_reservation ' +
            'WHERE id_reservation = $1;'
        const {rows} = await db.query(query, [id_reservation])

        return rows
    }
    catch (e) {
        throw e
    }
}
async function getReservationByIdFestival(id_festival) {
    try {
        const query = 'SELECT * FROM public."Reservation" WHERE id_festival_reservation = $1;'
        const {rows} = await db.query(query, [id_festival])

        return rows
    }
    catch (e) {
        throw e
    }
}


module.exports = {getReservationById, getReservationByIdFestival}
