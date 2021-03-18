const db = require('../db')


async function createOrganisateur(prenom,nom,email,est_admin,mot_de_passe) {
    try {
        const res = await db.query("INSERT INTO public.\"Organisateur\" (prenom_organisateur, nom_organisateur, email_organisateur, est_admin_organisateur, mot_de_passe_organisateur) VALUES($1, $2, $3, $4, $5);", [prenom,nom,email,est_admin,mot_de_passe])
        return res
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
        const {rows} = await db.query('DELETE FROM public."Organisateur" WHERE id_organisateur = $1;', [id])
        return rows
    }
    catch (e) {
        throw e
    }
}


async function getOrganisateurById(id) {
    try {
        const {rows} = await db.query('SELECT * FROM public."Organisateur" WHERE id_organisateur = $1;', [id])
        return rows
    }
    catch (e) {
        throw e
    }
}

async function getOrganisateurByMailAndPassword(email,password){
    try {

        const {rows} = await db.query('SELECT * FROM public."Organisateur" WHERE email_organisateur = $1 AND mot_de_passe_organisateur = $2;', [email,password])
        return rows
    }
    catch (e) {
        throw e
    }
}

async function getOrganisateurByMail(email){
    try {

        const {rows} = await db.query('SELECT * FROM public."Organisateur" WHERE email_organisateur = $1;', [email])
        return rows
    }
    catch (e) {
        throw e
    }
}

module.exports = {createOrganisateur,getAllOrganisateur, deleteOrganisateur, getOrganisateurById, getOrganisateurByMailAndPassword,getOrganisateurByMail }
