const db = require('../db')


async function getAllEspace() {
    try {
        const {rows} = await db.query('select * from public."Espace";', [])
        return rows
    }
    catch (e) {
        throw e
    }
}

async function createEspace(prix_table, prix_surface ,nb_table, id_festival) {
    try {
        const res = await db.query('INSERT INTO public."Espace" (prix_table_espace,prix_surface_espace,nb_table_espace,id_festival_espace) VALUES($1,$2, $3, $4);', [prix_table, prix_surface ,nb_table, id_festival])
    }
    catch (e) {
        throw e
    }
}

async function updateEspace(id,prix_table, prix_surface ,nb_table, id_festival) {
    try {
        const res = await db.query('UPDATE public."Espace" SET prix_table_espace = $1, prix_surface_espace = $2, nb_table_espace =$3, id_festival_espace =$4 WHERE id_espace = $5;', [prix_table, prix_surface ,nb_table, id_festival,id])
    }
    catch (e) {
        throw e
    }
}

async function getEspaceById(id) {
    try {
        const res = await db.query('SELECT * FROM public."Espace" WHERE id_espace = $1;', [id])
    }
    catch (e) {
        throw e
    }
}

async function getEspaceByIdFestival(id) {
    try {
        const res = await db.query('SELECT * FROM public."Espace" WHERE id_festival = $1;', [id])
    }
    catch (e) {
        throw e
    }
}

module.exports = {getAllEspace,createEspace, updateEspace, getEspaceById, getEspaceByIdFestival}