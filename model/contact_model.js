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

async function updateContact(id,prenom,nom,email,telephone_portable,telephone_fixe, fonction, est_principal,id_societe) {
    try {
        const res = await db.query('UPDATE public."Contact" SET ' +
            'prenom_contact = $2,nom_contact = $3, email_contact = $4, telephone_portable_contact = $5, telephone_fixe_contact =$6,' +
            'donction_contact =$7,est_principal_contact = $8, id_societe_contact = $9 ' +
            'WHERE id_contact = $1;', [id,prenom,nom,email,telephone_portable,telephone_fixe, fonction, est_principal,id_societe])
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

module.exports = {createContact,getAllContact, getContactByIdSociete, deleteContact, getContactById, updateContact}
