const db = require('../db')


async function createContact(prenom,nom,email,telephone_portable,telephone_fixe, fonction, est_principal,id_societe) {
    try {
        const {rows} = await db.query("INSERT INTO public.\"Contact\" (prenom_contact,nom_contact, email_contact, telephone_portable_contact, telephone_fixe_contact,donction_contact,est_principal_contact, id_societe_contact) VALUES($1, $2, $3, $4, $5, $6, $7);", [prenom,nom,email,telephone_portable,telephone_fixe, fonction, est_principal,id_societe])
        return rows
    }
    catch (e) {
        throw e
    }
}

async function getAllContact() {
    try {
        const {rows} = await db.query('select * from public."Contact";', [])
        return rows
    }
    catch (e) {
        throw e
    }
}

async function deleteContact(id) {
    try {
        const {rows} = await db.query('DELETE FROM public."Contact" WHERE id_contact = $1;', [id])
        return rows
    }
    catch (e) {
        throw e
    }
}


async function getContactByIdSociete(id_societe) {
    try {
        const {rows} = await db.query('select * from public."Contact" WHERE id_societe_contact = $1;', [id_societe])
        return rows
    }
    catch (e) {
        throw e
    }
}

async function getContactById(id) {
    try {
        const {rows} = await db.query('select * from public."Contact" WHERE id_contact = $1;', [id])
        return rows
    }
    catch (e) {
        throw e
    }
}

module.exports = {createContact,getAllContact, getContactByIdSociete, deleteContact, getContactById}
