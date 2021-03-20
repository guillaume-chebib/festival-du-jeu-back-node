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

async function createPriseContact(id_festival, id_societe ,premier, deuxieme,troisieme,statut) {
    try {
        const res = await db.query('INSERT INTO public."Prise_Contact" (id_festival_prise_contact, id_societe_prise_contact ,premier_prise_contact, deuxieme_prise_contact,troisieme_prise_contact,statut_prise_contact) VALUES($1,$2, $3, $4, $5, $6);', [id_festival, id_societe ,premier, deuxieme,troisieme,statut])
    }
    catch (e) {
        throw e
    }
}

async function updatePriseContact(id_festival, id_societe ,premier, deuxieme,troisieme,statut) {
    try {
        const res = await db.query('UPDATE public."Prise_Contact" SET premier_prise_contact =$3, deuxieme_prise_contact =$4, troisieme_prise_contact = $5, statut_prise_contact=$6  WHERE id_festival_prise_contact = $1, id_societe_prise_contact = $2;', [id_festival, id_societe ,premier, deuxieme,troisieme,statut])
    }
    catch (e) {
        throw e
    }
}

async function getPriseContactById(id_festival, id_societe) {
    try {
        const {rows} = await db.query('SELECT * FROM public."Prise_Contact" WHERE id_festival_prise_contact = $1 AND id_societe_prise_contact = $2;', [id_festival, id_societe])
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

module.exports = {getAllPriseContact,createPriseContact, updatePriseContact, getPriseContactById, getPriseContactByStatus}
