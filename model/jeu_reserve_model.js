const db = require('../db')


async function createJeuReserve(id_jeu,id_reservation, quantite, nb_table, tombola, dotation, place_plan, recu, a_renvoyer, est_renvoyer, montant_renvoi, id_zone) {
    try {
        const {rows} = await db.query('INSERT INTO public."Jeu_Reserve" (id_jeu_jeu_reserve,id_reservation_jeu_reserve, quantite_jeu_reserve, nb_table_jeu_reserve, tombola_jeu_reserve, dotation_jeu_reserve, place_plan_jeu_reserve, recu_jeu_reserve, a_renvoyer_jeu_reserve, est_renvoyer_jeu_reserve, montant_renvoi_jeu_reserve, id_zone_jeu_reserve) VALUES($1, $2, $3, $4, $5, $6, $7, $8);', [id_jeu,id_reservation, quantite, nb_table, tombola, dotation, place_plan, recu, a_renvoyer, est_renvoyer, montant_renvoi, id_zone])
        return rows
    }
    catch (e) {
        throw e
    }
}

async function getAllJeuReserve() {
    try {
        const {rows} = await db.query('SELECT * FROM public."Jeu_Reserve";', [])
        return rows
    }
    catch (e) {
        throw e
    }
}

async function deleteJeuReserve(id_jeu,id_reservation) {
    try {
        const {rows} = await db.query('DELETE FROM public."Jeu_Reserve" WHERE id_jeu_jeu_reserve = $1 AND id_reservation = $2;', [id_jeu,id_reservation])
        return rows
    }
    catch (e) {
        throw e
    }
}


async function getJeuReserveByIdFestival(id_festival) {
    try {
        const {rows} = await db.query('SELECT * ' +
            'FROM public."Jeu_Reserve" r JOIN public."Jeu" j ON r.id_jeu_jeu_reserve = j.id_jeu ' +
            'JOIN public."Reservation" re ON re.id_reservation = r.id_reservation_jeu_reserve' +
            'WHERE id_festival_reservation = $1;', [id_festival])
        return rows
    }
    catch (e) {
        throw e
    }
}

async function getJeuReserveByIdReservation(id_reservation) {
    try {
        const {rows} = await db.query('SELECT * ' +
            'FROM public."Jeu_Reserve" r JOIN public."Jeu" j ON r.id_jeu_jeu_reserve = j.id_jeu ' +
            'WHERE id_reservation_jeu_reserve = $1;', [id_reservation])
        return rows
    }
    catch (e) {
        throw e
    }
}


module.exports = {createJeuReserve,getAllJeuReserve, deleteJeuReserve, getJeuReserveByIdFestival, getJeuReserveByIdReservation}
