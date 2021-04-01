const db = require('../db')


async function getReservationById(id_reservation) {
    try {
        const query = 'SELECT * FROM "Reservation" R INNER JOIN "Festival" F on F.id_festival = R.id_festival_reservation INNER JOIN "Societe" S on S.id_societe = R.id_societe_reservation INNER JOIN "Prise_Contact" PC on F.id_festival = PC.id_festival_prise_contact and R.id_societe_reservation = PC.id_societe_prise_contact WHERE id_reservation = $1;'
        const {rows} = await db.query(query, [id_reservation])

        return rows
    }
    catch (e) {
        throw e
    }
}


async function getReservationByIdFestival(id_festival) {
    try {
        const query = 'SELECT * FROM public."Reservation" INNER JOIN "Societe" S on S.id_societe = "Reservation".id_societe_reservation LEFT JOIN "Commentaire" C on "Reservation".id_reservation = C.id_reservation_commentaire  WHERE id_festival_reservation = $1;'
        const {rows} = await db.query(query, [id_festival])

        return rows
    }
    catch (e) {
        throw e
    }
}

async function getCAPrevuByIdFestival(id_festival) {
    try {
        const query = 'SELECT SUM(prix_total_reservation) AS CA_prevu ' +
            'FROM "Reservation" ' +
            'WHERE id_festival_reservation = $1'
        const {rows} = await db.query(query, [id_festival])

        return rows
    }
    catch (e) {
        throw e
    }
}

async function getCAReelByIdFestival(id_festival) {
    try {
        const query = 'SELECT SUM(prix_total_reservation) AS CA_reel ' +
            'FROM "Reservation" ' +
            'WHERE date_paye_facture IS NOT NULL AND id_festival_reservation = $1'
        const {rows} = await db.query(query, [id_festival])

        return rows
    }
    catch (e) {
        throw e
    }
}

async function updateReservation(id, besoin_benevol, deplacement, apport_jeux, reduction, cr_envoye,commentaire) {
    try {
        console.log(id, besoin_benevol, deplacement, apport_jeux, reduction, cr_envoye,commentaire)

        const query = 'UPDATE public."Reservation" SET besoin_benevole_reservation = $2, deplacement_reservation = $3, apport_jeux_reservation = $4, reduction_reservation = $5, cr_envoye_reservation = $6, commentaire_reservation =$7 WHERE id_reservation = $1;'
        const params = [id, besoin_benevol, deplacement, apport_jeux, reduction, cr_envoye,commentaire]
        await db.query(query, params)
    }
    catch (e) {
        throw e

    }
}
async function updateReservationDate(id, date_envoi_facture, date_paye_facture) {
    try {
        const query = 'UPDATE public."Reservation" SET date_envoi_facture=$2 , date_paye_facture=$3 WHERE id_reservation = $1;'
        const params = [id, date_envoi_facture, date_paye_facture]
        await db.query(query, params)
    }
    catch (e) {
        throw e

    }
}

async function createReservation( id_festival,id_societe,besoin_benevol, deplacement, apport_jeux, reduction, cr_envoye, date_envoi_facture, date_paye_facture) {
    try {
        const query = 'INSERT INTO public."Reservation" (besoin_benevole_reservation,deplacement_reservation, apport_jeux_reservation, reduction_reservation, cr_envoye_reservation, date_envoi_facture, date_paye_facture,id_festival_reservation,id_societe_reservation)' +
            ' VALUES($1,$2,$3, $4, $5, $6, $7,$8,$9) RETURNING id_reservation;'
        const params = [besoin_benevol, deplacement, apport_jeux, reduction, cr_envoye, date_envoi_facture, date_paye_facture, id_festival, id_societe]
        const res = await db.query(query, params)
        return res.rows[0].id_reservation

    }
    catch (e) {
        console.log(e)
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

module.exports = {getReservationById, getCAPrevuByIdFestival, getCAReelByIdFestival, getReservationByIdFestival,updateReservation,createReservation,deleteReservation,updateReservationDate}
