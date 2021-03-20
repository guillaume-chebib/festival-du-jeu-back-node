const db = require('../db')


async function createSociete(nom,est_exposant,numero_rue,rue,est_editeur, est_inactif, ville, code_postal) {
    try {


        const query = 'INSERT INTO public."Societe" (nom_societe,est_exposant_societe,numero_rue_editeur,rue_editeur,est_editeur_societe, est_inactif_societe, ville_editeur, code_postal_editeur) ' +
            'VALUES($1, $2, $3, $4, $5, $6, $7, $8);'
        const {rows} = await db.query(query, [nom,est_exposant,numero_rue,rue,est_editeur, est_inactif, ville, code_postal])
        return rows
    }
    catch (e) {
        throw e
    }
}
async function updateSociete(id, nom,est_exposant,numero_rue,rue,est_editeur, est_inactif, ville, code_postal) {
    try {
        const query = 'UPDATE public."Societe" SET nom_societe = $2, est_exposant_societe = $3,' +
            ' numero_rue_editeur = $4, rue_editeur = $5, est_editeur_societe = $6, est_inactif_societe = $7,' +
            ' ville_editeur = $8, code_postal_editeur = $9 WHERE id_societe = $1;'
        const params = [id, nom,est_exposant,numero_rue,rue,est_editeur, est_inactif, ville, code_postal]
        await db.query(query, params, id)
    }
    catch (e) {
        throw e
    }
}
async function getAllSociete() {
    try {
        const {rows} = await db.query('SELECT * FROM public."Societe";', [])
        return rows
    }
    catch (e) {
        throw e
    }
}

async function getAllExposantActif() {
    try {
        const {rows} = await db.query('SELECT * FROM public."Societe" WHERE est_inactif_societe = false AND est_exposant_societe = true;', [])
        return rows
    }
    catch (e) {
        throw e
    }
}

async function getAllEditeur() {
    try {
        const {rows} = await db.query('SELECT * FROM public."Societe" WHERE est_editeur_societe = true AND est_exposant_societe = false;', [])
        return rows
    }
    catch (e) {
        throw e
    }
}

async function getAllEditeurExposant() {
    try {
        const {rows} = await db.query('SELECT * FROM public."Societe" WHERE est_exposant_societe = true AND est_editeur_societe = true;', [])
        return rows
    }
    catch (e) {
        throw e
    }
}

async function getAllExposant() {
    try {
        const {rows} = await db.query('SELECT * FROM public."Societe" WHERE est_exposant_societe = true AND est_editeur_societe = false;', [])
        return rows
    }
    catch (e) {
        throw e
    }
}

async function deleteSociete(id) {
    try {
        const {rows} = await db.query('DELETE FROM public."Societe" WHERE id_societe = $1;', [id])
        return rows
    }
    catch (e) {
        throw e
    }
}


async function getSocieteByVille(ville) {
    try {
        const {rows} = await db.query('SELECT * FROM public."Societe" WHERE ville_editeur = $1;', [ville])
        return rows
    }
    catch (e) {
        throw e
    }
}

async function getSocieteById(id) {
    try {
        const {rows} = await db.query('SELECT * FROM public."Societe" WHERE id_societe = $1;', [id])
        return rows
    }
    catch (e) {
        throw e
    }
}

async function getSocieteWithReservationByIdFestival(id) {
    try {
        const {rows} = await db.query('SELECT * FROM public."Societe" s ' +
            'JOIN public."Reservation" r ON s.id_societe = r.id_societe_reservation ' +
            'WHERE id_festival_reservation = $1;', [id])
        return rows
    }
    catch (e) {
        throw e
    }
}

module.exports = {createSociete, getAllExposant, getAllEditeurExposant, getAllEditeur, getAllExposantActif, getAllSociete, getSocieteByVille, deleteSociete, getSocieteById,updateSociete, getSocieteWithReservationByIdFestival}
