const db = require('../db')


async function getAllFestival() {
    try {
        const {rows} = await db.query('select * from public."Festival";', [])
        return rows
    }
    catch (e) {
        throw e
    }
}

async function getFestivalCourant() {
    try {
        const {rows} = await db.query('select * from public."Festival" where est_courant_festival = true;', [])
        return rows
    }
    catch (e) {
        throw e
    }
}

async function createFestival(year,name) {
    try {
        const res = await db.query('INSERT INTO public."Festival" (nom_festival,annee_festival) VALUES($1,$2)  RETURNING id_festival;', [name,year])
        return res.rows[0].id_festival

    }
    catch (e) {
        throw e
    }
}

async function updateFestival(id,year,name,est_courant) {
    try {
        const res = await db.query('UPDATE public."Festival" SET nom_festival = $1, annee_festival =$2, est_courant_festival = $4 WHERE id_festival = $3;', [name,year,id,est_courant])
        return res
    }
    catch (e) {
        throw e
    }
}

async function getFestivalById(id) {
    try {
        const {rows} = await db.query('SELECT * FROM public."Festival" WHERE id_festival = $1;', [id])
        return rows;
    }
    catch (e) {
        throw e
    }
}

module.exports = {getAllFestival,createFestival, updateFestival, getFestivalById,getFestivalCourant}
