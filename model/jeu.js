const db = require('../db')


async function createJeu(titre,min_joueur,max_joueur,age,proto, id_type_jeu, id_editeur) {
    try {
        const {rows} = await db.query("INSERT INTO public.\"Jeu\" (titre_jeu,min_joueur_jeu,max_joueur_jeu, age_min_jeu, proto_jeu,id_type_jeu_jeu,id_editeur_jeu) VALUES($1, $2, $3, $4, $5, $6, $7);", [titre,min_joueur,max_joueur,age,proto, id_type_jeu, id_editeur])
        return rows
    }
    catch (e) {
        throw e
    }
}

async function getAllJeu() {
    try {
        const {rows} = await db.query('SELECT * FROM public."Jeu";', [])
        return rows
    }
    catch (e) {
        throw e
    }
}

async function deleteJeu(id) {
    try {
        const {rows} = await db.query('DELETE FROM public."Jeu" WHERE id_jeu = $1;', [id])
        return rows
    }
    catch (e) {
        throw e
    }
}


async function getJeuByIdEditeur(id_societe) {
    try {
        const {rows} = await db.query('SELECT * FROM public."Jeu" WHERE id_editeur_jeu = $1;', [id_societe])
        return rows
    }
    catch (e) {
        throw e
    }
}

async function getJeuByIdType(id_type) {
    try {
        const {rows} = await db.query('SELECT * FROM public."Jeu" WHERE id_type_jeu_jeu = $1;', [id_type])
        return rows
    }
    catch (e) {
        throw e
    }
}

async function getJeuByTypeName(nom) {
    try {
        const {rows} = await db.query('SELECT * FROM public."Jeu" j JOIN public."Type_Jeu" t ON j.id_type_jeu_jeu = t.id_type_jeu WHERE nom_type_jeu = $1;', [nom])
        return rows
    }
    catch (e) {
        throw e
    }
}

async function getJeuById(id) {
    try {
        const {rows} = await db.query('SELECT * FROM public."Jeu" WHERE id_jeu = $1;', [id])
        return rows
    }
    catch (e) {
        throw e
    }
}

module.exports = {createJeu,getAllJeu, getJeuByIdEditeur, deleteJeu, getJeuById, getJeuByIdType, getJeuByTypeName}
