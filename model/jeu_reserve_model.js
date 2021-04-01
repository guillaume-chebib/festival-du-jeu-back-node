const db = require('../db')


async function createJeuReserve(id_jeu,id_reservation, quantite, nb_table, tombola, dotation, place_plan, recu, a_renvoyer, est_renvoye, montant_renvoi, id_zone,derniere_modif_jeu_reserve) {
    try {
        const {rows} = await db.query('INSERT INTO public."Jeu_Reserve" ' +
            '(id_jeu_jeu_reserve,id_reservation_jeu_reserve, quantite_jeu_reserve, nb_table_jeu_reserve, ' +
            'tombola_jeu_reserve, dotation_jeu_reserve, place_plan_jeu_reserve, recu_jeu_reserve, ' +
            'a_renvoyer_jeu_reserve, est_renvoye_jeu_reserve, montant_renvoi_jeu_reserve, id_zone_jeu_reserve,derniere_modif_jeu_reserve) ' +
            'VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13);', [id_jeu,id_reservation, quantite, nb_table, tombola, dotation, place_plan, recu, a_renvoyer, est_renvoye, montant_renvoi, id_zone,derniere_modif_jeu_reserve])
        return rows
    }
    catch (e) {
        throw e
    }
}

async function updateJeuReserve(id_jeu,id_reservation, quantite, nb_table, tombola, dotation, place_plan, recu, a_renvoyer, est_renvoye, montant_renvoi, id_zone,derniere_modif_jeu_reserve) {
    try {
        const {rows} = await db.query('UPDATE public."Jeu_Reserve" SET ' +
            'quantite_jeu_reserve = $3, nb_table_jeu_reserve = $4, ' +
            'tombola_jeu_reserve = $5, dotation_jeu_reserve = $6, place_plan_jeu_reserve = $7, recu_jeu_reserve = $8, ' +
            'a_renvoyer_jeu_reserve = $9, est_renvoye_jeu_reserve = $10, montant_renvoi_jeu_reserve = $11, id_zone_jeu_reserve = $12, derniere_modif_jeu_reserve = $13 ' +
            'WHERE id_jeu_jeu_reserve = $1 AND id_reservation_jeu_reserve = $2;'
            ,[id_jeu,id_reservation, quantite, nb_table, tombola, dotation, place_plan, recu, a_renvoyer, est_renvoye, montant_renvoi, id_zone, derniere_modif_jeu_reserve])
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
        const {rows} = await db.query('DELETE FROM public."Jeu_Reserve" WHERE id_jeu_jeu_reserve = $1 AND id_reservation_jeu_reserve = $2;', [id_jeu,id_reservation])
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
            'LEFT JOIN public."Type_Jeu" tj ON tj.id_type_jeu = j.id_type_jeu_jeu ' +
            'JOIN public."Reservation" re ON re.id_reservation = r.id_reservation_jeu_reserve ' +
            'WHERE id_festival_reservation = $1;', [id_festival])
        return rows
    }
    catch (e) {
        throw e
    }
}

async function getJeuReserveByIdFestivalPublic(id_festival) {
    try {
        const {rows} = await db.query('SELECT id_jeu,titre_jeu,min_joueur_jeu,max_joueur_jeu,age_min_jeu,proto_jeu,url_consignes_jeu, nom_societe, nom_zone, duree_jeu ' +
            'FROM public."Jeu_Reserve" r JOIN public."Jeu" j ON r.id_jeu_jeu_reserve = j.id_jeu ' +
            'JOIN public."Zone" z ON r.id_zone_jeu_reserve = z.id_zone ' +
            'JOIN public."Societe" s ON j.id_editeur_jeu = s.id_societe ' +
            'LEFT JOIN public."Type_Jeu" tj ON tj.id_type_jeu = j.id_type_jeu_jeu ' +
            'JOIN public."Reservation" re ON re.id_reservation = r.id_reservation_jeu_reserve ' +
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
            'LEFT JOIN public."Type_Jeu" tj ON tj.id_type_jeu = j.id_type_jeu_jeu ' +
            'LEFT JOIN public."Zone" z ON r.id_zone_jeu_reserve = z.id_zone ' +
            'WHERE id_reservation_jeu_reserve = $1;', [id_reservation])
        return rows
    }
    catch (e) {
        throw e
    }
}

