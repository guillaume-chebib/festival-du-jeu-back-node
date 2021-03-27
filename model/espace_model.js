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

async function createEspace(prix_table, prix_surface ,nb_table, nom_espace, id_festival) {
    try {
       await db.query('INSERT INTO public."Espace" (prix_table_espace,prix_surface_espace,nb_table_espace,nom_espace,id_festival_espace) VALUES($1,$2,$3,$4,$5);',
           [prix_table, prix_surface ,nb_table,nom_espace, id_festival])
    }
    catch (e) {
        throw e
    }
}

async function updateEspace(prix_table, prix_surface ,nb_table, id_festival,id) {
    try {
        await db.query('UPDATE public."Espace" SET prix_table_espace = $1, prix_surface_espace = $2, nb_table_espace =$3 WHERE id_espace = $4;',
            [prix_table, prix_surface ,nb_table, id_festival,id])
    }
    catch (e) {
        throw e
    }
}

async function getEspaceById(id) {
    try {
        return await db.query('SELECT * FROM public."Espace" WHERE id_espace = $1;', [id])
    }
    catch (e) {
        throw e
    }
}

async function getEspaceByIdFestival(id) {
    try {
        const {rows} =  await db.query('SELECT * FROM public."Espace" WHERE id_festival_espace = $1;', [id])
        return {rows}
    }
    catch (e) {
        throw e
    }
}

async function updateAllocationEspace(prix_table, prix_surface, nb_table, id) {
    try {
        const query = query('UPDATE public."Espace" SET prix_table_espace = $1, prix_surface_espace = $2, nb_table_espace = $3 ' +
            'WHERE id_espace = $4;')
        const params = [prix_table, prix_surface, nb_table, id]
        await db.query(query, params)
    }
    catch (e) {
        throw e
    }
}
async function deleteEspace(id) {
    try {
        const {rows} = await db.query('DELETE FROM public."Espace" WHERE id_espace = $1;', [id])
        return rows
    }
    catch (e) {
        throw e
    }
}

module.exports =
    {
    getAllEspace,createEspace, updateEspace, getEspaceById,
    getEspaceByIdFestival, updateAllocationEspace, deleteEspace
}
