const db = require('../db')


async function createOrganisateur(prenom,nom,email,est_admin,mot_de_passe) {
    try {
        const {rows} = await db.query("INSERT INTO public.\"Organisateur\" (prenom_organisateur, nom_organisateur, email_organisateur, est_admin_organisateur, mot_de_passe_organisateur) VALUES(?, ?, ?, ?, ?);", [prenom,nom,email,est_admin,mot_de_passe])
        return rows
    }
    catch (e) {
        throw e
    }
}

async function getAllOrganisateur() {
    try {
        const {rows} = await db.query('SELECT * FROM public."Organisateur";', [])
        return rows
    }
    catch (e) {
        throw e
    }
}

async function deleteOrganisateur(id) {
    try {
        const {rows} = await db.query('DELETE FROM public."Organisateur" WHERE id_organisateur = ?;', [id])
        return rows
    }
    catch (e) {
        throw e
    }
}


async function getOrganisateurById(id) {
    try {
        const {rows} = await db.query('SELECT * FROM public."Organisateur" WHERE id_organisateur = ?;', [id])
        return rows
    }
    catch (e) {
        throw e
    }
}

module.exports = {createOrganisateur,getAllOrganisateur, deleteOrganisateur, getOrganisateurById }