async function getJeuReserveByIdZone(id_zone) {
    try {
        const {rows} = await db.query('SELECT * ' +
            'FROM public."Jeu_Reserve" r JOIN public."Jeu" j ON r.id_jeu_jeu_reserve = j.id_jeu ' +
            'JOIN public."Societe" s ON s.id_societe = j.id_editeur_jeu ' +
            'LEFT JOIN public."Type_Jeu" tj ON tj.id_type_jeu = j.id_type_jeu_jeu ' +
            'JOIN public."Zone" z ON z.id_zone = r.id_zone_jeu_reserve ' +
            'WHERE id_zone_jeu_reserve = $1;', [id_zone])
        return rows
    }
    catch (e) {
        throw e
    }
}

async function getJeuReserveByIdZonePublic(id_zone) {
    try {
        const {rows} = await db.query('SELECT id_jeu,titre_jeu,min_joueur_jeu,max_joueur_jeu,age_min_jeu,proto_jeu,url_consignes_jeu, nom_societe, nom_zone, duree_jeu ' +
            'FROM public."Jeu_Reserve" r JOIN public."Jeu" j ON r.id_jeu_jeu_reserve = j.id_jeu ' +
            'JOIN public."Societe" s ON s.id_societe = j.id_editeur_jeu ' +
            'LEFT JOIN public."Type_Jeu" tj ON tj.id_type_jeu = j.id_type_jeu_jeu ' +
            'JOIN public."Zone" z ON z.id_zone = r.id_zone_jeu_reserve ' +
            'WHERE id_zone_jeu_reserve = $1;', [id_zone])
        return rows
    }
    catch (e) {
        throw e
    }
}

async function getJeuReserveByIdSocieteFestival(id_societe, id_festival) {
    try {
        const {rows} = await db.query('SELECT * ' +
            'FROM public."Jeu_Reserve" r JOIN public."Jeu" j ON r.id_jeu_jeu_reserve = j.id_jeu ' +
            'LEFT JOIN public."Type_Jeu" tj ON tj.id_type_jeu = j.id_type_jeu_jeu ' +
            'JOIN public."Reservation" re ON re.id_reservation = r.id_reservation_jeu_reserve ' +
            'JOIN public."Societe" s ON s.id_societe = re.id_societe_reservation ' +
            'WHERE id_societe_reservation = $1 AND id_festival_reservation = $2;', [id_societe,id_festival])
        return rows
    }
    catch (e) {
        throw e
    }
}


async function getJeuReserveByIdSocieteFestivalPublic(id_societe, id_festival) {
    try {
        const {rows} = await db.query('SELECT id_jeu,titre_jeu,min_joueur_jeu,max_joueur_jeu,age_min_jeu,proto_jeu,url_consignes_jeu,nom_societe,nom_zone, duree_jeu ' +
            'FROM public."Jeu_Reserve" r JOIN public."Jeu" j ON r.id_jeu_jeu_reserve = j.id_jeu ' +
            'JOIN public."Zone" z ON r.id_zone_jeu_reserve = z.id_zone ' +
            'LEFT JOIN public."Type_Jeu" tj ON tj.id_type_jeu = j.id_type_jeu_jeu ' +
            'JOIN public."Reservation" re ON re.id_reservation = r.id_reservation_jeu_reserve ' +
            'JOIN public."Societe" s ON s.id_societe = j.id_editeur_jeu ' +
            'WHERE id_editeur_jeu = $1 AND id_festival_reservation = $2;', [id_societe,id_festival])
        return rows
    }
    catch (e) {
        throw e
    }
}

module.exports = {getJeuReserveByIdSocieteFestivalPublic,getJeuReserveByIdZonePublic,getJeuReserveByIdFestivalPublic,createJeuReserve,getAllJeuReserve, deleteJeuReserve, updateJeuReserve, getJeuReserveByIdFestival, getJeuReserveByIdReservation, getJeuReserveByIdZone, getJeuReserveByIdSocieteFestival}
