const db = require('../db')


async function getAllPriseContact() {
    try {
        const {rows} = await db.query('select * from public."Prise_Contact";', [])
        return rows
    }
    catch (e) {
        throw e
    }
}

async function getPriseContactByIdFestival(id_festival) {
    try {
        const {rows} = await db.query('select * from public."Prise_Contact"  INNER JOIN "Societe" S on S.id_societe = "Prise_Contact".id_societe_prise_contact  WHERE id_festival_prise_contact = $1;', [id_festival])
        return rows
    }
    catch (e) {
        throw e
    }
}
async function getPriseContactByIdExposant(id_exposant) {
    try {
        const {rows} = await db.query('select * from public."Prise_Contact" where id_societe_prise_contact = $1;', [id_exposant])
        return rows
    }
    catch (e) {
        throw e
    }
}

async function createPriseContact(id_festival, id_societe ,premier, deuxieme,troisieme,statut) {
    try {
        const query = 'INSERT INTO public."Prise_Contact" (id_festival_prise_contact, id_societe_prise_contact ,premier_prise_contact, deuxieme_prise_contact,troisieme_prise_contact,statut_prise_contact) VALUES($1,$2, $3, $4, $5, $6);'
        const res = await db.query(query, [id_festival, id_societe ,premier, deuxieme,troisieme,statut])

    }
    catch (e) {
        throw e
    }
}

async function updatePriseContact(id_festival, id_exposant ,premier, deuxieme,troisieme,statut) {
    try {
        const query = 'UPDATE public."Prise_Contact" SET premier_prise_contact =$3, deuxieme_prise_contact = $4, troisieme_prise_contact = $5, statut_prise_contact= $6  WHERE id_festival_prise_contact = $1 and id_societe_prise_contact = $2;'
        await db.query(query, [id_festival, id_exposant ,premier, deuxieme,troisieme,statut])
    }
    catch (e) {
        throw e
    }
}

async function getPriseContactById(id_festival, id_societe) {
    try {


        const query = 'SELECT * FROM public."Prise_Contact" WHERE id_festival_prise_contact = $1 AND id_societe_prise_contact = $2;'
        const {rows} = await db.query(query, [id_festival, id_societe])


        return rows
    }
    catch (e) {
        throw e
    }
}

async function getPriseContactByStatus(statut) {
    try {
        const {rows} = await db.query('SELECT * FROM public."Prise_Contact" WHERE statut_prise_contact = $1;', [statut])
        return rows
    }
    catch (e) {
        throw e
    }
}

async function getStatusPriseContact() {
    try {
        return await db.query('SELECT unnest(enum_range(NULL::statut_prise_contact)) ;', [])
    }
    catch (e) {
        throw e
    }
}

module.exports = {getStatusPriseContact,getAllPriseContact,createPriseContact, updatePriseContact, getPriseContactById, getPriseContactByStatus,getPriseContactByIdFestival,getPriseContactByIdExposant}
