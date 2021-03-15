const db = require('../db')


async function createTypeJeu(nom) {
    try {
        const {rows} = await db.query("INSERT INTO public.\"Type_Jeu\" (nom_type_jeu) VALUES(?);", [nom])
        return rows
    }
    catch (e) {
        throw e
    }
}

async function getAllTypeJeu() {
    try {
        const {rows} = await db.query('SELECT * FROM public."Type_Jeu";', [])
        return rows
    }
    catch (e) {
        throw e
    }
}

async function deleteTypeJeu(id) {
    try {
        const {rows} = await db.query('DELETE FROM public."Type_Jeu" WHERE id_type_jeu = ?;', [id])
        return rows
    }
    catch (e) {
        throw e
    }
}

async function getTypeJeuById(id) {
    try {
        const {rows} = await db.query('SELECT * FROM public."Type_Jeu" WHERE id_type_jeu = ?;', [id])
        return rows
    }
    catch (e) {
        throw e
    }
}

module.exports = {createTypeJeu,getAllTypeJeu, deleteTypeJeu, getTypeJeuById}
