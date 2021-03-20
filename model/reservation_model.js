const db = require('../db')


async function getReservationById(id_reservation) {
    try {
        const query = 'SELECT * FROM "Reservation" INNER JOIN "Festival" F on F.id_festival = "Reservation".id_festival_reservation ' +
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

async function updateReservation(id, besoin_benevol, deplacement, apport_jeux, reduction, cr_envoye, date_envoi_facture, date_paye_facture) {
    try {
        const query = 'UPDATE public."Reservation" SET besoin_benevol_reservation = $2, deplacement_reservation = $3,' +
            ' apport_jeux_reservation = $4, reduction_reservation = $5, reduction_reservation = $6,' +
            ' cr_envoye_reservation = $7, date_envoi_facture = $8, date_paye_facture = $9 WHERE id_reservation = $1;'
        const params = [id, besoin_benevol, deplacement, apport_jeux, reduction, cr_envoye, date_envoi_facture, date_paye_facture]
        await db.query(query, params)
    }
    catch (e) {
        throw e
    }
}

async function createReservation(id, besoin_benevol, deplacement, apport_jeux, reduction, cr_envoye, date_envoi_facture, date_paye_facture) {
    try {
        const query = query('INSERT INTO public."Reservation" (besoin_benevol_reservation,annee_festival) VALUES($1,$2);')
        const params = [id, besoin_benevol, deplacement, apport_jeux, reduction, cr_envoye, date_envoi_facture, date_paye_facture]
        await db.query(query, params)
    }
    catch (e) {
        throw e
    }
}

async function deleteReservation(id) {
    try {
        const {rows} = await db.query('DELETE FROM public."Reservation" WHERE id_reservation = $1;', [id])
        return rows
    }
    catch (e) {
        throw e
    }
}

module.exports = {getReservationById, getReservationByIdFestival,updateReservation,createReservation,deleteReservation}
